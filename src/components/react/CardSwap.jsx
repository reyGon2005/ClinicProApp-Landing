import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CardSwap({ images }) {
  const [index, setIndex] = useState(0);

  // Cambio automático cada 3.5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [images.length]);

  const handleClick = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div
      className="position-relative mx-auto"
      style={{
        width: "100%",
        maxWidth: "600px",
        height: "400px",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <AnimatePresence mode="popLayout">
        {images.map((img, i) => {
          // Solo renderizamos la imagen actual y la siguiente para rendimiento
          if (i !== index && i !== (index + 1) % images.length) return null;

          const isFront = i === index;

          return (
            <motion.img
              key={img}
              src={img}
              alt="Pantalla de la app"
              className="img-fluid rounded-4 shadow-lg border position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
              initial={
                isFront
                  ? { scale: 0.9, y: 20, opacity: 0 }
                  : { scale: 1, y: 0, opacity: 1 }
              }
              animate={
                isFront
                  ? { zIndex: 10, scale: 1, y: 0, opacity: 1 }
                  : { zIndex: 5, scale: 0.9, y: 20, opacity: 0.5 } // La carta de atrás se ve más chica
              }
              exit={{ zIndex: 0, scale: 1.1, opacity: 0, x: -100, rotate: -5 }} // Animación de salida (swap)
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          );
        })}
      </AnimatePresence>
    </div>
  );
}
