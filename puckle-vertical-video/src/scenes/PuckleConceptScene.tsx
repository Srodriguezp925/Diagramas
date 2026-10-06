import { interpolate, useCurrentFrame } from "remotion";
import { SceneFrame } from "../SceneFrame";

export const PuckleConceptScene = () => {
  const frame = useCurrentFrame();

  return (
    <SceneFrame number="03" section="EL CILINDRO">
      <div style={{ position: "absolute", top: 240, left: 82, right: 82, textAlign: "center" }}>
        <div style={{ color: "#d2a66b", fontFamily: "Arial, sans-serif", fontSize: 15, fontWeight: 700, letterSpacing: 2.3 }}>
          UNA PROPUESTA POCO COMÚN
        </div>
        <h1 style={{ margin: "23px 0 16px", fontSize: 60, lineHeight: 1.1 }}>
          Varias cámaras.
          <br />
          <span style={{ color: "#ddb477" }}>Un mismo cañón.</span>
        </h1>
        <p style={{ margin: "0 auto", maxWidth: 800, color: "#c8beaa", fontFamily: "Arial, sans-serif", fontSize: 24, lineHeight: 1.45 }}>
          Un cilindro giratorio reunía varias cámaras en un conjunto montado.
        </p>
      </div>
      <div
        style={{
          position: "absolute",
          left: 190,
          top: 760,
          width: 700,
          height: 520,
          borderRadius: 30,
          border: "1px solid rgba(210,166,107,0.34)",
          background: "rgba(245,232,208,0.035)",
          display: "grid",
          placeItems: "center",
          opacity: interpolate(frame, [24, 54], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        <div
          style={{
            position: "relative",
            width: 410,
            height: 410,
            borderRadius: "50%",
            border: "3px solid #a47d4e",
            background: "radial-gradient(circle, #403326 0 19%, #262522 20% 100%)",
            boxShadow: "inset 0 0 0 18px rgba(210,166,107,0.1), 0 25px 65px rgba(0,0,0,0.3)",
            rotate: `${interpolate(frame, [30, 450], [0, 150], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            })}deg`,
          }}
        >
          <span style={{ position: "absolute", left: 173, top: 20, width: 64, height: 33, borderRadius: 20, border: "2px solid #4f422f", background: "#d2ad76" }} />
          <span style={{ position: "absolute", right: 25, top: 187, width: 64, height: 33, borderRadius: 20, border: "2px solid #4f422f", background: "#d2ad76", rotate: "90deg" }} />
          <span style={{ position: "absolute", left: 173, bottom: 20, width: 64, height: 33, borderRadius: 20, border: "2px solid #4f422f", background: "#d2ad76" }} />
          <span style={{ position: "absolute", left: 25, top: 187, width: 64, height: 33, borderRadius: 20, border: "2px solid #4f422f", background: "#d2ad76", rotate: "90deg" }} />
        </div>
        <div style={{ position: "absolute", left: 514, top: 242, width: 200, height: 62, borderRadius: "0 15px 15px 0", border: "2px solid #aaa18d", background: "linear-gradient(90deg,#77796f,#424944)" }} />
        <div
          style={{
            position: "absolute",
            left: 506,
            top: 261,
            width: 20,
            height: 20,
            borderRadius: "50%",
            background: "#f0c777",
            boxShadow: "0 0 0 12px rgba(240,199,119,0.13), 0 0 35px #e9ba63",
            opacity: interpolate(frame, [55, 75, 125, 145, 205], [0.35, 1, 0.35, 1, 0.45], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        />
      </div>
      <div style={{ position: "absolute", top: 1355, left: 90, right: 90, display: "flex", alignItems: "center", justifyContent: "center", gap: 20, fontFamily: "Arial, sans-serif", fontSize: 16, letterSpacing: 1.5 }}>
        <span style={{ color: "#d9bc8c" }}>TAMBOR GIRATORIO</span>
        <span style={{ color: "#736953" }}>—</span>
        <span style={{ color: "#b2b1a3" }}>CAÑÓN FIJO</span>
      </div>
      <p style={{ position: "absolute", top: 1435, left: 115, right: 115, margin: 0, color: "#a99f8b", textAlign: "center", fontFamily: "Arial, sans-serif", fontSize: 17, lineHeight: 1.45 }}>
        Animación conceptual para explicar la patente; no muestra un procedimiento de uso.
      </p>
    </SceneFrame>
  );
};
