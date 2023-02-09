import { FC } from "react";
import { Glitch, EffectComposer, Bloom, ChromaticAberration } from "@react-three/postprocessing";
import { GlitchMode, BlendFunction, KernelSize } from 'postprocessing'
import { Vector2 } from "three";

interface ComponentProps {
  mouse: number[]
  mouseDown: boolean
}
const Effects: FC<ComponentProps> = ({ mouse, mouseDown }) => {

  return (
    <>
      <EffectComposer multisampling={0}>
        <Bloom
          intensity={1.0} // The bloom intensity.
          // blurPass={undefined} // A blur pass.
          // width={Resizer.AUTO_SIZE} // render width
          // height={Resizer.AUTO_SIZE} // render height
          kernelSize={KernelSize.LARGE} // blur kernel size
          luminanceThreshold={0.9} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
        />
        <Glitch
          delay={new Vector2()} // min and max glitch delay
          // duration={new Vector2(0.6, 1.0)} // min and max glitch duration
          strength={new Vector2(1, 1)} // min and max glitch strength
          mode={GlitchMode.SPORADIC} // glitch mode
          active={mouseDown} // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
          ratio={1} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
        />
      </EffectComposer>
    </>
  );
};


export default Effects;
