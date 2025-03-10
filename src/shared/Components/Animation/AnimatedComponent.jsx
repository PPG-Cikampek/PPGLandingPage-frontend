import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedComponent = ({ children, animationType = "fadeIn" }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const variants = {
    fadeIn: { opacity: 1, y: 0 },
    slideInLeft: { opacity: 1, x: 0 },
    slideInRight: { opacity: 1, x: 0 },
    zoomIn: { opacity: 1, scale: 1 },
  };

  const initialStates = {
    fadeIn: { opacity: 0, y: 50 },
    slideInLeft: { opacity: 0, x: -50 },
    slideInRight: { opacity: 0, x: 50 },
    zoomIn: { opacity: 0, scale: 0.5 },
  };

  React.useEffect(() => {
    if (inView) {
      controls.start(variants[animationType]);
    }
  }, [controls, inView, animationType]);

  return (
    <motion.div
      ref={ref}
      initial={initialStates[animationType]}
      animate={controls}
      transition={{ duration: 1.5 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponent;

// import React, { useEffect, useRef } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// let delayCounter = 0; // A global counter for sequential delay
// let hasFirstAnimationRun = false; // Track if the first animation has run

// const AnimatedComponent = ({ children, animationType = "fadeIn", resetDelay = false }) => {
//   const controls = useAnimation();
//   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
//   const delayRef = useRef(0); // Local delay for each component

//   // Reset delayCounter and the first animation flag if resetDelay is true
//   useEffect(() => {
//     if (resetDelay) {
//       delayCounter = 0;
//       hasFirstAnimationRun = false;
//     }
//   }, [resetDelay]);

//   // Set the delayRef value based on whether it's the first animation
//   useEffect(() => {
//     if (inView) {
//       if (!hasFirstAnimationRun) {
//         delayRef.current = 0; // No delay for the first animation
//         hasFirstAnimationRun = true; // Set the flag to true after the first animation
//       } else {
//         delayRef.current = delayCounter; // Use sequential delay for subsequent animations
//         delayCounter += 0.5; // Increment global delay counter
//       }
//       controls.start(variants[animationType]);
//     }
//   }, [controls, inView, animationType]);

//   const variants = {
//     fadeIn: { opacity: 1, y: 0 },
//     slideInLeft: { opacity: 1, x: 0 },
//     slideInRight: { opacity: 1, x: 0 },
//     zoomIn: { opacity: 1, scale: 1 },
//   };

//   const initialStates = {
//     fadeIn: { opacity: 0, y: 50 },
//     slideInLeft: { opacity: 0, x: -50 },
//     slideInRight: { opacity: 0, x: 50 },
//     zoomIn: { opacity: 0, scale: 0.5 },
//   };

//   return (
//     <motion.div
//       ref={ref}
//       initial={initialStates[animationType]}
//       animate={controls}
//       transition={{ duration: 0.5, delay: delayRef.current }}
//     >
//       {children}
//     </motion.div>
//   );
// };

// export default AnimatedComponent;

