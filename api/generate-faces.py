from http.server import BaseHTTPRequestHandler
import json
import requests
import base64
import urllib.parse
from PIL import Image
import io
import concurrent.futures
import time

class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        try:
            # Parse query parameters
            query = urllib.parse.urlparse(self.path).query
            params = urllib.parse.parse_qs(query)
            
            # Get number of faces to generate (default to 1)
            count = int(params.get('count', ['1'])[0])
            count = min(count, 150)  # Limit to 150 faces max
            
            faces = []
            
            # Generate faces sequentially with delay to avoid getting cached duplicates
            for i in range(count):
                try:
                    # Add delay between requests to ensure we get different faces
                    if i > 0:
                        time.sleep(0.5)  # Half second delay ensures cache miss
                    
                    # Get face from thispersondoesnotexist.com
                    response = requests.get(
                        "https://thispersondoesnotexist.com", 
                        headers={
                            'User-Agent': 'FaceGrid 1.0',
                            'Cache-Control': 'no-cache',
                            'Pragma': 'no-cache'
                        },
                        timeout=10
                    )
                    
                    if response.status_code == 200:
                        # Resize image to optimize file size and performance
                        img = Image.open(io.BytesIO(response.content))
                        
                        # Resize to 256x256 for better performance (down from 1024x1024)
                        img = img.resize((256, 256), Image.Resampling.LANCZOS)
                        
                        # Convert back to bytes with optimized quality
                        buffer = io.BytesIO()
                        img.save(buffer, format='JPEG', quality=85, optimize=True)
                        buffer.seek(0)
                        
                        # Convert to base64
                        image_base64 = base64.b64encode(buffer.getvalue()).decode('utf-8')
                        faces.append(f'data:image/jpeg;base64,{image_base64}')
                    else:
                        faces.append(None)
                except Exception:
                    faces.append(None)
            
            # Return response
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            
            result = {
                'success': True,
                'count': len([f for f in faces if f is not None]),
                'faces': faces
            }
            
            self.wfile.write(json.dumps(result).encode('utf-8'))
            
        except Exception as e:
            self.send_response(500)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            
            result = {
                'success': False,
                'error': str(e)
            }
            
            self.wfile.write(json.dumps(result).encode('utf-8'))

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()