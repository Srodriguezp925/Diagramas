import { Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { SceneFrame } from "../SceneFrame";

export const PucklePatentScene = () => {
  const frame = useCurrentFrame();

  return (
    <SceneFrame number="02" section="LA PATENTE">
      <div style={{ position: "absolute", top: 235, left: 80, right: 80, textAlign: "center" }}>
        <div style={{ color: "#d2a66b", fontFamily: "Arial, sans-serif", fontSize: 15, fontWeight: 700, letterSpacing: 2.4 }}>
          JAMES PUCKLE · 1718
        </div>
        <h1 style={{ margin: "24px 0 15px", fontSize: 62, lineHeight: 1.08, letterSpacing: -1 }}>
          La <span style={{ color: "#ddb477" }}>Defence Gun</span>
        </h1>
        <p style={{ maxWidth: 820, margin: "0 auto", color: "#c8beaa", fontFamily: "Arial, sans-serif", fontSize: 25, lineHeight: 1.42 }}>
          Un arma montada, con un cilindro giratorio de varias cámaras y un solo cañón.
        </p>
      </div>
      <div
        style={{
          position: "absolute",
          top: 600,
          left: 66,
          width: 948,
          height: 553,
          overflow: "hidden",
          borderRadius: 24,
          background: "#f7f1e5",
          boxShadow: "0 24px 75px rgba(0,0,0,0.36)",
          opacity: interpolate(frame, [20, 48], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          scale: interpolate(frame, [20, 48], [0.96, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            output: "perceptual-scale",
          }),
        }}
      >
        <Img
          src={staticFile("defenseGun.svg")}
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: 1220,
          left: 86,
          right: 86,
          display: "flex",
          justifyContent: "center",
          gap: 12,
          opacity: interpolate(frame, [75, 100], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        {["MONTAJE", "CILINDRO", "CAÑÓN"].map((label) => (
          <div
            key={label}
            style={{
              flex: 1,
              padding: "17px 8px",
              border: "1px solid rgba(210,166,107,0.35)",
              borderRadius: 13,
              color: "#e2c79a",
              textAlign: "center",
              fontFamily: "Arial, sans-serif",
              fontSize: 14,
              letterSpacing: 1.1,
            }}
          >
            {label}
          </div>
        ))}
      </div>
      <p
        style={{
          position: "absolute",
          top: 1335,
          left: 110,
          right: 110,
          margin: 0,
          color: "#a99f8b",
          textAlign: "center",
          fontFamily: "Arial, sans-serif",
          fontSize: 18,
          lineHeight: 1.45,
          opacity: interpolate(frame, [95, 120], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        Esquema conceptual basado en los diagramas del proyecto.
      </p>
    </SceneFrame>
  );
};
