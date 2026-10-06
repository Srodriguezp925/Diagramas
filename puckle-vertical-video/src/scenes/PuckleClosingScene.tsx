import { interpolate, useCurrentFrame } from "remotion";
import { SceneFrame } from "../SceneFrame";

export const PuckleClosingScene = () => {
  const frame = useCurrentFrame();

  return (
    <SceneFrame number="05" section="CIERRE">
      <div
        style={{
          position: "absolute",
          top: 465,
          left: 82,
          right: 82,
          textAlign: "center",
          opacity: interpolate(frame, [4, 27], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          translate: `0px ${interpolate(frame, [4, 27], [23, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })}px`,
        }}
      >
        <div style={{ color: "#d2a66b", fontFamily: "Arial, sans-serif", fontSize: 15, fontWeight: 700, letterSpacing: 2.5 }}>
          JAMES PUCKLE · 1718
        </div>
        <h1 style={{ margin: "30px 0 22px", fontSize: 67, lineHeight: 1.1 }}>
          Una patente.
          <br />
          Una idea.
          <br />
          <span style={{ color: "#ddb477" }}>Una historia compleja.</span>
        </h1>
        <p style={{ margin: "0 auto", maxWidth: 790, color: "#c8beaa", fontFamily: "Arial, sans-serif", fontSize: 24, lineHeight: 1.45 }}>
          Hace más de tres siglos ya se exploraban nuevas formas de combinar ingeniería e innovación.
        </p>
      </div>
      <div
        style={{
          position: "absolute",
          left: 115,
          right: 115,
          bottom: 280,
          padding: "18px 20px",
          borderRadius: 15,
          border: "1px solid rgba(210,166,107,0.45)",
          color: "#dbb982",
          textAlign: "center",
          fontFamily: "Arial, sans-serif",
          fontSize: 14,
          letterSpacing: 1.5,
          opacity: interpolate(frame, [45, 67], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        ESQUEMA EDUCATIVO · NO ES UN PLANO DE FABRICACIÓN
      </div>
    </SceneFrame>
  );
};
