import React from 'react';
import MainParagraph from '../components/neuronFoundationHome/MainParagraph/index';
import Footer from '.././components/staticComponents/Footer/index';
import Nav from '.././components/staticComponents/Nav/index';
import styled from 'styled-components';
import FoundationMenu from '../components/staticComponents/FoundationMenu';
import Patronite from '../components/staticComponents/Patronite';



const Main = styled.main`
 
`;


const Join = () => {
    return (
        <>
            <Nav/>
            <FoundationMenu/>
            <MainParagraph />
            <Patronite />
            <Footer/>
        </>
    );
};

export default Join;
