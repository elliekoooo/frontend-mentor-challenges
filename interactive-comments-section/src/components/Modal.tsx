import { useDispatch } from "react-redux";
import Button from "./Button";
import { del } from "../store";

const Modal = ({ open, close, prop }: any) => {
    const dispatch = useDispatch();

    const handleModalClose = () => {
        close();
    }

    const deleteComment = () => {
        dispatch(del(prop));
        close();
    };
    
    if(!open) return null;
    return (
        <div className={open ? "modal modal-sm is-active is-clipped":""}>
            <div className="modal-background"></div>
            <div className="modal-card modal-content-width">
                <div className="modal-card-body has-background-white">
                    <p className="has-text-weight-bold is-size-5">Delete Comment</p>
                    <div className="my-5">
                        <p className="has-text-grey">
                            Are you sure you want to delete this comment? 
                            This will remove the comment and can't be undone.
                        </p>
                    </div>
                    <div className="is-flex is-justify-content-space-between">
                        <Button color={"is-light"} type={""} text={"NO, CANCLE"} click={()=>handleModalClose()} ></Button>
                        <Button color={"is-danger"} type={""} text={"YES, DELETE"} click={()=>deleteComment()}></Button>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Modal;