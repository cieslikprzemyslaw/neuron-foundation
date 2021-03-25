import React from 'react';
import { Link } from 'gatsby-plugin-intl';

import styled, { keyframes } from 'styled-components';
import Search from '../../../assests/images/search.png';

const appear = keyframes`
 0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const fadeInFromNone = keyframes`
    0% {

       opacity: 0;
   }
   100% {

       opacity: 1;
   }
`;

const MobileNavMenu = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999999999999999;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    width: 100%;
    display: none;
    padding: 0 1rem;
    height: 5rem;
    border-bottom: 0.5px rgba(0, 0, 0, 0.3) solid;
    backdrop-filter: blur(27.1828px);

    @media screen and (max-width: 900px) {
        display: flex;
    }

    @media only screen and (orientation: landscape) {
        img {
            height: 4.5rem;
        }
    }
`;
const DropDownButton = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: ${(props) => (props.open ? 'none' : '1px solid #393939')};

    svg {
        font-size: 1.5rem;
    }
`;
const DropDownLink = styled.div`
    display: block;
    width: 100%;
    color: rgba(255, 255, 255, 0.85);
    padding: 1.7rem 1rem 1.7rem 1rem;
    text-decoration: none;
`;

const MobileNavItem = styled.li`
    position: relative;
    font-weight: 400;

    margin-left: ${(props) => (props.dropdown ? '0rem' : '2rem')};
    list-style-type: none;

    width: ${(props) => (props.dropdown ? '100%' : '90%')};

    opacity: 0;
    animation: 0.5s ${appear} forwards;
    animation-delay: 0.2s;

    @media only screen and (orientation: landscape) {
        font-size: 1.4rem;
        padding: 1rem;
    }
`;

const MobileNavItemLast = styled.li`
    position: relative;
    margin-top: auto;
    padding-bottom: 7rem;
    padding-top: 7rem;
    margin-left: ${(props) => (props.dropdown ? '0rem' : '2rem')};
    list-style-type: none;

    width: ${(props) => (props.dropdown ? '100%' : '90%')};

    opacity: 0;
    animation: 0.5s ${appear} forwards;
    animation-delay: 0.2s;

    & > div > div {
        width: 90vw;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
`;

const StyledLink = styled((props) => <Link {...props} />)`
    display: block;
    color: rgba(255, 255, 255, 0.85);
    text-decoration: none;
    padding: ${(props) => (props.dropdown ? '1.7rem 1rem 1.7rem 3rem' : '1.7rem 1rem')};
    border-bottom: ${(props) => (props.open ? 'none' : '1px solid #393939')};
`;

const MobileListWrapper = styled.ul`
    position: ${(props) => (props.dropdown ? 'static' : 'fixed')};
    transition: ${(props) => (props.dropdown ? 'none' : 'all 0.45s ease')};
    top: 0;
    width: 100vw;
    max-width: 100%;
    display: none;
    background: #0e0e0e;
    color: #fff;
    z-index: 999999999;
    padding-top: ${(props) => (props.dropdown ? '0rem' : '5rem')};

    @media screen and (max-width: 900px) {
        display: block;
    }
`;
const ListWrapper = styled.ul`
    flex-direction: column;
    display: flex;
    overflow: ${(props) => (props.dropdown ? 'visible' : 'auto')};
    height: ${(props) => (props.dropdown ? 'auto' : '95%')};
    position: relative;
`;

const MobileBtn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: none;
    outline-style: none;
    padding: 4px;
    outline: none;
    transition: all 1s ease;
    svg {
        fill: #575757;
        height: 26px;
        width: 26px;
        animation: ${fadeInFromNone} 0.7s linear;
    }
`;

const Input = styled.input`
    width: 90%;
    display: block;
    margin: 30px auto;
    height: 50px;
    border: 1px solid #f0f0f0;
    border-radius: 12px;
    background-color: #F5F5F5;
    bacground: url(${Search}) left no repeat;
    padding: 16px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    @media (min-width: 1024px) {
        width: 45%;
    }
`;

const WhiteMenu = styled.div`
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;

    &>li:last-child>a{
        border-bottom: 0px solid black;
    }
`;



export {
    MobileNavMenu,
    DropDownButton,
    DropDownLink,
    MobileNavItem,
    StyledLink,
    MobileListWrapper,
    ListWrapper,
    MobileBtn,
    MobileNavItemLast,
    Input,
    WhiteMenu,
};
