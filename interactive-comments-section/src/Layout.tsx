
import plus from '/assets/images/icon-plus.svg';
import minus from '/assets/images/icon-minus.svg';
import reply from '/assets/images/icon-reply.svg';
import del from '/assets/images/icon-delete.svg';

export type user = {
    image: {
        "png": string;
        "webp": string;
    };
    username: string;
}

export type comment = {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    user: user;
    replies?: comment[];
};


export const Layout:any = ({ prop, type }: any) => {
    switch(type){
        case "comment": case "reply": 
            return (
                <div key={prop.id} className="columns is-centered">
                    <div className="column is-5-desktop is-9-touch">
                        <div className={"box is-flex "+(type=="reply" ? "ml-6": "")}>
                            <div className="button is-flex is-flex-direction-column mr-4 mb-auto size is-link is-light">
                                <div><img src={plus}></img></div> 
                                {/* FIXME 조회수 4자리로 늘어날때 어떻게 할지 고민해보기 */}
                                <div className="pt-1">{prop.score}</div>
                                <div><img src={minus}></img></div>
                            </div>
                            <div>
                                <div className="is-flex">
                                    <div>
                                        <figure className="image is-32x32">
                                            <img src={prop.user.image.png} alt={prop.user.username}></img>
                                        </figure>
                                    </div>
                                    <div className="mx-4 has-text-weight-bold">
                                        {prop.user.username}      
                                    </div>
                                    <div className="has-text-grey">
                                        {prop.createdAt}
                                    </div>
                                    <div className="ml-auto">
                                        <img src={ prop?.currentUser == prop.user.username ? del : reply}></img>
                                    </div>
                                </div>
                                <div className="has-text-grey">
                                    {type == "reply" ? "@"+prop.replyingTo : ""}
                                    {prop.content}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        case "write": 
            return (
                <div key={prop.id} className="columns is-centered">
                    <div className="column is-5-desktop is-9-touch">
                        <div className="box is-flex">
                            <div className="mr-auto">
                                <figure className="image is-32x32">
                                    <img src={prop.image.png} alt={prop.username}></img>
                                </figure>
                            </div>
                            <div style={{"width":"80%"}}>
                                <textarea className="textarea"></textarea>
                            </div>
                            <div className="ml-auto">
                                <button className="button is-link mb-auto">SEND</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
            
    } 
};