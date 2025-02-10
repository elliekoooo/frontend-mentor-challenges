import data from '../public/assets/data.json';
import { Layout, comment } from './Layout';


export const Comments = () => {
    return (
        <div className="mx-auto my-auto">
            {
                data.comments.map((c:comment) => {
                    return (
                        <div>      
                            <Layout prop={c} type="comment"></Layout>
                            { 
                                c.replies?.map((r:comment) =>(
                                    <Layout prop={r} type="reply"></Layout>
                                )) 
                            }
                        </div>
                    );
                })
            }
            <Layout prop={data.currentUser} type="write"></Layout>
        </div>
    )
};