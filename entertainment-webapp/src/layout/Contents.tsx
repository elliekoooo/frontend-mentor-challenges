import { Search } from "../components/Search";
import { Trending } from "../components/Trending";
import { Movies } from "../components/Movies";
import { useSelector } from "react-redux";
import { useState } from "react";



export const Contents = () => {
     const [ category , setCategory ] = useState("all");
    //const category = useSelector((state:any) => state.categoryReducer);

    return (
        <div>
            <div className="my-6">
                <Search></Search>
            </div>
            <div className="my-6">
                {/* <Trending /> */}
                <Movies category = {category}/>
            </div>
        </div>
    )

};


