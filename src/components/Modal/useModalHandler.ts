import { useAppSelector } from "../../redux/store";

export const useModalHandler = () => {
  const modal = useAppSelector((store) => store.modals);
  
  return {
    modal,
  };
};