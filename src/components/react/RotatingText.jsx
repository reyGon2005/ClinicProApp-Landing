import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RotatingText({ words = [] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [words]);

  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
        width: "180px",
        textAlign: "left",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary fw-bold"
          style={{ position: "absolute", left: 0, top: 0 }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
      <span style={{ opacity: 0 }}>{words[0]}</span>{" "}
      {/* Espaciador invisible */}
    </div>
  );
}
