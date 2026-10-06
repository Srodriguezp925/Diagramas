import { interpolate, useCurrentFrame } from "remotion";
import { SceneFrame } from "../SceneFrame";

export const PuckleIntroScene = () => {
  const frame = useCurrentFrame();

  return (
    <SceneFrame number="01" section="UNA IDEA DE 1718">
      <div style={{ position: "absolute", top: 300, left: 86, right: 86, textAlign: "center" }}>
        <div
          style={{
            display: "inline-flex",
            padding: "12px 18px",
            border: "1px solid rgba(210, 166, 107, 0.52)",
            borderRadius: 999,
            color: "#dbb982",
            fontFamily: "Arial, sans-serif",
            fontSize: 15,
            letterSpacing: 2,
            opacity: interpolate(frame, [4, 20], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          PATENTE BRITÁNICA · SIGLO XVIII
        </div>
        <h1
          style={{
            margin: "44px 0 26px",
            fontSize: 94,
            lineHeight: 0.98,
            letterSpacing: -3,
            opacity: interpolate(frame, [8, 29], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            translate: `0px ${interpolate(frame, [8, 29], [28, 0], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            })}px`,
          }}
        >
          ¿Repetir
          <br />
          disparos en
          <br />
          <span style={{ color: "#ddb477" }}>1718?</span>
        </h1>
        <p
          style={{
            maxWidth: 750,
            margin: "0 auto",
            color: "#c8beaa",
            fontFamily: "Arial, sans-serif",
            fontSize: 28,
            lineHeight: 1.4,
            opacity: interpolate(frame, [20, 40], [0, 1], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
          }}
        >
          Una propuesta mecánica de James Puckle.
        </p>
      </div>
      <div
        style={{
          position: "absolute",
          left: 330,
          top: 1035,
          width: 420,
          height: 420,
          borderRadius: "50%",
          border: "1px solid rgba(210, 166, 107, 0.48)",
          background: "radial-gradient(circle, rgba(210,166,107,0.13), transparent 69%)",
          display: "grid",
          placeItems: "center",
          opacity: interpolate(frame, [10, 31], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          rotate: `${interpolate(frame, [0, 184], [-8, 22], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })}deg`,
        }}
      >
        <div
          style={{
            width: 310,
            height: 310,
            border: "2px solid #a47d4e",
            borderRadius: "50%",
            background: "radial-gradient(circle, #d4b17b 0 5%, #443626 6% 100%)",
            boxShadow: "inset 0 0 0 14px rgba(210,166,107,0.1)",
          }}
        />
        <div style={{ position: "absolute", left: 269, top: 200, width: 210, height: 56, border: "2px solid #aaa18d", borderRadius: "0 14px 14px 0", background: "linear-gradient(90deg,#77796f,#424944)" }} />
        <div style={{ position: "absolute", left: 105, bottom: 20, color: "#d0b486", fontFamily: "Arial, sans-serif", fontSize: 14, letterSpacing: 2, rotate: "-22deg" }}>
          TAMBOR GIRATORIO
        </div>
      </div>
    </SceneFrame>
  );
};
