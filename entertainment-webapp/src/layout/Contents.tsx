
import { Search } from "../components/Search";
import { Trending } from "../components/Trending";

export const Contents = () => {

    return (
        <div className="mx-6">
            <div className="my-6">
                <Search></Search>
            </div>
            <div  className="my-6">
                 <Trending />
            </div>
        </div>
    )

};


