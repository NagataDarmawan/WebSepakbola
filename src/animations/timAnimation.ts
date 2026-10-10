import { TargetAndTransition, Transition } from 'framer-motion';

export const cardTransition: Transition = {
  type: 'spring',
  stiffness: 240,
  damping: 25,
};

export const getCardAnimation = (offset: number, isCenter: boolean): TargetAndTransition => ({
  x: offset * 220,
  scale: isCenter ? 1 : 0.85 - Math.abs(offset) * 0.05,
  zIndex: 50 - Math.abs(offset) * 10,
  filter: isCenter ? 'grayscale(0%) brightness(100%)' : 'grayscale(100%) brightness(40%)',
});