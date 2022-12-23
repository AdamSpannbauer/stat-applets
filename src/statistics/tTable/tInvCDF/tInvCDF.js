import tCDF from '../tCDF/tCDF';
import tPDF from '../tPDF';

const tInvCDF = (p, df) => {
  const EPS = 1e-12;
  const MAX_ITERATIONS = 1000;

  let t;
  let tNew;
  let cdf;
  let err;

  // Initialize t using bisection
  let tLow = -100;
  let tHigh = 100;
  while (tHigh - tLow > EPS) {
    t = (tLow + tHigh) / 2;
    cdf = tCDF(t, df);
    if (cdf > p) {
      tHigh = t;
    } else {
      tLow = t;
    }
  }

  // Refine t using Newton-Raphson iterations
  for (let i = 0; i < MAX_ITERATIONS; i += 1) {
    tNew = t - (cdf - p) / tPDF(t, df);
    err = Math.abs(tNew - t);
    t = tNew;
    cdf = tCDF(t, df);
    if (err < EPS) {
      break;
    }
  }

  return t;
};

export default tInvCDF;
