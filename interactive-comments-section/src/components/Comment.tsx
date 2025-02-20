import { useSelector } from 'react-redux';
import { ButtonGroup } from './ButtonGroup';
import { ScoreBox } from './ScoreBox';

export const Comment = ({ prop }:any) => {
    const currentUser = useSelector((state:any)=>state.user);    
    const isCurrentUser = currentUser.username == prop.user.username;

    return (
        <div className={(prop.cid != prop.id ? "": "")}>
            <div key={prop.id} className="columns is-centered">
                <div className={"column is-7-desktop is-8-tablet is-12-mobile "+(prop.cid != prop.id ? "line": "")}>
                    <div className={"box "+(prop.cid != prop.id ? "ml-2 mr-5": "")}>
                        <div className="is-flex">
                            <div className="is-hidden-mobile">
                                <ScoreBox prop={prop}></ScoreBox>
                            </div>
                            <div className="w-100">
                                <div className="is-flex">
                                    <div className="image is-32x32 my-auto">
                                        <img src={prop.user.image.png} alt={prop.user.username}></img>
                                    </div>
                                    <div className="mx-4 has-text-weight-bold my-auto">
                                        {prop.user.username} 
                                        <span className={isCurrentUser? "ml-2 tag is-size-7 moderate-blue has-text-white":"is-hidden"}>you</span>
                                    </div>
                                    <div className="has-text-grey my-auto">
                                        {prop.createdAt}
                                    </div>
                                    <div className={"ml-auto is-hidden-mobile"+(prop.type == "d" ? " is-hidden":"")}>
                                        <ButtonGroup props={{isCurrentUser: isCurrentUser, id: prop.id}}></ButtonGroup>
                                    </div>
                                </div>
                                <div className="pt-3">
                                    <span className="has-text-link has-text-weight-bold">
                                        {prop.replyingTo ? "@"+prop.replyingTo : ""}
                                    </span>
                                    <span className="has-text-grey"> {prop.content} </span>
                                </div>
                            </div>
                        </div>
                        <div className={"is-flex is-justify-content-space-between is-hidden-tablet is-hidden-desktop pt-5"}>   
                            <ScoreBox prop={prop} ></ScoreBox>
                            <span className={(prop.type == "d" ? " is-hidden":"")}>
                                <ButtonGroup props={{isCurrentUser: isCurrentUser, id: prop.id}}></ButtonGroup>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};