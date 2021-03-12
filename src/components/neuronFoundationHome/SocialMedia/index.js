import React from 'react';
import {
    SocialMediaSection,
    Title,
    SocialMediaWrapper,
    ExternalLink,
    ExternalText,
} from './styles';
import { FaFacebookSquare, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { useIntl } from 'gatsby-plugin-intl';


const index = () => {
    const intl = useIntl();

    const Icons = [
        {
            href: 'https://www.facebook.com/Smartoakprojects',
            icon: FaFacebookSquare,
            text: 'Facebook',
        },
        {
            href: 'https://www.youtube.com/c/SmartOakProject/featured',
            icon: FaYoutube,
            text: 'YouTube',
        },
        {
            href: 'https://www.instagram.com/smartoakprojects/',
            icon: AiFillInstagram,
            text: 'Instagram',
        },
        {
            href: 'https://www.linkedin.com/company/smartoakproject/',
            icon: FaLinkedin,
            text: 'Linkedin',
        },
        {
            href: 'https://twitter.com/smart_oak',
            icon: FaTwitter,
            text: 'Twitter',
        },
    ];

    return (
        <SocialMediaSection>
            <section>
                <Title>{intl.formatMessage({ id: `socialSection.title` })}</Title>
                <Title>{intl.formatMessage({ id: `socialSection.title2` })}</Title>
            </section>
            <SocialMediaWrapper>
                {Icons.map(({ href, icon: Icon, text }) => (
                    <ExternalLink key={href} href={href}>
                        <Icon style={{ color: '#B1B1B1', fontSize: '4rem' }} />
                        <ExternalText>{text}</ExternalText>
                    </ExternalLink>
                ))}
            </SocialMediaWrapper>
        </SocialMediaSection>
    );
};

export default index;
