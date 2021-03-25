import React from 'react';
import Header from './Header';
import SingleNews from './SingleNews';
import { NewsStyles, FlexContainer } from './styles';

const index = ({ dataImage }) => {
    const { file } = dataImage;
    return (
        <NewsStyles>
            <Header />
            <FlexContainer>
                <SingleNews image={file} />
                <SingleNews image={file} />
            </FlexContainer>
        </NewsStyles>
    );
};

export default index;
