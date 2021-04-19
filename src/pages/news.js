import React from 'react';
import Nav from '../components/staticComponents/Nav';
import MobileNav from '../components/staticComponents/MobileNav';
import Footer from '../components/staticComponents/Footer';
import styled from 'styled-components';
import Description from '../components/neuronFoundationNews/Description';
import { NewsStyles, FlexContainer } from '../components/neuronFoundationHome/News/styles';
import Header from '../components/neuronFoundationHome/News/Header';
import SingleNews from '../components/neuronFoundationHome/News/SingleNews';
import FoundationMenu from '../components/staticComponents/FoundationMenu';
const Wrapper = styled.div`
    overflow-x: hidden;
    margin: 0;
`;

const news = ({ data }) => {
    const { file } = data;
    return (
        <Wrapper>
            <Nav />
            <MobileNav />
            <FoundationMenu />
            <NewsStyles>
                <Header />
                <Description />
                <FlexContainer>
                    <SingleNews image={file} />
                    <SingleNews image={file} />
                </FlexContainer>
            </NewsStyles>
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
