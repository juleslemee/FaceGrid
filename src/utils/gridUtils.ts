
// Utility functions for generating face grids and handling downloads

export const generateFaceGrid = async (
  totalFaces: number,
  onProgress: (loadedCount: number) => void
): Promise<string[]> => {
  try {
    // Call our API to generate faces
    const response = await fetch(`/api/generate-faces?count=${totalFaces}`);
    
    if (!response.ok) {
      throw new Error(`API error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (!data.success) {
      throw new Error(data.error || 'Failed to generate faces');
    }
    
    // Filter out any null faces and report progress
    const validFaces = data.faces.filter((face: string) => face !== null);
    onProgress(validFaces.length);
    
    return validFaces;
    
  } catch (error) {
    console.error('Failed to generate face grid:', error);
    throw error;
  }
};

// Keep the old function as fallback
const fetchFaceImage = async (): Promise<string> => {
  try {
    // Add random parameter to bypass cache
    const response = await fetch(`https://thispersondoesnotexist.com/?${Math.random()}`, {
      method: 'GET',
      cache: 'no-cache',
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const blob = await response.blob();
    return URL.createObjectURL(blob);
  } catch (error) {
    console.error('Failed to fetch face image:', error);
    // Return a placeholder or retry logic could be added here
    throw error;
  }
};

export const downloadGrid = (gridElement: HTMLElement, filename: string) => {
  // Use html2canvas to convert the grid to an image
  import('html2canvas').then(html2canvas => {
    html2canvas.default(gridElement, {
      backgroundColor: '#ffffff',
      scale: 2, // Higher resolution
      useCORS: true,
      allowTaint: true,
    }).then(canvas => {
      const link = document.createElement('a');
      link.download = filename;
      link.href = canvas.toDataURL('image/png');
      link.click();
    }).catch(error => {
      console.error('Failed to generate image:', error);
      // Fallback: try to download individual images as a zip or show error
      alert('Failed to generate download. Please try again.');
    });
  }).catch(() => {
    // Fallback if html2canvas fails to load
    alert('Download feature unavailable. Please try refreshing the page.');
  });
};
