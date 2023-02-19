import React from 'react';
import s from "./Sidebar.module.css";
import {NavLink} from "react-router-dom";

const ListElement = ({Icon, url, name}) => {
    const toURL = "/" + url;
    return (
        <NavLink to={toURL} className={({isActive}) => isActive ? s.active : s.item}>
            <Icon fontSize="medium"/>
            <span className={s.string}>{name}</span>
        </NavLink>
    );
};

export default ListElement;