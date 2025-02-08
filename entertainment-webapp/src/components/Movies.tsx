import { useState, useEffect } from 'react';
import bookMarKOff from '../assets/icon-bookmark-empty.svg';
import bookMarkOn from '../assets/icon-bookmark-full.svg';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../store/index';
import movie from '../assets/icon-category-movie.svg'
import tv from '../assets/icon-category-tv.svg'


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

export const Movies = () => {
  const currentMenu = useSelector((state:any) => state.menuReducer);
  const searchWord = useSelector((state:any) => state.searchReducer);
  const data = useSelector((state:any) => state.itemsReducer);

  const [filteredData,setData] = useState<MovieSeries[]>(data);

  const dispatch = useDispatch();


  let url = "http://localhost:5173/src/";

  //side bar 선택에 따라서 데이터 뿌려주기
  useEffect(() => {
      const _data = data;

      if(currentMenu == "bookmark"){
        setData(_data.filter((item:MovieSeries)=> item.isBookmarked));
      }else if(currentMenu == "home"){
        setData(_data);
      }else{
        const filteredData : MovieSeries[] = _data.filter((item: MovieSeries) => (currentMenu == item.category?.toLowerCase().replace(/(\s*)/g, "")));
        setData(filteredData);
      }
  }, [currentMenu, data]);

  //검색어에 의해 데이터 뿌려주기
  useEffect(() => {
      const _data = data;
      setData(_data.filter((item: MovieSeries)=> (item.title.toLowerCase()).indexOf(searchWord.toLowerCase()) > -1));
  }, [searchWord]);

    

  let title;
  switch(currentMenu){
    case "home":
      title = "Recommended for you";
      break;
    case "movie":
      title = "Movies";
      break;
    case "tvseries":
      title = "TV Series";
      break;
    case "bookmark":
      title = "Bookmarked Movies";
      break;
  }

  return (
      <>
        <div className="has-text-white outfit-h-l">{searchWord.length == 0 ? "" : "Found "+ (filteredData.length) +" results for "+ searchWord}</div>
        <h1 className='has-text-white outfit-h-l my-2'>
          { searchWord.length == 0 ? title : ""}
        </h1>
        <div className="columns pt-0 is-multiline is-mobile is-2">
            {filteredData?.map((item : MovieSeries) => {
              return (
                <div 
                  key={item.id} 
                  className="column is-6-mobile is-4-tablet is-3-desktop is-relative">
                  <img className ="image" src={url+item.thumbnail.regular.small} />
                  <div className='is-overlay has-text-right py-3 px-3'>
                    <button 
                      className="button is-dark is-rounded"
                      onClick={() =>  dispatch(toggle(item))}
                    >
                      <img src={item.isBookmarked ? bookMarkOn : bookMarKOff } />
                    </button>
                  </div>
                  <div className="has-text-white my-1">
                    <span className="mr-1 outfit-b-s">{item.year} ·</span>
                    <span className="mr-1">
                      <span className="mr-1 outfit-b-s">
                        <img src={item.category.toLowerCase() == "movie" ? movie : tv}></img>
                      </span>
                      <span className="outfit-b-s">{item.category} ·</span>  
                    </span> 
                    <span className="mr-1 outfit-b-s">{item.rating}</span> 
                  </div>
                  <div className="item-text">
                    <div className="has-text-white outfit-b-l has-text-weight-semibold">{item.title}</div>
                  </div>
                </div> 
              )
            })}
        </div>
      </>
  
  );
}
