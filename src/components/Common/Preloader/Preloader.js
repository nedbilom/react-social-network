import React from 'react';
import s from './Preloader.module.css';
import preloader from '../../../images/icons/preloader.svg';

const Preloader = (props) => {
    return <div className={s.wrapper}>
        <img src={preloader} alt="Preloader" />
    </div>
}

export default Preloader;