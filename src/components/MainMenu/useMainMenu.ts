import { useEffect } from "react";
import useSound from "use-sound"
import mainMenuMusic from '../../assets/sounds/menu/main-menu-music.mp3';

export const useMainMenu = () => {
  const [play, { stop }] = useSound(mainMenuMusic, { volume: 1 });

  useEffect(() => {
    play();
    return () => stop();
  }, []);
}