import bookmark from '../assets/icon-nav-bookmark.svg';
import home from '../assets/icon-nav-home.svg';
import movies from '../assets/icon-nav-movies.svg';
import tv_series from '../assets/icon-nav-tv-series.svg';
import logo from '../assets/logo.svg'
import './SideBar.css';


export const SideBar = () => {
    return (
            
        <div className="columns is-vcentered">
            <div className="column">
                <div className="side-box has-text-centered is-flex-touch"> 
                    <p className="mx-5 my-6 pt-6"><img src={logo}></img></p>
                    <p className="my-5 mx-5"><img src={home}></img></p>
                    <p className="my-5 mx-5"><img src={movies}></img></p>
                    <p className="my-5 mx-5"><img src={tv_series}></img></p>
                    <p className="my-5 mx-5"><img src={bookmark}></img></p>
                </div>
            </div>
        </div>
    )
};