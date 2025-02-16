import { useDispatch, useSelector } from "react-redux";
import Buttons from "./Button";
import { active, edit } from "../store";
import { useEffect, useState } from "react";
import { comment } from "../store/types";


export const Editor = ({ type, prop }:any) => {
    const dispatch = useDispatch();

    const data = useSelector((state: any)=> state.data);
    const user = useSelector((state:any)=> state.user);
    const button = useSelector((state:any)=> state.button);

    const [newValue, setNewValue] = useState(type == "edit" ? prop.content : "");

    const handleValueChange = (e: any) => {
        setNewValue(e.target.value);
    }

    const click = () => {

        let _data:comment = {
            id: type == 'new' ? data.length + 1 : prop.id,
            content: newValue,
            createdAt: new Date().toDateString(),
            score: 0,
            replyingTo: type == 'new' ? "" : prop.user.username,
            user: {
                image: {
                    png: user.image.png,
                    webp: user.image.webp
                },
                username: user.username
            },
            type: "c"
        };

        dispatch(edit({
            type: type,
            data: _data
        }));

        setNewValue("");
        dispatch(active({
            id: 0,
            type:"",
            active: true
        }));
        
    };

    return (
        <div className="columns is-centered">
            <div className="column is-7-desktop is-8-tablet is-10-mobile">
                <div className="box is-flex">
                    <div className="mr-auto">
                        <figure className="image is-32x32">
                            <img src={user?.image?.png} alt={user?.username}></img>
                        </figure>
                    </div>
                    <div style={{"width":"77%"}}>
                        <textarea 
                                    name="test"
                                    className="textarea" 
                                    onChange={handleValueChange}
                                    key={undefined}
                                    value={newValue}
                                    />
                    </div>
                    <div className="ml-auto">
                        <Buttons color={"moderate-blue"} disabled={false} text={type == "edit" ? "UPDATE":"SEND"} click={click} type={type}></Buttons>
                    </div>
                </div>
            </div>
        </div>
    )
};