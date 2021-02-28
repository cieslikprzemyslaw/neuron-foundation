import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import { Header as Head, TextWrapper, Title, Text } from './styles';

const Header = () => {
    const intl = useIntl();

    return (
        <Head>
            <TextWrapper>
                <Title>
                    {intl.formatMessage({
                        id: `header.goals`,
                    })}
                </Title>
                <Text>
                    {intl.formatMessage({
                        id: `header.text`,
                    })}
                </Text>
            </TextWrapper>
        </Head>
    );
};

export default Header;