import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import './PixelSwap.css';

export default function PixelSwap({
  frontImage,
  backImage,
  alt = 'ZIPLINE ASIA Adventure Infrastructure',
  pattern = 'diagonal', // 'diagonal' | 'left-to-right' | 'random' | 'center-out'
  trigger = 'hover', // 'hover' | 'click'
  pixelSize = 36,
  duration = 0.45,
  randomness = 0.1,
  bounce = 0,
  rounded = false,
  className = ''
}) {
  const containerRef = useRef(null);
  const [isSwapped, setIsSwapped] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateSize = () => {
      const rect = el.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        setDimensions({ width: Math.round(rect.width), height: Math.round(rect.height) });
      }
    };

    updateSize();

    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(el);

    return () => resizeObserver.disconnect();
  }, []);

  const cols = Math.max(1, Math.ceil(dimensions.width / pixelSize));
  const rows = Math.max(1, Math.ceil(dimensions.height / pixelSize));

  // Calculate delays per cell based on chosen pattern
  const gridTiles = useMemo(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return [];

    const tiles = [];

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        let normalizedProgress = 0;

        if (pattern === 'diagonal') {
          normalizedProgress = (c + r) / Math.max(1, (cols + rows - 2));
        } else if (pattern === 'left-to-right') {
          normalizedProgress = c / Math.max(1, cols - 1);
        } else if (pattern === 'center-out') {
          const centerX = (cols - 1) / 2;
          const centerY = (rows - 1) / 2;
          const dist = Math.hypot(c - centerX, r - centerY);
          const maxDist = Math.hypot(centerX, centerY);
          normalizedProgress = dist / Math.max(1, maxDist);
        } else {
          normalizedProgress = Math.random();
        }

        const randomJitter = (Math.random() - 0.5) * randomness;
        const finalDelay = Math.max(0, normalizedProgress + randomJitter) * duration * 0.6;

        tiles.push({
          id: `${r}-${c}`,
          col: c,
          row: r,
          delay: finalDelay,
        });
      }
    }

    return tiles;
  }, [cols, rows, dimensions.width, dimensions.height, pattern, duration, randomness]);

  const handleMouseEnter = useCallback(() => {
    if (trigger === 'hover') setIsSwapped(true);
  }, [trigger]);

  const handleMouseLeave = useCallback(() => {
    if (trigger === 'hover') setIsSwapped(false);
  }, [trigger]);

  const handleClick = useCallback(() => {
    setIsSwapped((prev) => !prev);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`pixel-swap-container ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label={`${alt} - Click or hover to toggle technical view`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setIsSwapped((prev) => !prev);
        }
      }}
    >
      {/* Front Base Image */}
      <img
        src={frontImage}
        alt={alt}
        className="pixel-swap-img-base z-0"
        style={{ opacity: isSwapped ? 0 : 1 }}
        loading="lazy"
      />

      {/* Back Base Image */}
      <img
        src={backImage || frontImage}
        alt={`${alt} - View`}
        className="pixel-swap-img-base z-1"
        style={{ opacity: isSwapped ? 1 : 0 }}
        loading="lazy"
      />

      {/* Dynamic Pixel Swap Overlay Grid */}
      {dimensions.width > 0 && dimensions.height > 0 && (
        <div
          className="pixel-swap-grid-layer"
          style={{
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`,
          }}
          aria-hidden="true"
        >
          {gridTiles.map((tile) => {
            const posX = cols > 1 ? (tile.col / (cols - 1)) * 100 : 0;
            const posY = rows > 1 ? (tile.row / (rows - 1)) * 100 : 0;

            return (
              <div
                key={tile.id}
                className="pixel-swap-tile"
                style={{
                  backgroundImage: `url(${isSwapped ? backImage : frontImage})`,
                  backgroundPosition: `${posX}% ${posY}%`,
                  backgroundSize: `${dimensions.width}px ${dimensions.height}px`,
                  borderRadius: rounded ? '4px' : '0px',
                  opacity: isSwapped ? 1 : 0,
                  transform: isSwapped
                    ? 'scale(1)'
                    : bounce > 0
                    ? `scale(${1 - bounce * 0.2})`
                    : 'scale(0.92)',
                  transitionDuration: `${duration}s`,
                  transitionDelay: `${tile.delay}s`,
                  transitionTimingFunction: bounce > 0
                    ? `cubic-bezier(0.34, 1.56, 0.64, 1)`
                    : 'cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
