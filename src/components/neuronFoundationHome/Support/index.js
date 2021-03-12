import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import { Title, Wrapper, Text, ButtonWrapper } from './styles';
import Button from '../../staticComponents/Button';

const index = () => {
    const intl = useIntl();

    return (
        <Wrapper>
            <Title>
                {intl.formatMessage({
                    id: `support.title`,
                })}
            </Title>
            <ButtonWrapper>
                <Button
                    onClick={() => console.log(`working`)}
                    text={`WPŁAĆ NA KONTO`}
                    width={270}
                    margin={50}
                />
                <Button
                    onClick={() => console.log(`working`)}
                    text={`PRZEKAŻ 1% PODATKU`}
                    width={270}
                    margin={50}
                />
                <Button
                    onClick={() => console.log(`working`)}
                    text={`SPRAWDZ INNE OPCJE`}
                    width={270}
                    margin={50}
                />
            </ButtonWrapper>
            <Text>
                {intl.formatMessage({
                    id: `support.text`,
                })}
            </Text>
        </Wrapper>
    );
};

export default index;