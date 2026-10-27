import { SceneFrame } from "../SceneFrame";
import { Easing, interpolate, useCurrentFrame } from "remotion";

export const ClosingScene = () => {
  const frame = useCurrentFrame();

  return (
    <SceneFrame>
      <div
        style={{
          position: "absolute",
          top: 430,
          left: 90,
          right: 90,
          textAlign: "center",
          opacity: interpolate(frame, [8, 35], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: `0px ${interpolate(frame, [8, 35], [22, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })}px`,
        }}
      >
        <div
          style={{
            color: "#bd9a69",
            fontSize: 17,
            fontWeight: 700,
            letterSpacing: 3.5,
          }}
        >
          JAMES PUCKLE · 1718
        </div>
        <h1
          style={{
            margin: "34px 0 24px",
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: 71,
            fontWeight: 400,
            lineHeight: 1.2,
          }}
        >
          Una patente.
          <br />
          Una idea.
          <br />
          <span style={{ color: "#d9b27b" }}>Una historia.</span>
        </h1>
        <p
          style={{
            margin: "0 auto",
            maxWidth: 780,
            color: "#d4cbbb",
            fontSize: 25,
            lineHeight: 1.55,
          }}
        >
          Hace siglos ya se exploraban nuevas formas de combinar ingeniería e
          innovación.
        </p>
      </div>
      <div
        style={{
          position: "absolute",
          top: 1210,
          left: 170,
          right: 170,
          height: 1,
          background:
            "linear-gradient(90deg, transparent, rgba(189,154,105,0.75), transparent)",
          opacity: interpolate(frame, [45, 72], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 1260,
          left: 120,
          right: 120,
          color: "#bd9a69",
          textAlign: "center",
          fontSize: 15,
          fontWeight: 700,
          letterSpacing: 2,
          opacity: interpolate(frame, [58, 82], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        CONTEXTO HISTÓRICO · ESQUEMA EDUCATIVO
      </div>
    </SceneFrame>
  );
};
