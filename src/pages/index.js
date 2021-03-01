import * as React from 'react';
import Nav from '../components/staticComponents/Nav';
import MobileNav from '../components/staticComponents/MobileNav';
import Header from '../components/neuronFoundationHome/Header';
// import Footer from '../components/staticComponents/Footer';
import styled from 'styled-components';

const Wrapper = styled.div`
    overflow-x: hidden;
    margin: 0;
`;
// markup
const IndexPage = () => {
    return (
        <Wrapper>
            <Nav />
            <MobileNav />
            <Header />
            {/* <Footer /> */}
        </Wrapper>
    );
};

export default IndexPage;
