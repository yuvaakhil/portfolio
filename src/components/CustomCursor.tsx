import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    // Add hover effects for interactive elements
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll(
        'a, button, input, textarea, [role="button"], .cursor-pointer, [data-cursor="pointer"]'
      );

      interactiveElements.forEach((element) => {
        element.addEventListener('mouseenter', () => setIsHovering(true));
        element.addEventListener('mouseleave', () => setIsHovering(false));
      });

      return () => {
        interactiveElements.forEach((element) => {
          element.removeEventListener('mouseenter', () => setIsHovering(true));
          element.removeEventListener('mouseleave', () => setIsHovering(false));
        });
      };
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    
    const cleanup = addHoverListeners();

    // Re-add listeners when DOM changes
    const observer = new MutationObserver(cleanup);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      cleanup();
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-50 transition-all duration-150 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } hidden md:block`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      >
        <div
          className={`w-2 h-2 bg-black dark:bg-white rounded-full transition-all duration-200 ${
            isHovering ? 'scale-0' : 'scale-100'
          } ${isClicking ? 'scale-150' : ''}`}
          style={{
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>

      {/* Cursor ring */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-40 transition-all duration-300 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } hidden md:block`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      >
        <div
          className={`w-8 h-8 border border-black dark:border-white rounded-full transition-all duration-300 ${
            isHovering ? 'scale-150 border-2' : 'scale-100'
          } ${isClicking ? 'scale-75' : ''}`}
          style={{
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>

      {/* Hover effect circle */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-30 transition-all duration-500 ease-out ${
          isVisible && isHovering ? 'opacity-20' : 'opacity-0'
        } hidden md:block`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      >
        <div
          className="w-16 h-16 bg-black dark:bg-white rounded-full transition-all duration-500"
          style={{
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor;