import { logGamma, incompleteBeta } from '../../mathUtils';

function tCDF(t, df) {
  // Compute the CDF of the Student's t distribution with `df` degrees of freedom
  // at value `t`.

  // Special case: df = 1 is the Cauchy distribution
  if (df === 1) {
    return 1 / 2 + Math.atan(t) / Math.PI;
  }

  // General case
  if (df <= 0) {
    return NaN;
  }

  const A = df / 2;
  const S = A + 0.5;
  const Z = df / (df + t * t);

  let betacdf;
  let tcdf;

  // eslint-disable-next-line max-len
  const BT = Math.exp(logGamma(S) - logGamma(0.5) - logGamma(A) + A * Math.log(Z) + 0.5 * Math.log(1 - Z));
  if (Z < (A + 1) / (S + 2)) {
    betacdf = BT * incompleteBeta(Z, A, 0.5);
  } else {
    betacdf = 1 - BT * incompleteBeta(1 - Z, 0.5, A);
  }
  if (t < 0) {
    tcdf = betacdf / 2;
  } else {
    tcdf = 1 - betacdf / 2;
  }

  tcdf = Math.round(tcdf * 100000) / 100000;

  return tcdf;
}

export default tCDF;
