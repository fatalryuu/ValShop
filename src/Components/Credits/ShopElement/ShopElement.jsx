import React, {useState} from 'react';
import s from "./ShopElement.module.css";
import vp from "../../../img/logo.webp";

const ShopElement = ({amount, price, bonus, isCustom = false}) => {
    const [amountState, setAmount] = useState(0);
    const [priceState, setPrice] = useState(0.0);
    const [bonusState, setBonus] = useState(0);
    const handleChange = (e) => {
        setAmount(+e.target.value);
        setPrice(+(+e.target.value / 130).toFixed(2));
        setBonus(Math.round(+e.target.value / 14));
    }
    return (
        <div className={s.element}>
            <img src={vp} alt=""/>
            <br/>
            <div className={s.amount}>{isCustom ? amountState : amount}</div>
            <div className={s.price}>€{isCustom ? priceState : price}</div>
            <div className={s.bonus}>+ {isCustom ? bonusState : bonus} Bonus</div>
            {isCustom ? <div>
                <input type="range" id="volume" name="amount"
                       min="0" max="20000" value={amountState} onChange={handleChange}
                       className={s.slider}/>
                <label htmlFor="amount">VP</label>
            </div> : null}
            <a href="#" className={s.purchase}>Purchase</a>
        </div>
    );
};

export default ShopElement;