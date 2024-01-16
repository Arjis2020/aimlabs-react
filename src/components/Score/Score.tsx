import React from 'react';
import { useAppSelector } from '../../redux/store';
import './score.scss';

type Props = {}

export default function Score({ }: Props) {
  const score = useAppSelector((store) => store.score);
  return (
    <div className='score'>{score.toLocaleString()}</div>
  )
}