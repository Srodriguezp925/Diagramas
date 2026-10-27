import { SceneFrame } from "../SceneFrame";
import { Easing, interpolate, useCurrentFrame } from "remotion";

const contextNotes = [
  {
    number: "01",
    title: "Una patente",
    text: "No significa que se produjera en masa.",
  },
  {
    number: "02",
    title: "Un diseño complejo",
    text: "Su uso fue limitado.",
  },
  {
    number: "03",
    title: "Un concepto temprano",
    text: "No era una ametralladora moderna.",
  },
];

export const ContextScene = () => {
  const frame = useCurrentFrame();

  return (
    <SceneFrame
      number="04"
      section="PATENTE Y CONTEXTO"
      durationInFrames={474}
    >
      <div
        style={{
          position: "absolute",
          top: 290,
          left: 86,
          right: 86,
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
          LEER LA HISTORIA CON PERSPECTIVA
        </div>
        <h1
          style={{
            margin: "23px 0 16px",
            fontFamily: "Georgia, 'Times New Roman', serif",
            fontSize: 62,
            fontWeight: 400,
            lineHeight: 1.14,
          }}
        >
          Una patente no cuenta
          <br />
          <span style={{ color: "#d9b27b" }}>toda la historia.</span>
        </h1>
      </div>
      <div
        style={{
          position: "absolute",
          top: 720,
          left: 94,
          right: 94,
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}
      >
        {contextNotes.map((note, index) => (
          <div
            key={note.number}
            style={{
              minHeight: 156,
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              gap: 26,
              padding: "24px 28px",
              borderLeft: "3px solid #bd9a69",
              background:
                "linear-gradient(100deg, rgba(217,178,123,0.11), rgba(217,178,123,0.025))",
              opacity: interpolate(
                frame,
                [16 + index * 20, 42 + index * 20],
                [0, 1],
                {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                  easing: Easing.bezier(0.16, 1, 0.3, 1),
                },
              ),
              translate: `0px ${interpolate(
                frame,
                [16 + index * 20, 42 + index * 20],
                [18, 0],
                {
                  extrapolateLeft: "clamp",
                  extrapolateRight: "clamp",
                },
              )}px`,
            }}
          >
            <div
              style={{
                minWidth: 70,
                color: "#bd9a69",
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: 34,
              }}
            >
              {note.number}
            </div>
            <div>
              <div
                style={{
                  marginBottom: 8,
                  color: "#d9b27b",
                  fontSize: 16,
                  fontWeight: 700,
                  letterSpacing: 2,
                }}
              >
                {note.title.toUpperCase()}
              </div>
              <div style={{ color: "#eee4d3", fontSize: 26, lineHeight: 1.35 }}>
                {note.text}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          top: 1325,
          left: 112,
          right: 112,
          color: "#a89d88",
          textAlign: "center",
          fontSize: 19,
          lineHeight: 1.5,
          opacity: interpolate(frame, [105, 135], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
        }}
      >
        Una propuesta de repetición de otra época.
      </div>
    </SceneFrame>
  );
};
