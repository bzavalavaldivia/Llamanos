import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Todos los martes y jueves</h1>
      <p>Lleva la segunda pizza a 1 Sol.</p>
      <FeatureButton>Pedir ahora</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
