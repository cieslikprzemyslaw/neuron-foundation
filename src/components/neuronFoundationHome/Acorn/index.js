import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import { Wrapper, Overlay, TextSection, TitleLogo1, TitleLogo2, Text } from './styles';

const index = () => {
    const intl = useIntl();

    return (
        <Wrapper>
            <Overlay>
                <TextSection>
                    <TitleLogo1 />
                    <TitleLogo2 />
                    <Text>{intl.formatMessage({ id: `acorn.text` })}</Text>
                </TextSection>
            </Overlay>
        </Wrapper>
    );
};

export default index;
