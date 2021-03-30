import React, { useState } from 'react';
import Button from '../../staticComponents/Button';
import { Newsletter, NewsletterSubSection, NewsletterText, NewsletterInput, PassedText, ErrorText } from './styles';
import { useIntl } from 'gatsby-plugin-intl';
<<<<<<< HEAD:src/components/neuronFoundationHome/NewsSubscription/index.js
import emailValidator from '../../common/emailValidator';
=======
import {validateEmail} from '../../common/validateEmail';
>>>>>>> Przemek-Home-Page:src/components/neuronFoundationHome/NewsSubscription/index.js

const index = () => {
    const intl = useIntl();
    const [inputValue, setInputValue] = useState();
    const [showError, setShowError] = useState(false)
    const [showPassed, setShowPassed] = useState(false)

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
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
<<<<<<< HEAD:src/components/neuronFoundationHome/NewsSubscription/index.js
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
=======
                <PassedText style={{ display: showPassed ? 'block' : 'none' }}>
                    {intl.formatMessage({ id: 'newslatter.passed' })}
                </PassedText>
                <ErrorText style={{ display: showError ? 'block' : 'none' }}>
                    {intl.formatMessage({ id: 'newslatter.error' })}
                </ErrorText>
                <NewsletterInput
                    type="email"
                    value={inputValue}
                    placeholder={intl.formatMessage({ id: `newslatter.email` })}
                    onChange={handleInputChange}
                />
                <Button type="submit" onClick={handleSubmit} text={`ZAPISZ SIĘ`} width={212} />
>>>>>>> Przemek-Home-Page:src/components/neuronFoundationHome/NewsSubscription/index.js
            </NewsletterSubSection>
        </Newsletter>
    );
};

export default index;
