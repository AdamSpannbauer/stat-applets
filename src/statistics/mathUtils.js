export const mapRange = (x, inMin, inMax, outMin, outMax) => {
  let newX = x;

  newX -= inMin;

  newX *= (outMax - outMin);
  newX /= (inMax - inMin);
  newX += outMin;

  return newX;
};

export const gamma = (x) => {
  // Gamma function implemented using the Lanczos approximation.
  // This is a good general-purpose approximation with a few extra decimal places of precision.

  const p = [
    0.99999999999980993, 676.5203681218851, -1259.1392167224028,
    771.32342877765313, -176.61502916214059, 12.507343278686905,
    -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7,
  ];

  if (x < 0.5) {
    return Math.PI / (Math.sin(Math.PI * x) * gamma(1 - x));
  }

  // eslint-disable-next-line no-param-reassign
  x -= 1;
  let a = p[0];
  const t = x + 7.5;
  for (let i = 1; i < p.length; i += 1) {
    a += p[i] / (x + i);
  }
  // eslint-disable-next-line no-bitwise
  return Math.sqrt(2 * Math.PI) * t ** (x + 0.5) * Math.exp(-t) * a;
};

export const logGamma = (Z) => {
  // eslint-disable-next-line max-len
  const S = 1 + 76.18009173 / Z - 86.50532033 / (Z + 1) + 24.01409822 / (Z + 2) - 1.231739516 / (Z + 3) + 0.00120858003 / (Z + 4) - 0.00000536382 / (Z + 5);
  const LG = (Z - 0.5) * Math.log(Z + 4.5) - (Z + 4.5) + Math.log(S * 2.50662827465);

  return LG;
};

export const incompleteBeta = (X, A, B) => {
  // Compute the incomplete beta function I_x(a, b).
  let A0 = 0;
  let B0 = 1;
  let A1 = 1;
  let B1 = 1;
  let M9 = 0;
  let A2 = 0;
  let C9;
  while (Math.abs((A1 - A2) / A1) > 0.00001) {
    A2 = A1;
    // eslint-disable-next-line no-mixed-operators
    C9 = -(A + M9) * (A + B + M9) * X / (A + 2 * M9) / (A + 2 * M9 + 1);
    A0 = A1 + C9 * A0;
    B0 = B1 + C9 * B0;
    M9 += 1;
    // eslint-disable-next-line no-mixed-operators
    C9 = M9 * (B - M9) * X / (A + 2 * M9 - 1) / (A + 2 * M9);
    A1 = A0 + C9 * A1;
    B1 = B0 + C9 * B1;
    A0 /= B1;
    B0 /= B1;
    A1 /= B1;
    B1 = 1;
  }
  return A1 / A;
};
