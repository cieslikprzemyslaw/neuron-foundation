import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import { TextWrapper, Column, SecondColumn, Title, Text } from './styles';

const index = () => {
    const intl = useIntl();

    return (
        <TextWrapper>
            <Column>
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
            </Column>
            <SecondColumn>
                <Text>
                    {intl.formatMessage({
                        id: `foundationIdea.description2`,
                    })}
                </Text>
            </SecondColumn>
        </TextWrapper>
    );
};

export default index;
