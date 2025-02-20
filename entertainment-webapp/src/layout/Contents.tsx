import { Search } from "../components/Search";
import { Trending } from "../components/Trending";
import { Movies } from "../components/Movies";
import { useSelector } from "react-redux";

export const Contents = () => {
    const searchWord = useSelector((state:any) => state.searchReducer);
    const currentMenu = useSelector((state:any) => state.menuReducer);

    


    return (
        <div>
            <div className="my-6">
                <Search></Search>
            </div>
            <div className="my-6">
            {
                (currentMenu == 'home' && searchWord.length <= 0) ? <Trending /> : <></> 
            }
                <Movies/>
            </div>
        </div>
    )

};


