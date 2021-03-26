import React, { useState } from 'react';
import Button from '../../staticComponents/Button';
import { Newsletter, NewsletterSubSection, NewsletterText, NewsletterInput, PassedText, ErrorText } from './styles';
import { useIntl } from 'gatsby-plugin-intl';
import {validateEmail} from '../../common/validateEmail';

const index = () => {
    const intl = useIntl();
    const [inputValue, setInputValue] = useState(
        `${intl.formatMessage({ id: `newslatter.email` })}`,
    );
    const [showError, setShowError] = useState(false)
    const [showPassed, setShowPassed] = useState(false)

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const clearInput = () => {
        setInputValue('');
    };

   const handleSubmit = (e) => {
       e.preventDefault();
       const isEmailValid = validateEmail(inputValue);

        if(isEmailValid){
            setShowError(false);
            setShowPassed(true);
        }
        if(!isEmailValid){
            setShowError(true);
        }
   };

    return (
        <Newsletter>
            <NewsletterSubSection>
                <NewsletterText>{intl.formatMessage({ id: `newslatter.title` })}</NewsletterText>
                <NewsletterText>{intl.formatMessage({ id: `newslatter.title2` })}</NewsletterText>
            </NewsletterSubSection>
            <NewsletterSubSection>
                <PassedText style={{ display: showPassed ? 'block' : 'none' }}>
                    {intl.formatMessage({ id: 'newslatter.passed' })}
                </PassedText>
                <ErrorText style={{ display: showError ? 'block' : 'none' }}>
                    {intl.formatMessage({ id: 'newslatter.error' })}
                </ErrorText>
                <NewsletterInput
                    type="email"
                    value={inputValue}
                    onChange={handleInputChange}
                    onClick={clearInput}
                />
                <Button type="submit" onClick={handleSubmit} text={`ZAPISZ SIĘ`} width={212} />
            </NewsletterSubSection>
        </Newsletter>
    );
};

export default index;
