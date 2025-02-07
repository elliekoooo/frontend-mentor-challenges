import { useState, useEffect } from 'react';
import bookMarKOff from '../assets/icon-bookmark-empty.svg';
import bookMarkOn from '../assets/icon-bookmark-full.svg';
import { useSelector, useDispatch } from 'react-redux';
import { setItems, change } from '../store/index';
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

export interface Category {
  category : string;
}

export const Movies = () => {

  const [ data , setData ] = useState<MovieSeries[]>([]);
  const [filterData, setFilterData] = useState<MovieSeries[]>([]);
  const [ loading , setLoading ] = useState<boolean>(true);
  const [ error , setError ] = useState<string>();

  const dispatch = useDispatch();
  const currentMenu = useSelector((state:any) => state.menuReducer);
  const searchWord = useSelector((state:any) => state.searchReducer);
  const currentItems = useSelector((state : any) => state.itemReducer);

    useEffect( () => {
       fetch('http://localhost:5173/src/assets/data.json')
      .then((response) => {
        if(!response.ok) {
          throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
        }
        return response.json();
      } )
      .then((data) => {
        let updatedData : MovieSeries[] = [];
         updatedData = data.map((item: MovieSeries, index: number) => ({
          ...item,
          id: index + Math.random(),
        }));

        dispatch(setItems(updatedData));
        setData(updatedData);
        setFilterData(updatedData);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(true);
      });
    }, []);// 빈 배열을 넣어 컴포넌트 마운트 시 한 번만 실행

    //side bar 선택에 따라서 데이터 뿌려주기
    useEffect(() => {
        const _data = data;
        if(currentMenu == "bookmark"){
          setFilterData(_data.filter((item:MovieSeries)=> item.isBookmarked));
        }else if(currentMenu == "home"){
          setFilterData(_data);
        }else{
          const filteredData : MovieSeries[] = _data.filter((item: MovieSeries) => (currentMenu == item.category?.toLowerCase().replace(/(\s*)/g, "")));
          setFilterData(filteredData);
        }
    }, [currentMenu]);

    //검색어에 의해 데이터 뿌려주기
    useEffect(() => {
        const _data = data;
        setFilterData(_data.filter((item: MovieSeries)=> (item.title.toLowerCase()).indexOf(searchWord.toLowerCase()) > -1));
    }, [searchWord]);
    

   const handleToggleBookmark = (id : string) => {
      dispatch(change(id)) ;
    // const updateBookmark = data.map((item : MovieSeries) =>
    //   item.id == id ? { ...item, isBookmarked: !item.isBookmarked } : item
    // );
    // setData(updateBookmark);
   }

    if(error){
      return <div>error: {error}</div>;
    }
    if(loading){
      return <div>Loading...{loading}</div>;
    }

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
          <div className="has-text-white is-size-4">{searchWord.length == 0 ? "" : "Found "+ (filterData.length) +" results for "+ searchWord}</div>
          <h1 className='title has-text-white'>
            { title }
          </h1>
          <div className="columns pt-0 is-multiline is-mobile is-2">
              {filterData!.map((item : MovieSeries) => {
                return (
                  <div key={item.id} className="column is-6-mobile is-4-tablet is-3-desktop is-relative">
                    <div>
                      <img className ="image is-radiusless m-1" src={'http://localhost:5173/src/'+item.thumbnail.regular.small} />
                      <div className='has-text-right is-overlay'>
                        <button className='mt-5 mr-4 is-rounded has-background-dark' type="button" onClick={()=>{ handleToggleBookmark(item.id)}}>
                          <img className="image is-11x11" src={item.isBookmarked ? bookMarkOn : bookMarKOff } />
                        </button>
                      </div>
                    </div>
                    <div className="columns is-0 mt-1 mb-0 has-text-white">
                        <div className="column is-2">{item.year}</div>
                        <div className="column is-4 has-text-centered"> <img src={item.category == 'Movie' ? movie : tv}/> {item.category}</div>
                        <div className="column is-1">{item.rating}</div>
                    </div>
                    <div className="title is-size-4 has-text-weight-medium has-text-white">{item.title}</div>
                  </div> 
                )
              })}
          </div>
        </>
   
    );
}
