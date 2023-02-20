import React from 'react';
import s from './Credits.module.css'
import ShopElement from "./ShopElement/ShopElement";

const Credits = () => {
    const shopElements = [
        <ShopElement amount={650} price={4.99} bonus={0} key={Math.random() * 10000}/>,
        <ShopElement amount={1400} price={9.99} bonus={100} key={Math.random() * 10000}/>,
        <ShopElement amount={2900} price={19.99} bonus={300} key={Math.random() * 10000}/>,
        <ShopElement amount={5250} price={34.99} bonus={700} key={Math.random() * 10000}/>,
        <ShopElement amount={7750} price={49.99} bonus={1250} key={Math.random() * 10000}/>,
        <ShopElement amount={16000} price={99.99} bonus={3000} key={Math.random() * 10000}/>,
    ];
    return (
        <div className={s.wrapper}>
            <h2>Buy VP</h2>
            <h5>Select VP packages or custom amount</h5>
            <div className={s.content}>
                <div className={s.shop_elements}>
                    {shopElements.map(el => el)}
                </div>
                <div className={s.converter}>
                    <div className={s.custom}>Custom:</div>
                    <ShopElement amount={0} price={0} bonus={0} isCustom={true}/>
                </div>
            </div>
        </div>
    );
};

export default Credits;