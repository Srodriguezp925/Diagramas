import { Composition } from "remotion";
import { PuckleVerticalVideo } from "./PuckleVerticalVideo";

export const PuckleComposition = () => (
  <Composition
    id="PuckleVertical"
    component={PuckleVerticalVideo}
    durationInFrames={1762}
    fps={30}
    width={1080}
    height={1920}
  />
);
