import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";


declare global {
  namespace JSX {
    interface IntrinsicElements {
      unrealBloomPass: any;
    }
  }

  declare module '*.mp4' {
    const src: string;
    export default src;
  }

  declare module '*.mp3' {
    const src: string;
    export default src;
  }

  declare module '*.svg' {
    const content: string;
    export default content;
  }

  declare module '*.png' {
    const src: string;
    export default src;
  }

  declare module '*.jpg' {
    const src: string;
    export default src;
  }
}


