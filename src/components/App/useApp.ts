import { useEffect } from "react";
import { openModal, toggleModal } from "../../redux/reducers/modal.reducer";
import { useAppDispatch } from "../../redux/store";

export const useApp = () => {
  const dispatch = useAppDispatch();

  function keyDownHandler(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      dispatch(toggleModal('pause'));
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', keyDownHandler);
    return () => window.removeEventListener('keydown', keyDownHandler);
  }, []);
};