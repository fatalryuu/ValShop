import React from 'react';
import s from "./Home.module.css";
import {NavLink} from "react-router-dom";

const Home = () => {
    return (
        <div className={s.wrapper}>
            <h2>ValShop</h2>
            <h5>Website for profitable purchase of Valorant skins and points</h5>

            <div className={s.offer_string}>We offer:</div>
            <ul className={s.offer}>
                <li><NavLink to="/buy">Purchase of VP</NavLink></li>
                <li><NavLink to="/catalog">Purchase of all available Valorant skins</NavLink></li>
            </ul>

            <div className={s.why_string}>Why we:</div>
            <ul className={s.why}>
                <li>Fast and honest services</li>
                <li>Fair prices</li>
                <li>24/7 support service</li>
                <li><NavLink to="/reviews">Open review page</NavLink></li>
            </ul>

        </div>
    );
};

export default Home;