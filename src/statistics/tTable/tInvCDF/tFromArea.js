import { MAX_T, MIN_T } from '../constants';
import tInvCDF from './tInvCDF';

export const tFromAreaBelow = (area, df) => {
  if (area >= 1) return MAX_T;

  const z = tInvCDF(area, df);
  return z;
};

export const tFromAreaAbove = (area, df) => {
  if (area >= 1) return -MAX_T;

  const z = tInvCDF(1 - area, df);
  return z;
};

export const tFromAreaBetween = (area, df) => {
  if (area >= 1) return [-MAX_T, MAX_T];

  const halfA = (1 - area) / 2;
  const z = tFromAreaBelow(halfA, df);
  return Math.abs(z);
};

export const tFromAreaOutside = (area, df) => {
  if (area >= 1) return [MIN_T, -MIN_T];

  const halfA = area / 2;
  const z = tFromAreaBelow(halfA, df);
  return Math.abs(z);
};
