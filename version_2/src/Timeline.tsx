import { Audio } from "@remotion/media";
import { Series, staticFile, useVideoConfig } from "remotion";
import { ClosingScene } from "./scenes/ClosingScene";
import { ContextScene } from "./scenes/ContextScene";
import { MechanismScene } from "./scenes/MechanismScene";
import { OpeningScene } from "./scenes/OpeningScene";
import { PatentScene } from "./scenes/PatentScene";

export const SecondVersionVideo = () => {
  const { fps } = useVideoConfig();

  return (
    <>
      <Audio
        src={staticFile("Audio.aac")}
        durationInFrames={1762}
        premountFor={fps}
        name="Narración original en español"
      />
      <Series>
        <Series.Sequence
          name="La pregunta"
          durationInFrames={184}
          premountFor={fps}
        >
          <OpeningScene />
        </Series.Sequence>
        <Series.Sequence
          name="La patente de 1718"
          durationInFrames={394}
          premountFor={fps}
        >
          <PatentScene />
        </Series.Sequence>
        <Series.Sequence
          name="El cilindro giratorio"
          durationInFrames={473}
          premountFor={fps}
        >
          <MechanismScene />
        </Series.Sequence>
        <Series.Sequence
          name="Patente y contexto"
          durationInFrames={474}
          premountFor={fps}
        >
          <ContextScene />
        </Series.Sequence>
        <Series.Sequence
          name="Legado"
          durationInFrames={237}
          premountFor={fps}
        >
          <ClosingScene />
        </Series.Sequence>
      </Series>
    </>
  );
};
