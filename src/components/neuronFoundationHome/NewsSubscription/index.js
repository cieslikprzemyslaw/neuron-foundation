import React, {useState} from 'react';
import Button from '../../staticComponents/Button';
import { Newsletter, NewsletterSubSection, NewsletterText, NewsletterInput } from './styles';
import { useIntl } from 'gatsby-plugin-intl';

const index = () => {
    const intl = useIntl();
    const [inputValue, setInputValue] = useState(
        `${intl.formatMessage({ id: `newslatter.email` })}`,
    );

    return (
        <Newsletter>
            <NewsletterSubSection>
                <NewsletterText>{intl.formatMessage({ id: `newslatter.title` })}</NewsletterText>
                <NewsletterText>{intl.formatMessage({ id: `newslatter.title2` })}</NewsletterText>
            </NewsletterSubSection>
            <NewsletterSubSection>
                <NewsletterInput type="text" value={inputValue} />
                <Button onClick={() => console.log(`working`)} text={`ZAPISZ SIĘ`} width={212} />
            </NewsletterSubSection>
        </Newsletter>
    );
};

export default index;
