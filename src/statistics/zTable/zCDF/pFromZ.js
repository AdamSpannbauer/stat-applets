import zCDF from './zCDF';

export const pFromAreaBelow = (z) => {
  const p = zCDF(z);
  return p;
};

export const pFromAreaAbove = (z) => {
  const p = 1 - zCDF(z);
  return p;
};

export const pFromAreaBetween = (z1, z2) => {
  // eslint-disable-next-line no-param-reassign
  if (z2 < z1) [z1, z2] = [z2, z1];

  const p1 = pFromAreaBelow(z1);
  const p2 = pFromAreaBelow(z2);
  const p = p2 - p1;

  return p;
};

export const pFromAreaOutside = (z1, z2) => {
  // eslint-disable-next-line no-param-reassign
  if (z2 < z1) [z1, z2] = [z2, z1];

  const p1 = pFromAreaBelow(z1);
  const p2 = pFromAreaAbove(z2);
  const p = p2 + p1;

  return p;
};
