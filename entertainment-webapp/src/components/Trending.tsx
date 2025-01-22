import { useState, useEffect } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

export const Trending = () => {

  const [data , setData ] = useState<MovieSeries[]>([]);
  const [loading, setLoading ] = useState<boolean>(true);
  const [ error , setError ] = useState<string>();

  const settings = {
    arrows: false, // 화살표 표시 여부
    autoplay: false, // 자동 재생 설정
    dots: false, // 페이지네이션을 위한 dots 사용 여부
    infinite: true, // 슬라이드가 무한반복하도록 적용
    speed: 1000, // 슬라이드가 넘어가는 속도(ms)
    slidesToShow: 3, // 한 화면에 몇 개의 슬라이드를 보여줄 것인지
    slidesToScroll: 1, // 한번에 넘어갈 슬라이드의 갯수
  };

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
            <h1 className='title has-text-white'>Trending</h1>
            {/* <Slider {...settings}> */}
            <div className='grid is-inline-flex'>

            
            {data.slice(0, 5).map((item, index) => {
                return (
                    <div key={index} className="cell">
                      <img className ="image" src={imaUrl+item.thumbnail.regular.medium} />
                      <div className='bookmark'>
                        <p> {item.isBookmarked ? 'on' : 'off'}</p>
                      </div>
                      <div className="item-text">
                        <div className="title-sub">
                          <p>{item.year}</p>
                          <p>{item.category}</p>
                          <p>{item.rating}</p>
                        </div>
                        <div className="title">{item.title}</div>
                      </div>
                    </div> 
                  )
              })}
           {/* </Slider> */}
           </div>
        </div>
   
    );
}
