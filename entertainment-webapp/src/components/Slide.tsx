import { useEffect, useState, useRef } from "react"

export const Slide = (props : any) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [slideWidth, setSlideWidth] = useState(0); 
  const ref = useRef<HTMLDivElement>(null);
  const totalCount =  props.children.length; //슬라이스 갯수
  
  
  useEffect(()=> {
    const columnWidth = (ref.current?.querySelector('.column')as HTMLElement);
    if(columnWidth){
      const slideWidth = (columnWidth.offsetWidth);
     
      if(ref.current){
        setSlideWidth(slideWidth);
      }
      
    }
  }, []);

  useEffect(()=> {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevSlide => {
        if(prevSlide < Math.floor(totalCount/2)){
          return prevSlide+1;
        }else{
          return prevSlide;
        }
      }
    )
    }, 1000);

    return () => clearInterval(intervalId);
   
  },[totalCount]);

  return (
    <div className="is-max-widescreen is-clipped m-0 p-0">
      <div  className="columns is-mobile" 
            ref={ref}
            style={ {
              display: 'flex',
              transition: 'transform 3s linear', // 슬라이드 전환 애니메이션
              transform: `translateX(-${currentIndex * slideWidth}px)`
            }}  
      >
        {props.children}
      </div>
    </div>
  )
}