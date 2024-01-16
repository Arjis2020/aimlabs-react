import { useTargetContainer } from './useTargetContainer';
import './targetContainer.scss';
import Target from '../Target/Target';

export default function TargetContainer() {
  const { targets, registerTargetMiss } = useTargetContainer();
  return (
    <div className='target--container' onClick={registerTargetMiss}>
      {targets.map((_, i) => (
        <div key={i} className='target--box' onClick={registerTargetMiss}>
          {targets[i] === 1 && <Target index={i}/>}
        </div>
      ))}
    </div>
  )
}