import React from 'react';
import s from './Review.module.css'
import Stars from "./Stars";

const Review = ({name, text, stars}) => {
    return (
        <div className={s.wrapper}>
            <div className={s.upper}>
                <span className={s.name}>{name}</span>
                <span className={s.stars}><Stars stars={stars}/></span>
            </div>
            <div className={s.text}>{text}</div>
        </div>
    );
};

export default Review;