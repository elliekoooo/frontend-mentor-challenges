import { PropsWithChildren } from "react";

type card = {
    title?: string;
    subTitle: string;
} & PropsWithChildren;


export const Card = (prop: card) => {

    return (
        <div className="m-8 shadow-xl p-5">
            <h1>{prop.title}</h1>
            <p>{prop.subTitle}</p>
            <div className="">
                { prop.children } 
            </div>
        </div>
    )


}