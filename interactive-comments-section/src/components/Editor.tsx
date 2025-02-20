import { useDispatch, useSelector } from "react-redux";
import Buttons from "./Button";
import { active, add, edit } from "../store";
import { useState } from "react";
import { comment } from "../store/types";


export const Editor = ({ type, prop }:any) => {
    const dispatch = useDispatch();

    const data = useSelector((state: any)=> state.data);
    const user = useSelector((state:any)=> state.user);

    const [newValue, setNewValue] = useState(type == "edit" ? prop.content : "");

    const handleValueChange = (e: any) => {
        setNewValue(e.target.value);
    }

    const click = () => {
        let _data: comment = {
            id: 0,
            content: newValue,
            createdAt: new Date().toDateString(),
            score: 0,
            user: {
                image: {
                    png: user.image.png,
                    webp: user.image.webp
                },
                username: user.username
            },
            cid: 0,
            type: "c"
        };
        
        if(type == 'new'){  
            _data.id = data.length + 1;
            _data.cid = data.length + 1;
            dispatch(add(_data));

        }else if(type == 'reply'){
            _data.id = data.length + 1;
            _data.cid = prop.id;
            _data.replyingTo = prop.user.username
            dispatch(add(_data));
        }else if(type == 'edit'){
            _data.id = prop.id;
            _data.type = "u"
            dispatch(edit(_data));
        }

        setNewValue("");
        dispatch(active({id:0, type:"", active: true}));        
    };

    return (
        <div className="columns is-centered">
            <div className="column is-7-desktop is-8-tablet is-12-mobile">
                <div className="box is-flex">
                    <div className="mr-auto">
                        <figure className="image is-32x32">
                            <img src={user?.image?.png} alt={user?.username}></img>
                        </figure>
                    </div>
                    <div style={{"width":"85%"}} className="mx-1 px-1">
                        <textarea 
                                    className="textarea" 
                                    onChange={handleValueChange}
                                    key={undefined}
                                    value={newValue}
                                    placeholder={"Add a comment..."}
                                    />
                    </div>
                    <div className="ml-auto">
                        <Buttons color={"moderate-blue"} disabled={newValue == ""} text={type == "edit" ? "UPDATE":"SEND"} click={click} type={""}></Buttons>
                    </div>
                </div>
            </div>
        </div>
    )
};