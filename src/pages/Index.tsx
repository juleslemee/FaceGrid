
import React, { useState, useRef } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { Download, Users } from 'lucide-react';
import FaceGrid from '@/components/FaceGrid';
import { generateFaceGrid, downloadGrid } from '@/utils/gridUtils';

const gridSizes = [
  { label: '3x3 (9 faces)', value: '3x3', rows: 3, cols: 3 },
  { label: '4x4 (16 faces)', value: '4x4', rows: 4, cols: 4 },
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

  const selectedGrid = gridSizes.find(size => size.value === selectedSize) || gridSizes[1];
  const totalFaces = selectedGrid.rows * selectedGrid.cols;

  const handleGenerate = async () => {
    setIsGenerating(true);
    setIsComplete(false);
    setProgress(0);
    setFaces([]);

    try {
      const generatedFaces = await generateFaceGrid(
        totalFaces,
        (loadedCount) => {
          setProgress((loadedCount / totalFaces) * 100);
          setFaces(prev => [...prev.slice(0, loadedCount - 1), ...Array(1).fill('').map(() => URL.createObjectURL(new Blob()))]);
        }
      );
      
      setFaces(generatedFaces);
      setIsComplete(true);
    } catch (error) {
      console.error('Failed to generate faces:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = () => {
    if (gridRef.current) {
      downloadGrid(gridRef.current, `peoplegrid-${selectedSize}-${Date.now()}.png`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Users className="w-8 h-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">PeopleGrid</h1>
          </div>
          <p className="text-xl text-gray-600">
            AI Face Grid Generator
          </p>
          <p className="text-gray-500 mt-2">
            Generate grids of AI faces for mockups and presentations
          </p>
        </div>

        {/* Controls Card */}
        <Card className="mb-8 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <h2 className="text-2xl font-semibold text-gray-800">Generate Your Grid</h2>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 items-end">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Grid Size
                </label>
                <Select value={selectedSize} onValueChange={setSelectedSize}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select grid size" />
                  </SelectTrigger>
                  <SelectContent>
                    {gridSizes.map((size) => (
                      <SelectItem key={size.value} value={size.value}>
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
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium"
              >
                {isGenerating ? 'Generating...' : 'Generate Grid'}
              </Button>
            </div>

            {/* Progress Bar */}
            {isGenerating && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Generating faces...</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="w-full" />
              </div>
            )}

            {/* Download Button */}
            {isComplete && faces.length > 0 && (
              <div className="flex justify-center">
                <Button
                  onClick={handleDownload}
                  variant="outline"
                  size="lg"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download PNG
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Grid Display */}
        {faces.length > 0 && (
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
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

        {/* Footer */}
        <div className="text-center mt-12 text-gray-500">
          <p className="text-sm">
            Powered by AI • All faces are artificially generated
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
