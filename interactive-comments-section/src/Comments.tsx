import data from '../public/assets/data.json';

type user = {
    image: {
        "png": string;
        "webp": string;
    };
    username: string;
}

type comment = {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    user: user;
    replies?: comment[];
};

export const Comments = () => {
    return (
        <div>
            {
                data.comments.map((c:comment) => {
                    return (
                        <div key={c.id} className="columns is-centered is-vcentered">
                            <div className="column is-9">
                                <div className="box is-flex">
                                    <div className="mr-4">
                                        <div className="is-flex is-flex-direction-column">
                                            <div> + </div>
                                            <div>{c.score}</div>
                                            <div> - </div> 
                                        </div>
                                    </div>
                                    <div>
                                        <div className="is-flex my-auto">
                                            <div>
                                                <figure className="image is-32x32">
                                                    <img src={c.user.image.png} alt={c.user.username}></img>
                                                </figure>
                                            </div>
                                            <div className="mx-4 has-text-weight-bold">
                                                {c.user.username}      
                                            </div>
                                            <div className="has-text-grey">
                                                {c.createdAt}
                                            </div>
                                        </div>
                                        <div className="my-3 has-text-grey">
                                            {c.content}
                                        </div>                                  
                                    </div>
                                </div>
                                { 
                                    c.replies?.map((r:comment) =>(
                                        <div className="box ml-6">
                                            {r.content}
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    );
                })

            }
        </div>
    )
};