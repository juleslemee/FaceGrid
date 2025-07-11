
import React, { useState, useRef } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { Download, Users, Sparkles } from 'lucide-react';
import FaceGrid from '@/components/FaceGrid';
import { generateFaceGrid, downloadGrid } from '@/utils/gridUtils';

const gridSizes = [
  { label: '3x3 (9 faces)', value: '3x3', rows: 3, cols: 3 },
  { label: '4x4 (16 faces)', value: '4x4', rows: 4, cols: 4 },
  { label: '6x4 (24 faces)', value: '6x4', rows: 4, cols: 6 },
  { label: '5x5 (25 faces)', value: '5x5', rows: 5, cols: 5 },
  { label: '6x6 (36 faces)', value: '6x6', rows: 6, cols: 6 },
  { label: '8x8 (64 faces)', value: '8x8', rows: 8, cols: 8 },
  { label: '10x10 (100 faces)', value: '10x10', rows: 10, cols: 10 },
  { label: '15x10 (150 faces)', value: '15x10', rows: 10, cols: 15 },
];

const Index = () => {
  const [selectedSize, setSelectedSize] = useState('4x4');
  const [faces, setFaces] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);
  const borderlessGridRef = useRef<HTMLDivElement>(null);

  const selectedGrid = gridSizes.find(size => size.value === selectedSize) || gridSizes[1];
  const totalFaces = selectedGrid.rows * selectedGrid.cols;

  const handleGenerate = async () => {
    setIsGenerating(true);
    setIsComplete(false);
    setProgress(0);
    setFaces([]);

    // Estimate time based on grid size (roughly 0.5s per face)
    const estimatedTime = totalFaces * 750; // milliseconds
    const incrementInterval = estimatedTime / 95; // Stop at 95% until actual completion
    
    // Start fake progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 95) {
          clearInterval(progressInterval);
          return 95;
        }
        return prev + 1;
      });
    }, incrementInterval);

    try {
      const generatedFaces = await generateFaceGrid(
        totalFaces,
        (loadedCount) => {
          // This will jump to 100% when done
          clearInterval(progressInterval);
          setProgress(100);
        }
      );
      
      setFaces(generatedFaces);
      setIsComplete(true);
    } catch (error) {
      console.error('Failed to generate faces:', error);
      clearInterval(progressInterval);
      setProgress(0);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = () => {
    if (gridRef.current) {
      downloadGrid(gridRef.current, `peoplegrid-${selectedSize}-${Date.now()}.jpg`);
    }
  };

  const handleDownloadNoBorders = () => {
    if (borderlessGridRef.current) {
      downloadGrid(borderlessGridRef.current, `peoplegrid-${selectedSize}-borderless-${Date.now()}.jpg`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="relative">
              <Users className="w-10 h-10 text-blue-600" />
              <Sparkles className="w-4 h-4 text-yellow-500 absolute -top-1 -right-1 animate-pulse" />
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-blue-600 bg-clip-text text-transparent">
              FaceGrid
            </h1>
          </div>
          <p className="text-2xl text-gray-700 font-medium mb-3">
            AI Face Grid Generator
          </p>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Generate professional grids of AI faces perfect for mockups, presentations, and design projects
          </p>
        </div>

        {/* Controls Card */}
        <Card className="mb-12 shadow-2xl border-0 bg-white/90 backdrop-blur-sm overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-indigo-50/50" />
          <div className="relative">
            <CardHeader className="pb-6">
              <h2 className="text-3xl font-bold text-gray-800 text-center">Generate Your Grid</h2>
              <p className="text-gray-600 text-center mt-2">Choose your grid size and create stunning face collections</p>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="flex flex-col gap-6 items-end">
                <div className="w-full sm:flex-1">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Grid Size (smaller = faster)
                  </label>
                  <Select value={selectedSize} onValueChange={setSelectedSize}>
                    <SelectTrigger className="w-full h-12 text-lg border-2 border-gray-200 hover:border-blue-300 transition-colors">
                      <SelectValue placeholder="Select grid size" />
                    </SelectTrigger>
                    <SelectContent>
                      {gridSizes.map((size) => (
                        <SelectItem key={size.value} value={size.value} className="text-lg py-3">
                          {size.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <Button
                  onClick={handleGenerate}
                  disabled={isGenerating}
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 disabled:transform-none"
                >
                  {isGenerating ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5 mr-2" />
                      Generate Grid
                    </>
                  )}
                </Button>
              </div>

              {/* Progress Bar */}
              {isGenerating && (
                <div className="space-y-3 animate-fade-in">
                  <div className="flex justify-between text-sm font-medium text-gray-700">
                    <span>Generating {totalFaces} unique faces...</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <Progress value={progress} className="w-full h-3" />
                </div>
              )}

              {/* Download Buttons */}
              {isComplete && faces.length > 0 && (
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
                  <Button
                    onClick={handleDownload}
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    <Download className="w-5 h-5 mr-3" />
                    Download Image
                  </Button>
                  <Button
                    onClick={handleDownloadNoBorders}
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto border-2 border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    <Download className="w-5 h-5 mr-3" />
                    Download Without Borders
                  </Button>
                </div>
              )}
            </CardContent>
          </div>
        </Card>

        {/* Grid Display */}
        {faces.length > 0 && (
          <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm animate-fade-in">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Your Generated Grid</h3>
                <p className="text-gray-600">
                  {isGenerating ? `Loading ${faces.length} of ${totalFaces} faces...` : `${totalFaces} unique AI-generated faces`}
                </p>
              </div>
              <FaceGrid
                ref={gridRef}
                faces={faces}
                rows={selectedGrid.rows}
                cols={selectedGrid.cols}
                isGenerating={isGenerating}
              />
            </CardContent>
          </Card>
        )}

        {/* Hidden Borderless Grid for Download */}
        {isComplete && faces.length > 0 && (
          <div className="fixed -left-[9999px] top-0 bg-white">
            <div 
              ref={borderlessGridRef}
              style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${selectedGrid.cols}, 1fr)`,
                gap: '0',
                width: `${selectedGrid.cols * 256}px`,
              }}
            >
              {faces.map((face, index) => (
                <img
                  key={index}
                  src={face}
                  alt=""
                  style={{ width: '256px', height: '256px', display: 'block' }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-16 text-gray-500">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-4 h-4" />
            <p className="text-sm font-medium">
            All faces are artificially generated and do not represent real people
            </p>
            <Sparkles className="w-4 h-4" />
          </div>
          <p className="text-xs">
            Made with 💙 by Jules Lemée
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
