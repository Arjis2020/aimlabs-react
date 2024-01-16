import { MouseEventHandler } from "react";
import { targetMiss } from "../../redux/reducers/targets.reducer";
import { useAppDispatch, useAppSelector } from "../../redux/store";

export const useTargetContainer = () => {
  const { targets } = useAppSelector((state) => state.targets)

  const dispatch = useAppDispatch();

  const registerTargetMiss: MouseEventHandler<HTMLDivElement> = (e) => {
    dispatch(targetMiss());
  };

  return {
    targets,
    registerTargetMiss,
  };
};