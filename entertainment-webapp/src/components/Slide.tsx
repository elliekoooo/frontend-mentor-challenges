import { useEffect, useState, useRef } from "react"


export const Slide = (props : any) => {


  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const totalImages =  props.children.length; //슬라이스 갯수

  const updateCarousel = () => {
    const width = ref.current ? ref.current.offsetWidth : 0;  // 슬라이드의 전체 너비
    const offset = -currentIndex * width;  // 현재 인덱스를 기준으로 이동할 거리 계산
    if (ref.current) {
      ref.current.style.transform = `translateX(${offset}px)`;
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => 
        (prevIndex + 1) % totalImages); //슬라이드가 처음으로 돌아가도록 만듦
    }, 3000); // 3초마다 슬라이드 변경

    return () => clearInterval(interval); 
  }, []);

  useEffect(() => {
    updateCarousel();
  }, [currentIndex]); 

    return (
        <div className="container is-clipped" >
          <div className="columns is-mobile" ref={ref} style={{ transition: "transform 5s ease" }}>
            {props.children}
          </div>
        </div>
    )

    
}


