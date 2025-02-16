import { useSelector } from 'react-redux';
import { ButtonGroup } from './ButtonGroup';
import { ScoreBox } from './ScoreBox';

export const Comment = ({ prop, type }:any) => {
    const currentUser = useSelector((state:any)=>state.user);
    const isCurrentUser = currentUser.username == prop.user.username;
    
    return (
        <div key={prop.id} className="columns is-centered">
            <div className="column is-7-desktop is-8-tablet is-10-mobile">
                <div className={"box "+(type=="r" ? "ml-6": "")}>
                    <div className="is-flex">
                        <div className="is-hidden-mobile">
                            <ScoreBox score={prop.score}></ScoreBox>
                        </div>
                        <div>
                            <div className="is-flex">
                                <div className="image is-32x32 my-auto">
                                    <img src={prop.user.image.png} alt={prop.user.username}></img>
                                </div>
                                <div className="mx-4 has-text-weight-bold my-auto">
                                    {prop.user.username}      
                                </div>
                                <div className="has-text-grey my-auto">
                                    {prop.createdAt}
                                </div>
                                <div className="my-auto ml-auto is-hidden-mobile">
                                    <ButtonGroup props={{isCurrentUser: isCurrentUser, id: prop.id}}></ButtonGroup>
                                </div>
                            </div>
                            <div className="pt-3">
                                <span className="has-text-link has-text-weight-bold">{type == "reply" ? "@"+prop.replyingTo : ""}</span>
                                <span className="has-text-grey"> {prop.content}</span>
                            </div>
                            <div className="is-flex is-justify-content-space-between is-hidden-tablet is-hidden-desktop pt-5">   
                                <ScoreBox score={prop.score}></ScoreBox>
                                <div className={"is-flex my-auto"}>
                                    <ButtonGroup props={{isCurrentUser: isCurrentUser, id: prop.id}}></ButtonGroup>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};