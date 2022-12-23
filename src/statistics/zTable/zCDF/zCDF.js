import { MAX_Z } from '../constants';

const zCDF = (z) => {
  if (z < -MAX_Z) {
    return 0.0;
  }
  if (z > MAX_Z) {
    return 1.0;
  }

  let flag;
  if (z < 0.0) {
    flag = true;
  } else {
    flag = false;
  }

  // eslint-disable-next-line no-param-reassign
  let b = 0.0;
  let s = Math.sqrt(2) / 3;
  s *= Math.abs(z);

  let HH = 0.5;

  for (let i = 0; i < 12; i += 1) {
    const a = Math.exp(-(HH * HH) / 9) * (Math.sin(HH * s) / HH);
    b += a;
    HH += 1.0;
  }

  let p = 0.5 - b / Math.PI;
  if (!flag) {
    p = 1.0 - p;
  }
  return p;
};

export default zCDF;
