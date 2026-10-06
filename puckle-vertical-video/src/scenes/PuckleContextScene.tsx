import { interpolate, useCurrentFrame } from "remotion";
import { SceneFrame } from "../SceneFrame";

export const PuckleContextScene = () => {
  const frame = useCurrentFrame();
  const notes = [
    { number: "01", title: "Una patente", text: "No significa producción en masa.", color: "#ddb477" },
    { number: "02", title: "Un diseño complejo", text: "Su uso fue limitado.", color: "#c6b58f" },
    { number: "03", title: "Otra época", text: "No era una ametralladora moderna.", color: "#d29a73" },
  ];

  return (
    <SceneFrame number="04" section="PATENTE Y CONTEXTO">
      <div style={{ position: "absolute", top: 252, left: 82, right: 82, textAlign: "center" }}>
        <div style={{ color: "#d2a66b", fontFamily: "Arial, sans-serif", fontSize: 15, fontWeight: 700, letterSpacing: 2.2 }}>
          INNOVACIÓN EN SU CONTEXTO
        </div>
        <h1 style={{ margin: "22px 0 14px", fontSize: 60, lineHeight: 1.1 }}>
          La patente no cuenta
          <br />
          <span style={{ color: "#ddb477" }}>toda la historia.</span>
        </h1>
        <p style={{ margin: "0 auto", maxWidth: 800, color: "#c8beaa", fontFamily: "Arial, sans-serif", fontSize: 24, lineHeight: 1.4 }}>
          Una idea técnica también habla de la época en que fue imaginada.
        </p>
      </div>
      <div style={{ position: "absolute", top: 800, left: 100, right: 100, display: "flex", flexDirection: "column", gap: 22 }}>
        {notes.map((note, index) => (
          <div
            key={note.number}
            style={{
              minHeight: 142,
              padding: "22px 27px",
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              gap: 24,
              borderRadius: 20,
              border: `1px solid ${note.color}55`,
              background: "rgba(245,232,208,0.045)",
              opacity: interpolate(frame, [18 + index * 18, 44 + index * 18], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
              translate: `0px ${interpolate(frame, [18 + index * 18, 44 + index * 18], [20, 0], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              })}px`,
            }}
          >
            <div style={{ minWidth: 76, height: 76, display: "grid", placeItems: "center", borderRadius: "50%", border: `1px solid ${note.color}88`, color: note.color, fontFamily: "Arial, sans-serif", fontSize: 20 }}>
              {note.number}
            </div>
            <div>
              <div style={{ color: note.color, fontFamily: "Arial, sans-serif", fontSize: 15, letterSpacing: 1.5 }}>{note.title.toUpperCase()}</div>
              <div style={{ marginTop: 8, fontSize: 27, lineHeight: 1.25 }}>{note.text}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ position: "absolute", top: 1385, left: 112, right: 112, padding: "19px 22px", borderLeft: "3px solid #d2a66b", background: "rgba(245,232,208,0.045)", color: "#c8beaa", textAlign: "center", fontFamily: "Arial, sans-serif", fontSize: 18, lineHeight: 1.4 }}>
        La patente también refleja los prejuicios de comienzos del siglo XVIII.
      </div>
    </SceneFrame>
  );
};
