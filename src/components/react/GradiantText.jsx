import { motion } from "framer-motion";

export default function GradientText({ children, className = "" }) {
  return (
    <span className={`position-relative d-inline-block ${className}`}>
      <motion.span
        style={{
          backgroundImage:
            "linear-gradient(to right, #3a86ff, #8338ec, #ff006e, #3a86ff)",
          backgroundSize: "200% auto",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        animate={{ backgroundPosition: ["0% center", "200% center"] }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      >
        {children}
      </motion.span>
    </span>
  );
}
