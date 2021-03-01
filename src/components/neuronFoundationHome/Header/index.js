import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';
import { Header as Head, TextWrapper, Title, Text, Overlapping } from './styles';

const Header = () => {
    const intl = useIntl();

    return (
        <Head>
            <Overlapping>
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
            </Overlapping>
        </Head>
    );
};

export default Header;