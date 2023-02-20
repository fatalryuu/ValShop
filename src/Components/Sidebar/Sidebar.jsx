import React, {useEffect} from 'react';
import s from "./Sidebar.module.css";
import HomeIcon from '@mui/icons-material/Home';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ReviewsIcon from '@mui/icons-material/Reviews';
import ListElement from "./ListElement";

const Sidebar = () => {
    let list;
    if (window.innerWidth >= 900)
        list = [
            <ListElement Icon={HomeIcon} url="" name="Home" key={Math.random() * 1000}/>,
            <ListElement Icon={AddShoppingCartIcon} url="buy" name="Buy VP" key={Math.random() * 1000}/>,
            <ListElement Icon={AddShoppingCartIcon} url="catalog" name="Buy Skins" key={Math.random() * 1000}/>,
            <ListElement Icon={ReviewsIcon} url="reviews" name="Reviews" key={Math.random() * 1000}/>,
        ];
    else
        list = [
            <ListElement Icon={HomeIcon} url="" name="" key={Math.random() * 1000}/>,
            <ListElement Icon={AddShoppingCartIcon} url="buy" name="" key={Math.random() * 1000}/>,
            <ListElement Icon={AddShoppingCartIcon} url="catalog" name="" key={Math.random() * 1000}/>,
            <ListElement Icon={ReviewsIcon} url="reviews" name="" key={Math.random() * 1000}/>,
        ];
    return (
        <nav className={s.wrapper}>
            <ul className={s.list}>
                {list.map((el, index) => <li className={s.item} key={index}>{el}</li>)}
            </ul>
        </nav>
    );
};

export default Sidebar;