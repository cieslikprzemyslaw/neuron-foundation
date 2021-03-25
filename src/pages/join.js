import React from 'react';
import MainParagraph from '../components/neuronFoundationHome/MainParagraph/index';
import Supports from '../components/neuronFoundationHome/Supports/index';
import {breakpoints} from '../components/common/breakpoints';
import Footer from '.././components/staticComponents/Footer/index';
import Nav from '.././components/staticComponents/Nav/index';
import styled from 'styled-components';



const Main = styled.main`
 
`;


const Join = () => {
    return (
        <Main>
            <Nav/>
            <MainParagraph />
            <Supports />
            <Footer/>
        </Main>
    );
};

export default Join;
