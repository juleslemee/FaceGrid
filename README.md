# FaceGrid AI Gallery

Generate professional grids of AI-generated faces perfect for mockups, presentations, and design projects.

## Features

- Generate grids from 3x3 to 15x10 (up to 150 faces)
- Real-time progress tracking
- High-quality PNG downloads
- Responsive design
- No registration required

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Tech Stack

- **Frontend**: React + TypeScript + Vite
- **UI**: Tailwind CSS + shadcn/ui
- **Backend**: Python Vercel Functions
- **Face Generation**: ThisPersonDoesNotExist.com API
- **Image Processing**: html2canvas for downloads

## Usage

1. Select your desired grid size
2. Click "Generate Grid" 
3. Wait for faces to load
4. Download your high-quality PNG

## API

The app uses a Python backend API that fetches faces from `https://thispersondoesnotexist.com/` and returns them to the frontend for grid composition.

## License

MIT License - Feel free to use in your projects!