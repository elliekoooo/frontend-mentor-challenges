import search from '../assets/icon-search.svg';
import './Search.css';
import { useSelector, useDispatch } from 'react-redux';
import { menuObject, setWords } from '../store/index'

export const Search = () => {
    const dispatch = useDispatch();

    const menu = useSelector((state:any) => state.menuReducer);

    return (
        <div className="field">
            <div className="field has-addons">
                <div className="control ml-2 mt-auto mb-auto">
                    <figure className="image is-32x32">
                        <img className="is-size-5" src={search}/>
                    </figure>
                </div>
                <div className="control is-expanded">
                    <input type='text' onChange={(e)=>{ dispatch(setWords(e.target.value))}} 
                       className="input no-border has-background-black is-size-5 has-text-white" placeholder={"Search for " + menuObject[menu]}></input>
                    <p className="border-style ml-3 mr-5"></p>
                </div>
            </div>
        </div>
    )
};