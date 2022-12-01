import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Loading from "../component/Loading";


const PostDetail = () => {
    const {id} = useParams();

    const [posts, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimeout(() => {
            //요청과 통신하거나 중단하는 데에 사용하는 신호 역할
            fetch(`http://localhost:3001/posts/${id}`, {signal: abortCont.signal})
                .then(res => {
                    if (!res.ok) {
                        // error coming back from server
                        throw Error('could not fetch the data for that resource');
                    }
                    return res.json();
                })
                .then(data => {
                    setIsPending(false);
                    setData(data);
                    setError(null);
                })
                .catch(err => {
                    setIsPending(false);
                    setError(err.message);
                })
        }, 1000);

        // abort the fetch. 완료되기 전에 DOM 요청 중단
        return () => abortCont.abort();
    }, [])
    return (
        <div className="postDetail">
            {isPending && <Loading/>}
            {error && <div>{error}</div>}
            {posts && <div className='postDetail-content'>
                <div className='postDetail-content-title'>
                    <span>{posts.title}</span>
                </div>
                <div className='postDetail-content-body'>
                    <span>{posts.body}</span>
                    </div>
            </div>}
        </div>
    )
}
export default PostDetail;