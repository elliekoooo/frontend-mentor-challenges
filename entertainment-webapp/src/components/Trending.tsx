import { useState, useEffect } from 'react';
import { Slide } from './Slide';

import bookMarKOff from '../assets/icon-bookmark-empty.svg';
import bookMarkOn from '../assets/icon-bookmark-full.svg';

import movie from '../assets/icon-category-movie.svg'
import tv from '../assets/icon-category-tv.svg'
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

  const [data , setData ] = useState<MovieSeries[]>([]);
  const [loading, setLoading ] = useState<boolean>(true);
  const [ error , setError ] = useState<string>();

  const bookmarkHandler = (id : string) => {
    const updateBookmark = data.map((item : MovieSeries) =>
    item.id == id ? { ...item, isBookmarked: !item.isBookmarked } : item
  );
  setData(updateBookmark);
 }

  let imaUrl = 'http://localhost:5173/src/';
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
                  <div key={index} className="column is-6-mobile is-4-tablet is-4-desktop  is-relative ">
                    <img className ="image is-4by3 " src={imaUrl+item.thumbnail.regular.medium} />
                    <div className='is-overlay has-text-centered'>
                     
                          
                      <div className="columns is-multiline is-mibile">
                        <div className="column is-full">
                          <button 
                            className="button is-dark is-rounded has-background-dark"
                            onClick={() => bookmarkHandler(item.id)}
                          >
                            <img src={item.isBookmarked ? bookMarkOn : bookMarKOff } />
                          </button>
                        </div>
                        <div className="column pb-0 is-full">
                            <div className="columns  subtitle is-6 has-text-grey-lighter ">
                              <div className="column">{item.year}</div>
                              <div className="column">
                                  <img src={item.category == 'Movie' ? movie : tv}/>
                                  {item.category}
                              </div>
                              <div className="column">{item.rating}</div>
                            </div>
                        </div>
                        <div className="column is-full is-12 ">
                          <p className='title is-4 has-text-white-ter has-text-left has-text-weight-semibold'>{item.title}</p>
                        </div>
                      </div>
                   
                    </div>
                  </div> 
                )
            })}
          </Slide>
        </>
   
    );
}
