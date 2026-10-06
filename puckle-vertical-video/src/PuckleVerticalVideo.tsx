import { Audio } from "@remotion/media";
import { Series, staticFile, useVideoConfig } from "remotion";
import { PuckleClosingScene } from "./scenes/PuckleClosingScene";
import { PuckleContextScene } from "./scenes/PuckleContextScene";
import { PuckleConceptScene } from "./scenes/PuckleConceptScene";
import { PuckleIntroScene } from "./scenes/PuckleIntroScene";
import { PucklePatentScene } from "./scenes/PucklePatentScene";

export const PuckleVerticalVideo = () => {
  const { fps } = useVideoConfig();

  return (
    <>
      <Audio
        src={staticFile("Audio.aac")}
        durationInFrames={1762}
        premountFor={fps}
        name="Narración en español"
      />
      <Series>
        <Series.Sequence name="La pregunta" durationInFrames={184} premountFor={fps}>
          <PuckleIntroScene />
        </Series.Sequence>
        <Series.Sequence name="La patente de 1718" durationInFrames={394} premountFor={fps}>
          <PucklePatentScene />
        </Series.Sequence>
        <Series.Sequence name="El cilindro giratorio" durationInFrames={473} premountFor={fps}>
          <PuckleConceptScene />
        </Series.Sequence>
        <Series.Sequence name="Patente y contexto" durationInFrames={474} premountFor={fps}>
          <PuckleContextScene />
        </Series.Sequence>
        <Series.Sequence name="Legado" durationInFrames={237} premountFor={fps}>
          <PuckleClosingScene />
        </Series.Sequence>
      </Series>
    </>
  );
};
