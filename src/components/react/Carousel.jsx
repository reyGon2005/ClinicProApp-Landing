import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Carousel({ items, autoPlay = true, interval = 4000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, interval);
    return () => clearInterval(timer);
  }, [items.length, interval, autoPlay]);

  const variants = {
    enter: { x: 50, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -50, opacity: 0 },
  };

  return (
    <div
      className="position-relative w-100 d-flex flex-column align-items-center justify-content-center"
      style={{ minHeight: "400px" }}
    >
      {/* CAMBIO AQUÍ: Reduje maxWidth a 350px y aumenté height para hacerlo cuadrado */}
      <div
        className="position-relative w-100"
        style={{ maxWidth: "350px", height: "350px" }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="position-absolute top-0 start-0 w-100 h-100 rounded-5 shadow-lg d-flex flex-column align-items-center justify-content-center text-center p-4"
            style={{
              backgroundColor: "#213448",
              color: "white",
            }}
          >
            {/* Icono */}
            <div
              className="bg-white rounded-circle d-flex align-items-center justify-content-center mb-4 text-dark-blue"
              style={{ width: "70px", height: "70px" }}
            >
              {" "}
              {/* Icono un poco más grande */}
              <i className={`ph ${items[index].icon} fs-2`}></i>
            </div>

            {/* Texto */}
            <h3 className="fw-bold mb-3 h4">{items[index].title}</h3>
            <p className="opacity-75 small px-2">{items[index].desc}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Puntos de navegación */}
      <div className="d-flex gap-2 mt-4">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="border-0 rounded-circle transition-all"
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: i === index ? "#213448" : "#ccc",
              transition: "background-color 0.3s ease",
            }}
            aria-label={`Ir a diapositiva ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
