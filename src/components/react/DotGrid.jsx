export default function DotGrid() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        opacity: 0.4,
        backgroundImage: "radial-gradient(#3a86ff 1px, transparent 1px)",
        backgroundSize: "30px 30px",
        maskImage: "linear-gradient(to bottom, black 40%, transparent 100%)", // Desvanece hacia abajo
        WebkitMaskImage:
          "linear-gradient(to bottom, black 40%, transparent 100%)",
      }}
    />
  );
}
