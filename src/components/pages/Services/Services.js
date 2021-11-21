import React from 'react';

import HeroSection from '../../HeroSection';
import Pricing from '../../Pricing';
import { homeObjFour } from './Data';


function Services() {

    return (
        <>
            <HeroSection {...homeObjFour} />
        </>
    )
}

export default Services;
