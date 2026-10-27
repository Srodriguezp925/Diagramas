import { SceneFrame } from "../SceneFrame";
import { Easing, interpolate, useCurrentFrame } from "remotion";

export const MechanismScene = () => {
  const frame = useCurrentFrame();

  return (
    <SceneFrame
      number="03"
      section="EL CILINDRO GIRATORIO"
      durationInFrames={473}
    >
      <div
        style={{
          position: "absolute",
          top: 296,
          left: 80,
          right: 80,
          textAlign: "center",
          opacity: interpolate(frame, [10, 36], [0, 1], {
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
          UNA IDEA MECÁNICA
        </div>
        <h1
          style={{
            margin: "24px 0 15px",
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: 64,
            fontWeight: 400,
            lineHeight: 1.1,
          }}
        >
          Varias cámaras.
          <br />
          <span style={{ color: "#d9b27b" }}>Un mismo cañón.</span>
        </h1>
        <p
          style={{
            margin: "0 auto",
            maxWidth: 830,
            color: "#d4cbbb",
            fontSize: 25,
            lineHeight: 1.5,
          }}
        >
          El cilindro giraba para alinear cada cámara con el cañón.
        </p>
      </div>
      <div
        style={{
          position: "absolute",
          top: 790,
          left: 185,
          width: 710,
          height: 500,
          border: "1px solid rgba(189,154,105,0.3)",
          borderRadius: 28,
          background:
            "radial-gradient(ellipse at 48% 48%, rgba(189,154,105,0.1), rgba(189,154,105,0.015) 62%, transparent 70%)",
          opacity: interpolate(frame, [20, 50], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 140,
            top: 70,
            width: 410,
            height: 360,
            border: "2px solid rgba(217,178,123,0.78)",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(189,154,105,0.18) 0 8%, rgba(30,35,34,0.8) 9% 63%, rgba(189,154,105,0.07) 64% 68%, transparent 69%)",
            boxShadow:
              "inset 0 0 48px rgba(189,154,105,0.12), 0 24px 65px rgba(0,0,0,0.22)",
            rotate: `${interpolate(frame, [0, 450], [-10, 46], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.bezier(0.45, 0, 0.55, 1),
            })}deg`,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -7,
              left: "calc(50% - 5px)",
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#e2c590",
              boxShadow: "0 0 24px 9px rgba(226,197,144,0.32)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 174,
              left: 174,
              width: 62,
              height: 12,
              borderRadius: 10,
              background: "#d9b27b",
              boxShadow: "0 0 20px rgba(217,178,123,0.36)",
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: 239,
            left: 513,
            width: 182,
            height: 34,
            border: "1px solid #bdb29d",
            borderLeft: 0,
            borderRadius: "0 12px 12px 0",
            background: "linear-gradient(90deg, #625f56, #313736)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 250,
            left: 516,
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "#efd29a",
            boxShadow: "0 0 26px 12px rgba(239,210,154,0.3)",
            opacity: interpolate(frame, [28, 58, 126, 156, 260, 290], [0.35, 1, 0.35, 1, 0.35, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: 1375,
          left: 105,
          right: 105,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 18,
          color: "#d9b27b",
          fontSize: 16,
          fontWeight: 700,
          letterSpacing: 2,
          opacity: interpolate(frame, [100, 130], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        <span>CILINDRO</span>
        <span style={{ color: "#887f6d" }}>→</span>
        <span>ALINEACIÓN</span>
        <span style={{ color: "#887f6d" }}>→</span>
        <span>CAÑÓN</span>
      </div>
      <p
        style={{
          position: "absolute",
          top: 1440,
          left: 130,
          right: 130,
          margin: 0,
          color: "#a89d88",
          textAlign: "center",
          fontSize: 16,
          lineHeight: 1.45,
        }}
      >
        Esquema conceptual, no está a escala.
      </p>
    </SceneFrame>
  );
};
