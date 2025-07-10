
import React, { forwardRef } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface FaceGridProps {
  faces: string[];
  rows: number;
  cols: number;
  isGenerating: boolean;
}

const FaceGrid = forwardRef<HTMLDivElement, FaceGridProps>(
  ({ faces, rows, cols, isGenerating }, ref) => {
    const totalCells = rows * cols;
    const emptyCells = totalCells - faces.length;

    return (
      <div 
        ref={ref}
        className="w-full max-w-5xl mx-auto"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gap: '6px',
          aspectRatio: `${cols}/${rows}`,
        }}
      >
        {/* Render loaded faces */}
        {faces.map((face, index) => (
          <div
            key={index}
            className="aspect-square overflow-hidden rounded-lg bg-gray-100 relative group shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <img
              src={face}
              alt={`AI generated face ${index + 1}`}
              className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
          </div>
        ))}
        
        {/* Render placeholder skeletons for remaining cells */}
        {isGenerating && Array.from({ length: emptyCells }).map((_, index) => (
          <div key={`skeleton-${index}`} className="aspect-square">
            <Skeleton className="w-full h-full rounded-lg animate-pulse" />
          </div>
        ))}
      </div>
    );
  }
);

FaceGrid.displayName = 'FaceGrid';

export default FaceGrid;
