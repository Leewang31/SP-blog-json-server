import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {Button} from "../util/buttonStyled"
import {fetchPost} from "../util/api";

const PostEdit = () =>{
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")

    const navigate = useNavigate();

    const clickCancel = () => {
        navigate(-1);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            "title":title,
            "body":body,
            "likes":0,
        }
        fetchPost('http://localhost:3001/posts',data)
    }
    return (
        <div>
            <form>
                <input type='text' className='write-title' placeholder='제목을 입력해주세요.'
                       onChange={(e) => { setTitle(e.target.value) }}/>
                <textarea className='write-body' placeholder='내용을 입력해주세요.'
                          onChange={(e) => { setBody(e.target.value) }}/>
                <div className='write-button-div'>
                    <Button onClick={clickCancel}>취소</Button>
                    <Button onClick={handleSubmit} >저장</Button>
                </div>
            </form>
        </div>
    )
}

export default PostEdit;