import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailing, setTrailing] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);

    let animationFrame;

    const smoothFollow = () => {
      setTrailing((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15, // 👈 0.15 = speed
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
      animationFrame = requestAnimationFrame(smoothFollow);
    };

    smoothFollow();

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(animationFrame);
    };
  }, [position]);

  return (
    <>
      {/* outer cursor */}
      <div
        className="cursor-outer fixed w-8 h-8 rounded-full border-2 border-gray-900 dark:border-white pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-colors duration-300 z-[9998]"
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
          transition: "transform 0.08s ease-out", // 👈 smoother movement
        }}
      />

      <div
        className="cursor-dot fixed w-3 h-3 rounded-full bg-gray-900 dark:bg-white pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-colors duration-300 z-[9998]"
        style={{
          transform: `translate(${trailing.x - 8}px, ${trailing.y - 8}px)`,
        }}
      />
    </>
  );
};

export default CustomCursor;
