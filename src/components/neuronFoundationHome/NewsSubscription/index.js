import React, { useState } from 'react';
import Button from '../../staticComponents/Button';
import { Newsletter, NewsletterSubSection, NewsletterText, NewsletterInput } from './styles';
import { useIntl } from 'gatsby-plugin-intl';

const index = () => {
    const intl = useIntl();
    const [inputValue, setInputValue] = useState(
        `${intl.formatMessage({ id: `newslatter.email` })}`,
    );

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const clearInput = () => {
        setInputValue('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const regex = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@[*[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+]*/;
        if (regex.test(inputValue)) {
            return console.error('dziala');
        }
        if (!regex.test(inputValue)) {
            return console.error('nie działa');
        }
    };

    return (
        <Newsletter>
            <NewsletterSubSection>
                <NewsletterText>{intl.formatMessage({ id: `newslatter.title` })}</NewsletterText>
                <NewsletterText>{intl.formatMessage({ id: `newslatter.title2` })}</NewsletterText>
            </NewsletterSubSection>
            <NewsletterSubSection>
                <NewsletterInput
                    type="text"
                    type="email"
                    value={inputValue}
                    onChange={handleInputChange}
                    onClick={clearInput}
                />
                <Button
                    type="submit"
                    form="form1"
                    onClick={handleSubmit}
                    text={`ZAPISZ SIĘ`}
                    width={212}
                />
            </NewsletterSubSection>
        </Newsletter>
    );
};

export default index;
