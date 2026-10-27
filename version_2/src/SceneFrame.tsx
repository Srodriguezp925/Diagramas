import type { PropsWithChildren } from "react";
import { AbsoluteFill } from "remotion";

export const SceneFrame = ({ children }: PropsWithChildren) => (
  <AbsoluteFill
    style={{
      backgroundColor: "#171c1b",
      backgroundImage:
        "radial-gradient(ellipse at 78% 24%, rgba(189,154,105,0.13), transparent 43%), radial-gradient(ellipse at 12% 84%, rgba(189,154,105,0.06), transparent 38%)",
      color: "#f5eddf",
      fontFamily: "Arial, Helvetica, sans-serif",
    }}
  >
    {children}
  </AbsoluteFill>
);
