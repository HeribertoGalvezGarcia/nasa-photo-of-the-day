import React from 'react';
import styled from 'styled-components';

const WrapperDiv = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  background-size: cover;
  ${({image}) => `background-image: url(${image});`}
`;

const StyledP = styled.p`
  color: white;
`;

const StyledH1 = styled.h1`
  color: white;
`;

function Container({data: {copyright, date, explanation, hdurl, title}}) {
  return (
    <WrapperDiv image={hdurl}>
      <StyledH1>{title}</StyledH1>
      <StyledP>{explanation}</StyledP>
      <StyledP>{copyright} {date}</StyledP>
    </WrapperDiv>
  );
}

export default Container;
