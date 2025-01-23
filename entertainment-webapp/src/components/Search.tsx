import search from '../assets/icon-search.svg';
import './Search.css';
import { useSelector, useDispatch } from 'react-redux';
import { set } from '../store/index'

export const Search = () => {
    const dispatch = useDispatch();

    const searchWord = useSelector((state:any) => state.searchReducer);

    return (
        <div className=''>
            <div className="field is-horizontal">
                <div className="field-body">
                    <div className="field is-expanded">
                        <div className="field has-addons">
                            <div className="control">
                                <figure className="image is-32x32">
                                    <img className='is-size-5' src={search}/>
                                </figure>
                            </div>
                            <div className="control is-expanded">
                                <input type='text' onChange={(e)=>{ dispatch(set(e.target.value))}
                                } className="input has-background-black border-style is-size-5 has-text-white" placeholder="Search for movies or TV series"></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                <div className="has-text-white is-size-4">{searchWord.length == 0 ? "" : "Found 2 results for "+searchWord}</div>
            }
        </div>
    )
};