import { MAX_Z, MIN_Z } from '../constants';
import zInvCDF from './zInvCDF';

export const zFromAreaBelow = (area) => {
  if (area >= 1) return MAX_Z;

  const z = zInvCDF(area);
  return z;
};

export const zFromAreaAbove = (area) => {
  if (area >= 1) return -MAX_Z;

  const z = zInvCDF(1 - area);
  return z;
};

export const zFromAreaBetween = (area) => {
  if (area >= 1) return [-MAX_Z, MAX_Z];

  const halfA = (1 - area) / 2;
  const z = zFromAreaBelow(halfA);
  return Math.abs(z);
};

export const zFromAreaOutside = (area) => {
  if (area >= 1) return [MIN_Z, -MIN_Z];

  const halfA = area / 2;
  const z = zFromAreaBelow(halfA);
  return Math.abs(z);
};
