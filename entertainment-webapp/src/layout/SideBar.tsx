import bookmark from '../assets/icon-nav-bookmark.svg';
import home from '../assets/icon-nav-home.svg';
import movies from '../assets/icon-nav-movies.svg';
import tv_series from '../assets/icon-nav-tv-series.svg';
import logo from '../assets/logo.svg'
import avatar from '../assets/image-avatar.png'

import './SideBar.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../store';

export const SideBar = () => {
    const dispatch = useDispatch();
    const category = useSelector((state:any) => state.categoryReducer);

    console.log(category);

    return (
        <div className="side is-flex is-justify-content-center is-align-items-center">
            <div className="box is-flex is-align-items-center"> 
                <figure className="image is-32x32 logo">
                    <img src={logo}></img>
                </figure>
                <figure className="image is-12x12" onClick={(_e) => dispatch(setCategory("home"))}>
                    <img src={home}></img>
                </figure>
                <figure className="image is-12x12" onClick={(_e) => dispatch(setCategory("movies"))}>
                    <img src={movies}></img>
                </figure>
                <figure className="image is-12x12" onClick={(_e) => dispatch(setCategory("tv_series"))}>
                    <img src={tv_series}></img>
                </figure>
                <figure className="image is-12x12" onClick={(_e) => dispatch(setCategory("bookmark"))}>
                    <img src={bookmark}></img>
                </figure>
                <figure className="image is-32x32 avatar">
                    <img src={avatar}></img>
                </figure>
            </div>
        </div>
    )
};