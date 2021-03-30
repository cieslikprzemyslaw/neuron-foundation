import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  margin-bottom: 50px;
`

const SubTitle = styled.h2`
  font-weight: normal;
  text-align: justify;
`

const Header = () => {
    return (
        <>
            <Title>Galeria</Title>
            <SubTitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tristique id magna id
                tempor. Nam eu turpis orci. In vestibulum purus nec augue consequat, nec posuere sem
                fermentum. Suspendisse sit amet pharetra est, vel sodales dui. Pellentesque mattis
                non nisi ac mattis.
            </SubTitle>
        </>
    );
};

export default Header;
