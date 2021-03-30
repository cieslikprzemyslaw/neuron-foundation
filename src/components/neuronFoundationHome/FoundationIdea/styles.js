import styled from 'styled-components';

import { respondTo } from '../../common/respondTo';

const TextWrapper = styled.section`
    margin: 10vh 5vw;
    text-align: justify;

    ${respondTo.md`
        text-align: left;
        column-count: 2;
        column-gap: 40px;
    `}
`;

const Title = styled.h2`
    margin: 0 0 5vh 0;
`;

const Text = styled.p``;

export { TextWrapper, Title, Text };
