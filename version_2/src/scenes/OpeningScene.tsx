import { SceneFrame } from "../SceneFrame";
import { Easing, interpolate, useCurrentFrame } from "remotion";

export const OpeningScene = () => {
  const frame = useCurrentFrame();

  return (
    <SceneFrame
      number="01"
      section="UNA PREGUNTA"
      durationInFrames={184}
    >
      <div
        style={{
          position: "absolute",
          top: 360,
          left: 85,
          right: 85,
          textAlign: "center",
          opacity: interpolate(frame, [8, 34], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          }),
          translate: `0px ${interpolate(frame, [8, 34], [26, 0], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          })}px`,
        }}
      >
        <div
          style={{
            color: "#bd9a69",
            fontSize: 17,
            fontWeight: 700,
            letterSpacing: 4,
          }}
        >
          HACE MÁS DE TRESCIENTOS AÑOS
        </div>
        <h1
          style={{
            margin: "38px 0 26px",
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: 82,
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: -2.5,
          }}
        >
          ¿Acelerar el disparo
          <br />
          <span style={{ color: "#d9b27b" }}>en 1718?</span>
        </h1>
        <p
          style={{
            margin: "0 auto",
            maxWidth: 750,
            color: "#d4cbbb",
            fontSize: 27,
            lineHeight: 1.5,
          }}
        >
          Una idea mecánica de James Puckle.
        </p>
      </div>
      <div
        style={{
          position: "absolute",
          top: 1085,
          left: 385,
          width: 310,
          height: 310,
          border: "1px solid rgba(217, 178, 123, 0.55)",
          borderRadius: "50%",
          display: "grid",
          placeItems: "center",
          opacity: interpolate(frame, [22, 50], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          scale: interpolate(frame, [22, 50], [0.9, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            output: "perceptual-scale",
          }),
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 20,
            border: "1px solid rgba(217, 178, 123, 0.26)",
            borderRadius: "50%",
            rotate: `${interpolate(frame, [0, 184], [-18, 18], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            })}deg`,
          }}
        />
        <div
          style={{
            width: 126,
            height: 126,
            border: "1px solid #bd9a69",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(217,178,123,0.22), rgba(217,178,123,0.02) 68%, transparent 70%)",
            boxShadow: "0 0 80px rgba(189,154,105,0.12)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 2,
            height: 168,
            background:
              "linear-gradient(transparent, #bd9a69 22%, #bd9a69 78%, transparent)",
            rotate: `${interpolate(frame, [0, 184], [0, 110], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            })}deg`,
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: 1480,
          left: 0,
          right: 0,
          color: "#988d79",
          textAlign: "center",
          fontSize: 15,
          fontWeight: 700,
          letterSpacing: 2.5,
          opacity: interpolate(frame, [45, 68], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        UNA PROPUESTA DE OTRA ÉPOCA
      </div>
    </SceneFrame>
  );
};
