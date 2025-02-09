import { useState, useEffect } from 'react';
import { Slide } from './Slide';

import bookMarKOff from '../assets/icon-bookmark-empty.svg';
import bookMarkOn from '../assets/icon-bookmark-full.svg';

import movie from '../assets/icon-nav-movies.svg'
import tv from '../assets/icon-nav-tv-series.svg'
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
  const [ data , setData ] = useState<MovieSeries[]>([]);
  const [ loading , setLoading ] = useState<boolean>(true);
  const [ error , setError ] = useState<string>();

  let imaUrl = 'http://localhost:5173/src/';

  const bookmarkHandler = (id : string) => {
    const updateBookmark = data.map((item : MovieSeries) =>
    item.id == id ? { ...item, isBookmarked: !item.isBookmarked } : item
  );
  setData(updateBookmark);
 }

    useEffect( () => {
       fetch("http://localhost:5173/src/assets/data.json")
      .then((response) => {
        if(!response.ok) {
          throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
        }
        return response.json();
      } )
      .then( (data) => {
          let updatedData : MovieSeries[] = [];
          updatedData = data.map((item: MovieSeries, index: number) => ({
          ...item,
          id: index + Math.random(),
        }));
        setData(updatedData);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(true);
      });
    }, []);

    if(error){
      return <div>error: {error}</div>;
    }
    if(loading){
      return <div>Loading...{loading}</div>;
    }
    return (
        <>
          <h1 className='title has-text-white'>Trending</h1>
          <Slide>
            {data.filter((item) => item.isTrending == true).map((item, index) => {
              return (
                  <div key={index} className="column 	mx-2 p-0 is-6-mobile is-4-tablet is-4-desktop  is-relative ">
                      <img className ="image is-fullwidth" src={imaUrl+item.thumbnail.regular.medium} />
                      <div className="pt-5 pr-4 is-flex is-overlay is-flex-direction-column is-align-items-flex-end is-justify-content-flex-start">
                        <button className="button  is-rounded has-background-dark" onClick={() => bookmarkHandler(item.id)}>
                          <img src={item.isBookmarked ? bookMarkOn : bookMarKOff } />
                        </button>
                      </div>
                      <div className="pb-6  pl-4 is-flex is-overlay is-flex-direction-column is-align-items-flex-start is-justify-content-end">
                        <div className="is-flex">
                          <div className="is-3 mr-4 has-text-grey-lighter">{item.year}</div>
                          <div className="is-3 mr-4 has-text-grey-lighter"><img src={item.category == 'Movie' ? movie : tv}/> {item.category} </div>
                          <div className="is-3 has-text-grey-lighter">{item.rating}</div>
                      
                        </div>
                        
                        <div className='title is-4 has-text-white has-text-left has-text-weight-semibold'>{item.title}</div>
                      </div>
                      
                  </div> 
                )
            })}
          </Slide>
        </>
   
    );
}
