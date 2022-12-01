import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const Write = () => {
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
    const Button = styled.button`
      margin-top: 10px;
      width: 100px;
      height: 30px;
      border-style: none;
      border-radius: 15px;
      background-color: #ff7e5f;
      color: #ffffff;
      font-size: large;
      font-weight: bold;

      &:hover {
        background: #df5e3f;
        color: white;
        transition: 0.3s;
      }
    `
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
        fetch('http://localhost:3001/posts', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data)
        })
            .then(() => {
                alert('저장되었습니다')
                window.location.href = 'http://localhost:3000/';
            })
            .catch((error) => {
                console.error('Error', error);
            })
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
export default Write;