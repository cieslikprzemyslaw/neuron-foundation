import * as React from 'react';
import Nav from '../components/staticComponents/Nav';
import MobileNav from '../components/staticComponents/MobileNav';
import Header from '../components/neuronFoundationHome/Header';
import News from '../components/neuronFoundationHome/News';
// import Footer from '../components/staticComponents/Footer';
import styled from 'styled-components';

const Wrapper = styled.div`
    overflow-x: hidden;
    margin: 0;
`;
// markup
const IndexPage = ({ data }) => {
    return (
        <Wrapper>
            <Nav />
            <MobileNav />
            <Header />
            <News dataImage={data} />
            {/* <Footer /> */}
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

export default IndexPage;
