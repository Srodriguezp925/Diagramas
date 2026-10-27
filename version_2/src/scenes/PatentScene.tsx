import { Img, staticFile, useCurrentFrame, interpolate } from "remotion";
import { SceneFrame } from "../SceneFrame";

export const PatentScene = () => {
  const frame = useCurrentFrame();

  return (
    <SceneFrame>
      <div
        style={{
          position: "absolute",
          top: 294,
          left: 84,
          right: 84,
          textAlign: "center",
          opacity: interpolate(frame, [10, 35], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        <div
          style={{
            color: "#bd9a69",
            fontSize: 17,
            fontWeight: 700,
            letterSpacing: 3,
          }}
        >
          JAMES PUCKLE · 1718
        </div>
        <h1
          style={{
            margin: "22px 0 15px",
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: 68,
            fontWeight: 400,
            lineHeight: 1.08,
          }}
        >
          La <span style={{ color: "#d9b27b" }}>Defence Gun</span>
        </h1>
        <p
          style={{
            margin: "0 auto",
            maxWidth: 820,
            color: "#d4cbbb",
            fontSize: 25,
            lineHeight: 1.5,
          }}
        >
          Un diseño montado, con un cilindro giratorio y un solo cañón.
        </p>
      </div>
      <div
        style={{
          position: "absolute",
          top: 650,
          left: 75,
          width: 930,
          height: 542,
          overflow: "hidden",
          border: "1px solid rgba(217, 178, 123, 0.45)",
          borderRadius: 22,
          backgroundColor: "#f4eddf",
          boxShadow: "0 34px 90px rgba(0,0,0,0.38)",
          opacity: interpolate(frame, [24, 54], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          scale: interpolate(frame, [24, 54, 394], [0.96, 1, 1.035], {
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
          top: 1275,
          left: 94,
          right: 94,
          display: "flex",
          gap: 14,
        }}
      >
        {["SOPORTE", "CILINDRO", "CAÑÓN"].map((label, index) => (
          <div
            key={label}
            style={{
              flex: 1,
              padding: "20px 8px",
              borderTop: "1px solid rgba(189,154,105,0.55)",
              borderBottom: "1px solid rgba(189,154,105,0.25)",
              color: index === 1 ? "#d9b27b" : "#d4cbbb",
              textAlign: "center",
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: 2,
              opacity: interpolate(frame, [66 + index * 8, 94 + index * 8], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            {label}
          </div>
        ))}
      </div>
      <p
        style={{
          position: "absolute",
          top: 1388,
          left: 120,
          right: 120,
          margin: 0,
          color: "#a89d88",
          textAlign: "center",
          fontSize: 18,
          lineHeight: 1.5,
        }}
      >
        Ilustración esquemática del proyecto.
      </p>
    </SceneFrame>
  );
};
