import { useSelector } from 'react-redux';
import { comment } from '../store/types';
import { Editor } from '../components/Editor';
import { Comment } from '../components/Comment';


export const List = () => {
    const _data = useSelector((state:any)=>state.data);
    const button = useSelector((state:any)=>state.button)

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

                                        <Comment prop={c} type={c.type}></Comment>
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


                            {/* {
                                c.replies?.map((r:comment) =>{
                                    return (
                                        <>         
                                            {
                                                button.type == "edit" && r.id == button.id ?
                                                    
                                                    <Editor type={"edit"} prop={r}></Editor>
                                                :
            
                                                    <Comment prop={r} type="reply"></Comment>
                                                    
                                            }
                                            {
                                            
                                                button.type == "reply" && button.active && r.id == button.id?
                                                    <Editor type={"reply"} prop={r}></Editor>
                                                :
                                                    <></>

                                            
                                            }
                                        </>
                                    )
                                })
                            } */}
                        </div>
                    );
                })
            }
            <Editor type={"new"}></Editor>
        </div>
    )

};