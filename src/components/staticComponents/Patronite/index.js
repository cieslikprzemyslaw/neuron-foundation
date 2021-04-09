import React from 'react';

import { PatroniteSection, Logo, PatroniteWrapper } from './styles';
import cymon from '../../../assests/images/cymon-frontdev-logo.png';
import drMasa from '../../../assests/images/dm-doktor-masa-logo.png';
import fizjosens from '../../../assests/images/fizjosens-logo.png';
import imperia from '../../../assests/images/impera-logo.png';
import kontenty from '../../../assests/images/studio-kontenty-logo.png';
import wedka from '../../../assests/images/wedka-stowarzyszenie-logo.png';

const Patronite = () => {
    const patronites = [
        {name: cymon , title:"cymon-frontdev-logo"},
        {name: drMasa ,title:"dr-masa-logo"},
        {name: fizjosens ,title:"fizjosens-logo"},
        {name: imperia ,title:"imperia-logo"},
        {name: kontenty ,title:"kontenty-logo"},
        {name: wedka ,title:"wedka-logo"}, 
    ];

    return (
        <PatroniteWrapper>
            <PatroniteSection>
                {patronites.map((logo) => {
                    return <Logo src={logo.name} alt={logo.title} key={logo.name} />;
                })}
            </PatroniteSection>
        </PatroniteWrapper>
    );
};
export default Patronite;
