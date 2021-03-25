import React from 'react';
import Nav from '../components/staticComponents/Nav';
import MobileNav from '../components/staticComponents/MobileNav';
import Footer from '../components/staticComponents/Footer';
import styled from 'styled-components';
import News from '../components/neuronFoundationHome/News';

const Wrapper = styled.div`
    overflow-x: hidden;
    margin: 0;
`;

const news = ({ data }) => {
    return (
        <Wrapper>
            <Nav />
            <MobileNav />
            <News dataImage={data} />
            <Footer />
        </Wrapper>
    );
};

export const query = graphql`
    query {
        file(relativePath: { eq: "sampleNews.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid_noBase64
                }
            }
        }
    }
`;

export default news;
