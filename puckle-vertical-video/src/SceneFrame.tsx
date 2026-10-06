import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";
import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  readonly number: string;
  readonly section: string;
}>;

export const SceneFrame = ({ children, number, section }: Props) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        overflow: "hidden",
        backgroundColor: "#171c1b",
        backgroundImage:
          "radial-gradient(ellipse at 82% 22%, rgba(163, 111, 59, 0.19), transparent 40%), linear-gradient(rgba(241, 229, 204, 0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(241, 229, 204, 0.025) 1px, transparent 1px)",
        backgroundSize: "auto, 48px 48px, 48px 48px",
        color: "#f5efe1",
        fontFamily: "Georgia, 'Times New Roman', serif",
        opacity: interpolate(frame, [0, 10], [0, 1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        }),
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 70,
          left: 68,
          right: 68,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 13, color: "#e9ddc3", fontSize: 17, fontWeight: 700, letterSpacing: 2 }}>
          <span style={{ color: "#d2a66b", fontSize: 26 }}>✳</span>
          HISTORIA DE LA TECNOLOGÍA
        </div>
        <div style={{ color: "#c5b89f", fontSize: 13, letterSpacing: 1 }}>
          JAMES PUCKLE · 1718
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 128,
          left: 68,
          right: 68,
          height: 1,
          background: "rgba(236, 224, 202, 0.19)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 157,
          left: 68,
          right: 68,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#d2a66b",
          fontFamily: "Arial, sans-serif",
          fontSize: 14,
          letterSpacing: 2,
        }}
      >
        <span>{section}</span>
        <span>{number} / 05</span>
      </div>
      {children}
      <div
        style={{
          position: "absolute",
          bottom: 54,
          left: 68,
          right: 68,
          height: 1,
          background: "rgba(236, 224, 202, 0.19)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 27,
          left: 68,
          right: 68,
          display: "flex",
          justifyContent: "space-between",
          color: "#958d7d",
          fontFamily: "Arial, sans-serif",
          fontSize: 12,
          letterSpacing: 0.7,
        }}
      >
        <span>ESQUEMA HISTÓRICO EDUCATIVO</span>
        <span>NO ES UN PLANO DE FABRICACIÓN</span>
      </div>
    </AbsoluteFill>
  );
};
