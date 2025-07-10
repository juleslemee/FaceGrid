from http.server import BaseHTTPRequestHandler
import json
import requests
import base64
import urllib.parse

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
            
            # Generate faces using the same logic as our backend
            for i in range(count):
                # Get face from thispersondoesnotexist.com
                response = requests.get(
                    "https://thispersondoesnotexist.com", 
                    headers={'User-Agent': 'FaceGrid 1.0'},
                    timeout=10
                )
                
                if response.status_code == 200:
                    # Convert to base64
                    image_base64 = base64.b64encode(response.content).decode('utf-8')
                    faces.append(f'data:image/jpeg;base64,{image_base64}')
                else:
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