import { Composition, Folder } from "remotion";
import { ClosingScene } from "./scenes/ClosingScene";
import { ContextScene } from "./scenes/ContextScene";
import { MechanismScene } from "./scenes/MechanismScene";
import { OpeningScene } from "./scenes/OpeningScene";
import { PatentScene } from "./scenes/PatentScene";
import { SecondVersionVideo } from "./Timeline";

export const RemotionRoot: React.FC = () => (
  <>
    <Folder name="Video">
      <Composition
        id="PuckleVerticalV2"
        component={SecondVersionVideo}
        durationInFrames={1762}
        fps={30}
        width={1080}
        height={1920}
      />
    </Folder>
    <Folder name="Escenas">
      <Composition
        id="AperturaV2"
        component={OpeningScene}
        durationInFrames={184}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="PatenteV2"
        component={PatentScene}
        durationInFrames={394}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="MecanismoV2"
        component={MechanismScene}
        durationInFrames={473}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="ContextoV2"
        component={ContextScene}
        durationInFrames={474}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="CierreV2"
        component={ClosingScene}
        durationInFrames={237}
        fps={30}
        width={1080}
        height={1920}
      />
    </Folder>
  </>
);
