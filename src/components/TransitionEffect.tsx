'use client'
import React from 'react';
import { motion } from 'framer-motion';

const TransitionEffect = () => {
  return (
    <>
    
        <>
          <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-purple-500"
            initial={{ x: "100%", width: "100%" }}
            animate={{ x: "0%", width: "0%" }}
            transition={{ duration: 0.2, ease: "easeInOut" }} />
          
          <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-blue-600"
            initial={{ x: "100%", width: "100%" }}
            animate={{ x: "0%", width: "0%" }}
            transition={{ duration: 0.4, ease: "easeInOut", delay: 0.1 }} />

          <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-purple-400"
            initial={{ x: "100%", width: "100%" }}
            animate={{ x: "0%", width: "0%" }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }} />

          <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-5 bg-blue-500"
            initial={{ x: "100%", width: "100%" }}
            animate={{ x: "0%", width: "0%" }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }} />
        </>
      
    </>
  );
};

export default TransitionEffect;