
import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import cymonFronteDev from '../../../assests/images/support/mobile/cymon-frontdev-logo.png';
import dmDoktorMasaLogo from '../../../assests/images/support/mobile/dm-doktor-masa-logo.png';
import fizjosensLogo from '../../../assests/images/support/mobile/fizjosens-logo.png';
import imperaLogo from '../../../assests/images/support/mobile/impera-logo.png';
import pzuLogo from '../../../assests/images/support/mobile/pzu-logo.png';
import studioKontentyLogo from '../../../assests/images/support/mobile/studio-kontenty-logo.png';
import wedkaStowarzyszenieLogo from '../../../assests/images/support/mobile/wedka-stowarzyszenie-logo.png';
import styled from 'styled-components';
import {breakpoints} from '../../common/breakpoints';


const Container = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    margin: 0 2rem;
    gap: 40px;

    img:last-child {
        grid-column-end: 3;
        margin-bottom:7rem;
        @media (min-width:${breakpoints.md}){
            grid-column-end: unset;
        }
    }

    @media (min-width:${breakpoints.lg}){
        width:100rem;
        margin:12rem auto 0;
    }
`;

const Image = styled.img`
    width:123px;
    display:block;
        @media (min-width:${breakpoints.md}){
            display: ${({hidden})=>hidden && "none"};   
        }
`;

const Supports = () => {
    const intl = useIntl();

    return (
        <Container>
            <Image src={cymonFronteDev} alt="" />
            <Image src={dmDoktorMasaLogo} alt="" />
            <Image src={fizjosensLogo} alt="" />
            <Image src={imperaLogo} alt="" />
            <Image src={pzuLogo} alt="" hidden/>
            <Image src={studioKontentyLogo} alt="" />
            <Image src={wedkaStowarzyszenieLogo} alt="" />
        </Container>
    );
};

export default Supports;
