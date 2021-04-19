import * as React from 'react';
import styled from 'styled-components';
import Nav from '../components/staticComponents/Nav';
import MobileNav from '../components/staticComponents/MobileNav';
import Header from '../components/gallery/Header';
import Photos from '../components/gallery/Photos';
import Footer from '../components/staticComponents/Footer';
import FoundationMenu from '../components/staticComponents/FoundationMenu';


const Wrapper = styled.div`
    width: 80%;
    margin: 100px auto 0;
`;

const Gallery = () => {
    return (
        <div>
            <Nav />
            <MobileNav />
            <FoundationMenu/>
            <Wrapper>
                <Header />
                <Photos />
            </Wrapper>
            <Footer />
        </div>
    );
};

export default Gallery;
