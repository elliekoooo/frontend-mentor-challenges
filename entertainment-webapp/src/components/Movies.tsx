import { useState, useEffect } from 'react';
import bookMarKOff from '../assets/icon-bookmark-empty.svg';
import bookMarkOn from '../assets/icon-bookmark-full.svg';

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
  title: string;
  thumbnail: Thumbnail;
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

export interface Category {
  category : string;
}
export const Movies = (props : Category) => {

  const [ data , setData ] = useState<MovieSeries[]>([]);
  const [ loading , setLoading ] = useState<boolean>(true);
  const [ error , setError ] = useState<string>();

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
        setData(data)
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(true);
      });
    }, []);// 빈 배열을 넣어 컴포넌트 마운트 시 한 번만 실행

    console.log(data);
    let filteredData : any[];
    if(props.category != "all"){
      filteredData = data.filter((item) => item.category.toLowerCase().includes(props.category.toLowerCase()));
    
    }else{
      filteredData = data;
    }
  
    if(error){
      return <div>error: {error}</div>;
    }
    if(loading){
      return <div>Loading...{loading}</div>;
    }
    return (
        <div className='column'>
          <h1 className='title has-text-white'>Recommended for you</h1>
          <div className="columns is-multiline">
              {filteredData!.map((item, index) => {
                    return (
                      <div key={index} className="column is-6-mobile is-4-tablet is-3-desktop is-relative">
                        <img className ="image" src={imaUrl+item.thumbnail.regular.small} />
                        <div className='is-overlay has-text-centered'>
                          <button className="button is-rounded">
                            <img src={item.isBookmarked ? bookMarkOn : bookMarKOff } />
                          </button>
                        </div>
                            <p>{item.year}</p>
                            <p>{item.category}</p>
                            <p>{item.rating}</p>
                          
                        
                        <div className="item-text">
                          <div className="title">{item.title}</div>
                        </div>
                      </div> 
                    )
                })}
            </div>
        </div>
   
    );
}
