import { useAppSelector } from '../../redux/store';
import CountUp from 'react-countup';
import './score.scss';

export default function Score() {
  const score = useAppSelector((store) => store.score);
  const { combo, multiplier } = useAppSelector((store) => store.targets);
  return (
    <div className='score'>
      <div className='score--with-multiplier'>
        <CountUp
          className='score__value'
          end={score}
          useIndianSeparators
          preserveValue />
        {multiplier > 1 && <span className='score__multiplier'>x{multiplier}</span>}
      </div>
      {combo > 1 && <div className='score__streak-container'>
        <span className='score__streak-container__streak'>{combo}x </span>
        <span className='score__streak-container__streak--uppercase'>STREAK</span>
      </div>}
    </div>
  );
}