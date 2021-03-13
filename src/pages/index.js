import * as React from 'react';
import Nav from '../components/staticComponents/Nav';
import MobileNav from '../components/staticComponents/MobileNav';
import Header from '../components/neuronFoundationHome/Header';
import FoundationIdea from '../components/neuronFoundationHome/FoundationIdea';
import SocialMedia from '../components/neuronFoundationHome/SocialMedia';
import NewsSubscription from '../components/neuronFoundationHome/NewsSubscription';
import Acorn from '../components/neuronFoundationHome/Acorn';
import Support from '../components/neuronFoundationHome/Support';
import Patronite from '../components/staticComponents/Patronite';
import Footer from '../components/staticComponents/Footer';
import styled from 'styled-components';

const Wrapper = styled.section``;
// markup
const IndexPage = () => {
    return (
        <Wrapper>
            <Nav />
            <MobileNav />
            <Header />
            <FoundationIdea/>
            <SocialMedia/>
            <NewsSubscription/>
            <Acorn/>
            <Support/>
            <Patronite/>
            <Footer/>
        </Wrapper>
    );
};

export default IndexPage;
