import { Audio } from "@remotion/media";
import { fade } from "@remotion/transitions/fade";
import { linearTiming, TransitionSeries } from "@remotion/transitions";
import {
  AbsoluteFill,
  interpolate,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { ClosingScene } from "./scenes/ClosingScene";
import { ContextScene } from "./scenes/ContextScene";
import { MechanismScene } from "./scenes/MechanismScene";
import { OpeningScene } from "./scenes/OpeningScene";
import { PatentScene } from "./scenes/PatentScene";

export const SecondVersionVideo = () => {
  const { fps, width } = useVideoConfig();
  const frame = useCurrentFrame();
  const chapter =
    frame < 184
      ? ["01", "UNA PREGUNTA"]
      : frame < 578
        ? ["02", "LA PATENTE"]
        : frame < 1051
          ? ["03", "EL CILINDRO GIRATORIO"]
          : frame < 1525
            ? ["04", "PATENTE Y CONTEXTO"]
            : ["05", "CIERRE"];

  return (
    <>
      <Audio
        src={staticFile("Audio.aac")}
        durationInFrames={1762}
        premountFor={fps}
        name="Narración original en español"
      />
      <TransitionSeries>
        <TransitionSeries.Sequence
          name="La pregunta"
          durationInFrames={196}
          premountFor={fps}
        >
          <OpeningScene />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 12 })}
        />
        <TransitionSeries.Sequence
          name="La patente de 1718"
          durationInFrames={406}
          premountFor={fps}
        >
          <PatentScene />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 12 })}
        />
        <TransitionSeries.Sequence
          name="El cilindro giratorio"
          durationInFrames={485}
          premountFor={fps}
        >
          <MechanismScene />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 12 })}
        />
        <TransitionSeries.Sequence
          name="Patente y contexto"
          durationInFrames={486}
          premountFor={fps}
        >
          <ContextScene />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: 12 })}
        />
        <TransitionSeries.Sequence
          name="Legado"
          durationInFrames={237}
          premountFor={fps}
        >
          <ClosingScene />
        </TransitionSeries.Sequence>
      </TransitionSeries>
      <AbsoluteFill style={{ pointerEvents: "none" }}>
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
          <span>{chapter[1]}</span>
          <span>{chapter[0]} / 05</span>
        </div>
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
        <div
          style={{
            position: "absolute",
            left: 78,
            bottom: 87,
            width: interpolate(frame, [0, 1761], [0, width - 156], {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            }),
            height: 2,
            background: "#bd9a69",
          }}
        />
      </AbsoluteFill>
    </>
  );
};
