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
        [cymon, 'cymon-frontdev-logo'],
        [drMasa, 'dr-masa-logo'],
        [fizjosens, 'fizjosens-logo'],
        [imperia, 'imperia-logo'],
        [kontenty, 'kontenty-logo'],
        [wedka, 'wedka-logo'],
    ];

    return (
        <PatroniteWrapper>
            <PatroniteSection>
                {patronites.map((logo) => {
                    return <Logo src={logo[0]} alt={logo[1]} key={logo[1]} />;
                })}
            </PatroniteSection>
        </PatroniteWrapper>
    );
};
export default Patronite;
