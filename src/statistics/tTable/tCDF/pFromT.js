import tCDF from './tCDF';

export const pFromAreaBelow = (t) => {
  const p = tCDF(t);
  return p;
};

export const pFromAreaAbove = (t) => {
  const p = 1 - tCDF(t);
  return p;
};

export const pFromAreaBetween = (t1, t2) => {
  // eslint-disable-next-line no-param-reassign
  if (t2 < t1) [t1, t2] = [t2, t1];

  const p1 = pFromAreaBelow(t1);
  const p2 = pFromAreaBelow(t2);
  const p = p2 - p1;

  return p;
};

export const pFromAreaOutside = (t1, t2) => {
  // eslint-disable-next-line no-param-reassign
  if (t2 < t1) [t1, t2] = [t2, t1];

  const p1 = pFromAreaBelow(t1);
  const p2 = pFromAreaAbove(t2);
  const p = p2 + p1;

  return p;
};
