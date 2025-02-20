import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { active } from "../store";

export const ButtonGroup = (c:any) => {
    const buttons = useSelector((state:any)=>state.button);
    const dispatch = useDispatch();

    const setEvents = (_props:any) => {
        dispatch(active({
            id: c.props.id,
            type: _props,
            active: !buttons.active
        }));
    };


    return (
        <span className={"is-flex"}>
            <Button hidden={c.props.isCurrentUser} text="Reply" color="" size={7} type={"reply"} click={()=>setEvents("reply")}></Button>
            <Button hidden={!c.props.isCurrentUser} text="Delete" color="" size={7} type={"del"} click={()=>setEvents("delete")}></Button>
            <Button hidden={!c.props.isCurrentUser} text="Edit" color="" size={7} type={"edit"}  click={()=>setEvents("edit")}></Button>   
        </span>

    )
};