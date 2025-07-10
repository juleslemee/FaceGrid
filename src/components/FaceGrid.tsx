
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
        className="w-full max-w-4xl mx-auto"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gap: '4px',
          aspectRatio: `${cols}/${rows}`,
        }}
      >
        {/* Render loaded faces */}
        {faces.map((face, index) => (
          <div
            key={index}
            className="aspect-square overflow-hidden rounded-sm bg-gray-100 relative group"
          >
            <img
              src={face}
              alt={`AI generated face ${index + 1}`}
              className="w-full h-full object-cover transition-transform group-hover:scale-105"
              loading="lazy"
            />
          </div>
        ))}
        
        {/* Render placeholder skeletons for remaining cells */}
        {isGenerating && Array.from({ length: emptyCells }).map((_, index) => (
          <div key={`skeleton-${index}`} className="aspect-square">
            <Skeleton className="w-full h-full rounded-sm" />
          </div>
        ))}
      </div>
    );
  }
);

FaceGrid.displayName = 'FaceGrid';

export default FaceGrid;
