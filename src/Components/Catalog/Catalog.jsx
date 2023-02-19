import React from 'react';
import s from "./Catalog.module.css";
import SkinElement from "./SkinElement/SkinElement";
import v_reaver from '../../img/skins/v_reaver.png';
import p_spectrum from '../../img/skins/p_spectrum.png';
import p_singularity from '../../img/skins/p_singularity.png';
import rgx_11z_pro_firefly from '../../img/skins/rgx_11z_pro_firefly.png';
import sh_ion from '../../img/skins/sh_ion.png';
import v_prime from '../../img/skins/v_prime.png';
import op_elderflame from '../../img/skins/op_elderflame.png';

const Catalog = () => {
    const shopElements = [
        <SkinElement price={11.99} name="Reaver Vandal" imgURL={v_reaver}/>,
        <SkinElement price={15.99} name="Spectrum Phantom" imgURL={p_spectrum}/>,
        <SkinElement price={15.99} name="Singularity Phantom" imgURL={p_singularity}/>,
        <SkinElement price={29.99} name="RGX 11Z Pro Firefly" imgURL={rgx_11z_pro_firefly}/>,
        <SkinElement price={11.99} name="Ion Sheriff" imgURL={sh_ion}/>,
        <SkinElement price={11.99} name="Prime Vandal" imgURL={v_prime}/>,
        <SkinElement price={15.99} name="Elderflame Operator" imgURL={op_elderflame}/>,
    ];
    return (
        <div className={s.wrapper}>
            <h2>Buy skins</h2>
            <h5>All available Valorant skins</h5>
            <div className={s.shop_elements}>
                {shopElements.map(el => el)}
            </div>
        </div>
    );
};

export default Catalog;