import './target.scss';
import { ITargetProps } from './TargetTypes';
import { useTarget } from './useTarget';

export default function Target(props: ITargetProps) {
  const { registerTargetHit } = useTarget();
  return (
    <div className='target' onClick={registerTargetHit(props.index)}></div>
  )
}