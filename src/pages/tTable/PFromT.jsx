import React, { useState } from 'react';
import PFromTForm from '../../components/forms/PFromTForm';
import PFromTPlot from '../../components/plots/t/PFromTPlot';

function PFromT() {
  const [t, setT] = useState(1.96);
  const [df, setDF] = useState(10);

  const [curveRegion, setCurveRegion] = useState('outside');

  const hookValues = {
    t, df, curveRegion,
  };

  const hookSetters = {
    setT, setDF, setCurveRegion,
  };

  return (
    <div className="page">
      <PFromTForm hookValues={hookValues} hookSetters={hookSetters} />
      <PFromTPlot hookValues={hookValues} />
    </div>
  );
}

export default PFromT;
