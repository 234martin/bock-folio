import React from "react";
import styled from "styled-components";

const HeroContainer = styled.div`
  background: #111;
  color: white;
  text-align: center;
  padding: 50px;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <h1>Hello, I'm Martin Kihungi</h1>
      <p>A passionate Frontend Developer</p>
    </HeroContainer>
  );
};

export default Hero;
