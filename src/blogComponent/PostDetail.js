import {useParams} from "react-router-dom";
import Loading from "../component/Loading";
import {Button} from "../util/buttonStyled"
import useFetch from "../util/useFetch";
import {fetchDelete} from "../util/api";

const PostDetail = () => {
    const {id} = useParams();
    const [posts, isPending, error] = useFetch(`http://localhost:3001/posts/${id}`);
    const onClickButton =(e)=>{
        e.preventDefault();
        fetchDelete('http://localhost:3001/posts/',id)
    }

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
                <div className='post-btn'>
                    <Button onClick={onClickButton}>삭제</Button>
                </div>
            </div>}
        </div>
    )
}
export default PostDetail;