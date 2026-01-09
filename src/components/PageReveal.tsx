import { motion } from "framer-motion";

interface PageRevealProps {
  onComplete?: () => void;
}

const PageReveal = ({ onComplete }: PageRevealProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-[200] bg-[hsl(25,15%,12%)]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{
        duration: 1.4,
        ease: [0.43, 0.13, 0.23, 0.96],
        delay: 0.2,
      }}
      onAnimationComplete={onComplete}
      style={{ pointerEvents: "none" }}
    />
  );
};

export default PageReveal;
