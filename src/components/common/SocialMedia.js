import React, { useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { FaFacebookSquare, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { gsap } from 'gsap';

// const fadeIn = keyframes`
//   0% {
//     opacity: 0;
//   }
//   100% {
//     opacity: 1;
//   }
// `;

const Container = styled.div`
    display: flex;
    align-items: center;
    width: fit-content;

    @media only screen and (max-width: 600px) {
        margin: 0 auto;
    }
    ${({ mobileNav }) =>
        mobileNav &&
        css`
            opacity: 0;
        `}
    ${({ navigation }) =>
        navigation &&
        css`
            justify-content: space-evenly;
            margin-left: 3rem;
        `}
        @media (max-width: 1224px) {
        justify-content: center;
    }
`;

const LinksWrapper = styled.div`
    width: 25%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    margin: 0 auto;
`;

const ExternalLink = styled.a`
    text-decoration: none;
    transition: all 0.15s ease;
    font-size: ${({ footer }) => (footer ? '2.4rem' : '3.2rem')};
    color: white;

    ${({ navigation }) =>
        navigation &&
        css`
            margin-top: 5px;
            font-size: 1.6rem;
            padding: 0.3rem 0.8rem;
        `}

    ${({ footer }) =>
        footer &&
        css`
            color: #3a3a3a;
            font-size: 2.2rem;
            padding: 0.8rem;
            margin: 0 2px;
        `}
`;

const SocialMedia = ({ footer, navigation, mobileNav }) => {
    const containerRef = useRef();
    // const [firstLoad, setFirstLoad] = useState(false);

    useEffect(() => {
        if (mobileNav) {
            gsap.to(containerRef.current, { opacity: 1, delay: 0.2, duration: 0.6 });
        }
    }, [mobileNav]);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setFirstLoad(true);
    //     }, 800);
    // }, []);

    const Icons = [
        {
            href: 'https://www.facebook.com/Smartoakprojects',
            icon: FaFacebookSquare,
        },
        {
            href: 'https://twitter.com/smart_oak',
            icon: FaTwitter,
        },
        {
            href: 'https://www.instagram.com/smartoakprojects/',
            icon: AiFillInstagram,
        },
        {
            href: 'https://www.youtube.com/c/SmartOakProject/featured',
            icon: FaYoutube,
        },
        {
            href: 'https://www.linkedin.com/company/smartoakproject/',
            icon: FaLinkedin,
        },
    ];
    const mapIcons = Icons.map(({ href, icon: Icon }) => (
        <ExternalLink
            key={href}
            navigation={navigation}
            footer={footer}
            target="_blank"
            rel="noreferrer"
            href={href}
        >
            <Icon />
        </ExternalLink>
    ));
    return (
        <Container
            ref={containerRef}
            footer={footer}
            navigation={navigation}
            mobileNav={mobileNav}
            // anim={firstLoad}
        >
            <LinksWrapper>{mapIcons}</LinksWrapper>
        </Container>
    );
};

export default SocialMedia;
