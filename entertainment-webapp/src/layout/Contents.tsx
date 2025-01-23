import { useState } from "react";
import { Search } from "../components/Search";
import { Trending } from "../components/Trending";
import { Movies } from "../components/Movies";



export const Contents = () => {
    const [ category , setCategory ] = useState("all");

    return (
        <div className="mx-6">
            <div className="my-6">
                <Search></Search>
            </div>
            <div className="my-6">
                <Trending />
                <Movies category = {category}/>
            </div>
        </div>
    )

};


