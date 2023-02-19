import React from 'react';
import s from './SkinElement.module.css'

const SkinElement = ({price, name, imgURL}) => {
    return (
        <div className={s.skin}>
            <div className={s.name}>{name}</div>
            <div className={s.img_wrapper}>
                <img src={imgURL} alt=""/>
            </div>
            <div className={s.down}>
                <span className={s.price}>€{price}</span>
                <a href="#" className={s.buy}>Buy</a>
            </div>
        </div>
    );
};

export default SkinElement;