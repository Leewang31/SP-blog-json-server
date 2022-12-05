import Loading from "../component/Loading"
import {Link} from "react-router-dom";
import useScrollTop from "../util/useScrollTop";

const Post = ({posts, isPending}) => {
    useScrollTop();
    return (
        <div className="post">
            {isPending && <Loading/>}
            {posts && <div className='post-list'>
                {posts.map((post) => (
                    <div className="post-preview" key={post.id}>
                        <Link to={`/post/${post.id}`}>
                            <div className='post-content'>
                                <span>{`${post.id}) `}</span>
                                <span>{post.title}</span>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>}
        </div>
    )
}
export default Post;