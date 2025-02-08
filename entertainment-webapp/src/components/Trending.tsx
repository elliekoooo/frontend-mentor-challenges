import { Slide } from './Slide';

import bookMarKOff from '/assets/icon-bookmark-empty.svg';
import bookMarkOn from '/assets/icon-bookmark-full.svg';

import movie from '/assets/icon-category-movie.svg'
import tv from '/assets/icon-category-tv.svg'
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../store/index';
import { useEffect, useState } from 'react';

// 데이터 타입 정의
interface Thumbnail {
  trending: {
    small: string;
    large: string;
  };
  regular: {
    small: string;
    medium: string;
    large: string;
  };
}

interface MovieSeries {
  id :  string;
  title: string;
  thumbnail: Thumbnail;
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

export const Trending = () => {
  const data = useSelector((state:any) => state.itemsReducer);
  const dispatch = useDispatch();

  const [filteredData,setData] = useState<MovieSeries[]>(data);

  useEffect(() => {
    setData(data);
  }, [data]);

    return (
        <>
          <h1 className="has-text-white outfit-h-l my-2">Trending</h1>
          <Slide>
            {filteredData.filter((item:any) => item.isTrending == true).map((item:any, index:number) => {
              return (
                  <div key={index} className="column is-6-mobile is-4-tablet is-4-desktop is-relative">
                    <img className ="image" src={item.thumbnail.regular.medium} />
                    <div className='is-overlay has-text-right py-4 px-4'>
                    <button className="button is-dark is-rounded" onClick={() =>  dispatch(toggle(item))}>
                      <img src={item.isBookmarked ? bookMarkOn : bookMarKOff } />
                    </button>
                  </div>
                    <div className="is-flex is-overlay">
                      <div className="has-text-white mt-auto mb-5 ml-5">
                        <span className="mr-1 outfit-b-s">{item.year} ·</span>
                        <span className="mr-1">
                          <span className="mr-1 outfit-b-s">
                            <img src={item.category.toLowerCase() == "movie" ? movie : tv}></img>
                          </span>
                          <span className="outfit-b-s">{item.category} ·</span>  
                        </span> 
                        <span className="mr-1 outfit-b-s">{item.rating}</span> 
                        <div className="outfit-h-m">{item.title}</div>
                      </div>
                    </div>
                    {/* <div className=" is-overlay mt-5 mr-5 has-text-right">
                      <button className="button  is-rounded has-background-dark" 
                         onClick={() => dispatch(toggle(item))}
                      >
                        <img src={item.isBookmarked ? bookMarkOn : bookMarKOff } />
                      </button>
                      <div className="ml-5 mb-6 is-align-content-flex-end is-align-content-end">
                        <div className="columns ml-0">
                          <div className="column m-0 p-0 is-1">{item.year}</div>
                          <div className="column m-0 p-0 is-4 has-text-centered"><img src={item.category == 'Movie' ? movie : tv}/> {item.category} </div>
                          <div className="column m-0 p-0 is-1">{item.rating}</div>
                        </div>
                        <div className='title is-4 has-text-white has-text-1 has-text-weight-semibold'>{item.title}</div>
                      </div>
                       
                    </div> */}
                      
                  </div> 
                )
            })}
          </Slide>
        </>
   
    );
}
