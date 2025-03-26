"use client";
import { motion } from "framer-motion";


interface PageTransitionAnimationProps {
  children: React.ReactNode;
  type: string;
}

function PageTransitionAnimation({ children, type }: PageTransitionAnimationProps) {



    if (type === "fadeIn") {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >{children}</motion.div>
        )
    }
    if (type === "slideRight") {
        return (
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >{children}</motion.div>
        )
    }
    if (type === "slideLeft") {
        return (
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
            >{children}</motion.div>
        )
    }
  
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    );
}

export default PageTransitionAnimation;