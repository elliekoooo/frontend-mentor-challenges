
import { Search } from "../components/Search";
import { Trending } from "../components/Trending";
import { Movies } from "../components/Movies";
export const Contents = () => {

    return (
        <div>
            <div className="my-6">
                <Search></Search>
            </div>
            <div  className="my-6">
                 <Trending />
                <Movies />
            </div>
        </div>
    )

};


