import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import { TextWrapper, Title, Text } from './styles';

const index = () => {
    const intl = useIntl();

    return (
        <TextWrapper>
                <Title>
                    {intl.formatMessage({
                        id: `foundationIdea.title`,
                    })}
                </Title>
                <Text>
                    {intl.formatMessage({
                        id: `foundationIdea.description1`,
                    })}
                </Text>
                <Text>
                    {intl.formatMessage({
                        id: `foundationIdea.description2`,
                    })}
                </Text>
        </TextWrapper>
    );
};

export default index;
