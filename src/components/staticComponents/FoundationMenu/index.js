import { useIntl } from 'gatsby-plugin-intl';
import React from 'react';

import { FoundationMenu, Image, LinkItem, ListItem, Menu } from './styles';

const index = () => {
    const intl = useIntl();

    const menu = [
        ['mainPage', '/'],
        ['news', '/news/'],
        ['join', '/join/'],
        ['gallery', '/gallery/'],
    ];

    return (
        <FoundationMenu>
            <Image />
            <Menu>
                {menu.map((item) => {
                    return (
                        <ListItem key={item[0]}>
                            <LinkItem to={item[1]} activeStyle={{fontWeight: "600"}}>
                                {intl.formatMessage({
                                    id: `navigation.${item[0]}`,
                                })}
                            </LinkItem>
                        </ListItem>
                    );
                })}
                {/* <ListItem><Link href="#"></Link></ListItem>
                <ListItem><Link href="#"></Link></ListItem>
                <ListItem><Link href="#"></Link></ListItem>
                <ListItem><Link href="#"></Link></ListItem> */}
            </Menu>
        </FoundationMenu>
    );
};

export default index;
