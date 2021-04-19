import styled from 'styled-components';

const PatroniteWrapper = styled.section`
    position: relative;
    width: 100%;
`;

const PatroniteSection = styled.section`
    position: relative;
    display:grid;
    grid-template-columns:repeat(3,1fr);
    width: 100rem;
    justify-items:center;
    margin: 0 auto;
    padding: 65px 0 65px 0;
    z-index: 5;

    @media only screen and (max-width: 1440px) {
        padding: 50px 0 50px 0;
    }

    @media (max-width: 1024px) {
        width: 100%;
        padding: 0 0 0 0;
    }
    @media (max-width: 640px) {
        grid-template-columns: repeat(2,1fr);
    }
`;

const Logo = styled.img`
    height: 75px;
    margin: 50px 20px;
`;

export { PatroniteWrapper, PatroniteSection, Logo };
