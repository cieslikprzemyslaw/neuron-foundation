import styled from 'styled-components';

import { respondTo } from '../../common/respondTo';

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    padding: 65px 5vw;
    width: 100%;
`;

const Title = styled.h2``;

const Text = styled.p``;

const ButtonWrapper = styled.section`
    ${respondTo.xl`
        display: flex;
    `}
`;

export { Wrapper, Title, Text, ButtonWrapper };
