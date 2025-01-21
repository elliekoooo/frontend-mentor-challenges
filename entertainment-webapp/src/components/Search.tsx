import search from '../assets/icon-search.svg';
import './Search.css';
import data from '../assets/data.json';
import { useEffect, useState } from 'react';

export const Search = () => {
    const [searchWord, setSearchWord] = useState("");
    const [searchData, setSearchData] = useState([] as any);

    useEffect(()=> {
        if(searchWord !== "")
            setSearchData(data?.filter(d => (d.title).indexOf(searchWord.trim()) > -1));
    }, [searchWord]);

    console.log(searchData);
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
                                <input type='text' onChange={(e)=>{setSearchWord(e.target.value)}
                                } className="input has-background-black border-style is-size-5 has-text-white" placeholder="Search for movies or TV series"></input>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                searchData.map((d:any, k:number) => (
                    <div key={k} className='has-text-white'>{d?.title}</div>
                ))
            }
        </div>
    )
};