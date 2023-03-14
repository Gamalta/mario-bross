import React, {useEffect, useRef} from 'react';

import Box from '@mui/material/Box';

import GameInstance from '../game/GameInstance';

export default function GamePage(): React.ReactElement {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const gameInstance = new GameInstance();

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    if (!canvas || !context) {
      return;
    }

    gameInstance.init({canvas, context});

    function animate() {
      gameInstance.animate();
      requestAnimationFrame(animate);
    }

    function handleResize() {
      if (!canvas) return;
      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;
    }

    window.addEventListener('resize', handleResize);

    handleResize();
    animate();

    return () => window.removeEventListener('resize', handleResize);
  });

  return (
    <Box width="100vw" height="100vh" overflow="hidden">
      <canvas ref={canvasRef} />
    </Box>
  );
}
