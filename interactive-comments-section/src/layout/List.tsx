import { useDispatch, useSelector } from 'react-redux';
import { comment } from '../store/types';
import { Editor } from '../components/Editor';
import { Comment } from '../components/Comment';
import { clear, sort } from '../store';
import { useEffect, useState } from 'react';
import Modal from '../components/Modal';


export const List = () => {
    const _data = useSelector((state:any)=>state.data);
    const button = useSelector((state:any)=>state.button);
    
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(clear());
    }

    useEffect(()=> {
        dispatch(sort(_data));
    }, [_data]);

    return (
        <div className="mx-auto my-auto py-6">
            {
                _data.map((c:comment) => {
                    return (
                        <div key={c.id} className="">
                            
                            {
                                (
                                    button.type == "edit" && c.id == button.id ?
                                        
                                        <Editor type={"edit"} prop={c}></Editor>
                                    :

                                        <Comment prop={c}></Comment>
                                )
                                
                            }

                            {
                                (
                                    button.type == "reply" && button.active && c.id == button.id ?
                                        <Editor type={"reply"} prop={c}></Editor>
                                    :
                                        <></>

                                )
                            }
                        </div>
                    );
                })
            }
            <Editor type={"new"}></Editor>
            <Modal open={button.type == "delete"} close={closeModal} prop={button.id}></Modal>
        </div>
    )

};