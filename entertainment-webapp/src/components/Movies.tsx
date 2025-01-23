import { useState, useEffect } from 'react';
import classes from './Movies.modules.css';
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
  title: string;
  thumbnail: Thumbnail;
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

export const Movies = () => {

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

    
    if(error){
      return <div>error: {error}</div>;
    }
    if(loading){
      return <div>Loading...{loading}</div>;
    }
    return (
        <div className='section'>
            <h1 className='title has-text-white'>Recommended for you</h1>
          
              <div className='columns has-4-cols'>
                {data.map((item, index) => {
                    return (
                        <div key={index} className="image is-relative">
                          <img className ="image is-relative" src={imaUrl+item.thumbnail.regular.small} />
                          <div className="is-overlay has-text-success has-text-centered">
                            <div className='bookmark'>
                              <p> {item.isBookmarked ? 'on' : 'off'}</p>
                            </div>

                              <p>{item.year}</p>
                              <p>{item.category}</p>
                              <p>{item.rating}</p>
                            </div>
                          
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
