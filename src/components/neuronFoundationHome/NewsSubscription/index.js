import React, { useState } from 'react';
import Button from '../../staticComponents/Button';
import { Newsletter, NewsletterSubSection, NewsletterText, NewsletterInput } from './styles';
import { useIntl } from 'gatsby-plugin-intl';
import emailValidator from '../../common/emailValidator';

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
        const isEmailValid = emailValidator(inputValue);

        if(isEmailValid) return console.log("dziala");
        else return console.error("nie dziala");
    }

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
