import { MouseEventHandler } from "react";
import { addScore } from "../../redux/reducers/score.reducer";
import { shuffle, targetHit } from "../../redux/reducers/targets.reducer";
import { useAppDispatch, useAppSelector } from "../../redux/store";

export const useTarget = () => {
  const dispatch = useAppDispatch();
  const { combo, multiplier } = useAppSelector((store) => store.targets);

  const registerTargetHit = (index: number): MouseEventHandler<HTMLDivElement> => (e) => {
    e.stopPropagation();
    dispatch(targetHit());
    dispatch(shuffle(index));
    dispatch(addScore(combo * multiplier));
  };

  return {
    registerTargetHit,
  };
};