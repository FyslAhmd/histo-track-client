import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const dotVariants = {
  visible: {
    y: [0, -15, 0],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    },
  },
};

const LoadingThreeDotsJumping = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <motion.div
        className="flex items-center justify-center gap-3 h-40"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span
          className="w-4 h-4 rounded-full bg-black"
          variants={dotVariants}
        />
        <motion.span
          className="w-4 h-4 rounded-full bg-black"
          variants={dotVariants}
        />
        <motion.span
          className="w-4 h-4 rounded-full bg-black"
          variants={dotVariants}
        />
      </motion.div>
    </div>
  );
};

export default LoadingThreeDotsJumping;
