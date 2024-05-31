import React from 'react';
import { motion } from 'framer-motion';

const blobVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  animate: {
    opacity: [0.6, 0.3, 0.6],
    scale: [0.2, 1.1, 0.9],
    x: ['0vw', '100vw', '-100vw', '50vw', '-50vw'], // Random horizontal movement
    y: ['0vh', '100vh', '-100vh', '50vh', '-50vh'], // Random vertical movement
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: 'mirror',
      ease: 'linear',
    },
  },
};

const AnimatedBackground = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-full -z-10 overflow-hidden">
      <div className="relative h-full w-full bg-slate-950">
      <motion.div
  className="absolute bottom-0 left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.5),rgba(255,255,255,0))]"
  variants={blobVariants}
  initial="initial"
  animate="animate"
/>
<motion.div
  className="absolute top-0 right-[-50%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(0,182,255,.5),rgba(255,255,255,0))]"
  variants={blobVariants}
  initial="initial"
  animate="animate"
/>
<motion.div
  className="absolute bottom-0 left-[80%] top-[10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.5),rgba(255,255,255,0))]"
  variants={blobVariants}
  initial="initial"
  animate="animate"
/>
<motion.div
  className="absolute top-0 right-[80%] top-[10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(0,182,255,.5),rgba(255,255,255,0))]"
  variants={blobVariants}
  initial="initial"
  animate="animate"
/>
      </div>
    </div>
  );
};

export default AnimatedBackground;
