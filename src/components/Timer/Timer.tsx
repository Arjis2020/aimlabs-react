import React from 'react';
import Countdown, { CountdownRenderProps, zeroPad } from 'react-countdown';
import './timer.scss';

type Props = {}

export default function Timer({ }: Props) {
  const TimerRenderer = (props: CountdownRenderProps) => <div className='timer'>{props.formatted.minutes}:{props.formatted.seconds}:{zeroPad(props.milliseconds, 3)}</div>
  return (
    <Countdown
      date={Date.now() + 20000}
      // autoStart={false}
      intervalDelay={0}
      precision={3}
      renderer={TimerRenderer}
    />
  )
}