import React, { useState } from 'react';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn
} from './HeroElements';

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroItems>
          <HeroH1>Las mejores pizzas</HeroH1>
          <HeroP>Listas en 5 minutos</HeroP>
          <HeroBtn>Pedir ahora</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
