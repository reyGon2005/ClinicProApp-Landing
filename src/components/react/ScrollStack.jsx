import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Card({
  title,
  description,
  icon,
  color,
  index,
  progress,
  range,
  targetScale,
}) {
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "sticky",
        top: 0,
      }}
    >
      <motion.div
        style={{
          scale,
          backgroundColor: color,
          top: `calc(-5vh + ${index * 25}px)`,
        }}
        className="card border-0 shadow-lg p-5 rounded-5 text-white position-relative"
      >
        <div
          className="d-flex flex-column align-items-center text-center"
          style={{ maxWidth: "500px" }}
        >
          <i className={`ph ${icon} fs-1 mb-4`}></i>
          <h2 className="display-5 fw-bold mb-3">{title}</h2>
          <p className="fs-4">{description}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default function ScrollStack() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const cards = [
    {
      title: "Gestión de Pacientes",
      description:
        "Accede al historial de consultas, datos de contacto y motivos de consulta.",
      icon: "ph-users",
      color: "#3a86ff",
    },
    {
      title: "Agenda Médica",
      description:
        "Organiza tu día. Registra citas, identifica espacios libres y mejora tu puntualidad.",
      icon: "ph-calendar-check",
      color: "#8338ec",
    },
    {
      title: "Finanzas Claras",
      description:
        "Registra ingresos y gastos. Visualiza tu balance diario y mensual con gráficas automáticas.",
      icon: "ph-chart-bar",
      color: "#ff006e",
    },
  ];

  return (
    <div ref={container} style={{ position: "relative" }}>
      {cards.map((card, i) => {
        const targetScale = 1 - (cards.length - i) * 0.05;
        return (
          <Card
            key={i}
            {...card}
            index={i}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
}
