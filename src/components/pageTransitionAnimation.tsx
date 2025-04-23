"use client";
import { motion, AnimatePresence } from "framer-motion";


interface PageTransitionAnimationProps {
  children: React.ReactNode;
  type: string;
}

function PageTransitionAnimation({ children, type }: PageTransitionAnimationProps) {



    if (type === "fadeIn") {
        return (
            <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                >{children}</motion.div>
                </AnimatePresence>
        )
    }
    if (type === "slideRight") {
        return (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        );
    }
    if (type === "slideLeft") {
        return (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.2 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        );
    }
  
    if (type === "scaleIn") {
        return (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.1 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        );
    }
  
    return (
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    );
}

export default PageTransitionAnimation;