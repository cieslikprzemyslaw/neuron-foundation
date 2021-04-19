import styled from 'styled-components';
import React from 'react';

import { Link } from 'gatsby-plugin-intl';

import logoSrc from '../../../assests/images/Neuron Foundation.png';

export const FoundationMenu = styled.nav`
    display: none;

    @media (min-width: 901px) {
        display: flex;
        justify-content: space-between;
    }
`;

export const Image = styled.img`
    margin: 10px 0 10px 50px;
    height: 50px;
    width: 110px;
    background-image: url(${logoSrc});
    background-repeat: no-repeat;
    background-position: center;
`;

export const Menu = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 50px;
    width: 40%;
    list-style: none;
`;

export const ListItem = styled.li``;

export const LinkItem = styled((props) => <Link {...props} />)`
           text-decoration: none;
           letter-spacing: 2px;
           font-weight: 500;
           color: #0e0e0e;
       `;
