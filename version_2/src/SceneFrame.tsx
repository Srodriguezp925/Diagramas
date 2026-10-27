import type { PropsWithChildren } from "react";
import { AbsoluteFill, Easing, interpolate, useCurrentFrame } from "remotion";

type SceneFrameProps = PropsWithChildren<{
  readonly number: string;
  readonly section: string;
  readonly durationInFrames: number;
}>;

export const SceneFrame = ({
  children,
  number,
  section,
  durationInFrames,
}: SceneFrameProps) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#171c1b",
        backgroundImage:
          "radial-gradient(ellipse at 78% 24%, rgba(189,154,105,0.13), transparent 43%), radial-gradient(ellipse at 12% 84%, rgba(189,154,105,0.06), transparent 38%)",
        color: "#f5eddf",
        fontFamily: "Arial, Helvetica, sans-serif",
        opacity: interpolate(
          frame,
          [0, 18, durationInFrames - 18, durationInFrames - 1],
          [0, 1, 1, 0],
          {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.bezier(0.16, 1, 0.3, 1),
          },
        ),
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 70,
          left: 76,
          right: 76,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "#d7c8ad",
          fontSize: 18,
          fontWeight: 700,
          letterSpacing: 2.2,
        }}
      >
        <span>HISTORIA · TECNOLOGÍA</span>
        <span style={{ color: "#b9915e" }}>J. PUCKLE&nbsp; / &nbsp;1718</span>
      </div>
      <div
        style={{
          position: "absolute",
          top: 132,
          left: 76,
          right: 76,
          height: 1,
          background: "rgba(226, 211, 188, 0.24)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 160,
          left: 78,
          right: 78,
          display: "flex",
          justifyContent: "space-between",
          color: "#bd9a69",
          fontSize: 15,
          fontWeight: 700,
          letterSpacing: 2.4,
        }}
      >
        <span>{section}</span>
        <span>{number} / 05</span>
      </div>
      {children}
      <div
        style={{
          position: "absolute",
          left: 78,
          right: 78,
          bottom: 88,
          height: 1,
          background: "rgba(226, 211, 188, 0.24)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 78,
          right: 78,
          bottom: 49,
          display: "flex",
          justifyContent: "space-between",
          color: "#9a927f",
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: 1.5,
        }}
      >
        <span>ESQUEMA CONCEPTUAL</span>
        <span>NO ES UN PLANO DE FABRICACIÓN</span>
      </div>
    </AbsoluteFill>
  );
};
