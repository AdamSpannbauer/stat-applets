const zPDF = (x, mean, sd) => Math.exp((-0.5) * ((x - mean) / sd) ** 2);

export default zPDF;
