import React from 'react';
import Header from './Header';
import SingleNews from './SingleNews';
import { NewsStyles } from './styles';

const index = ({ dataImage }) => {
    const { file } = dataImage;
    return (
        <NewsStyles>
            <Header />
            <SingleNews image={file} />
            <SingleNews image={file} />
        </NewsStyles>
    );
};

export default index;
