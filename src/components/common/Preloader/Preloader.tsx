import React from 'react';
import preloader from '../../../assets/img/preloader.svg'

export const Preloader = () => {
    return (
        <div>
            <img src={preloader} alt={"page is loading"}/>
        </div>
    );
};