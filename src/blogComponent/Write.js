import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const Write = () => {
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

    const clickCancel = () =>{
        navigate(-1);
    }

    return(
        <div>
            <input type='text' className='write-title' placeholder='제목을 입력해주세요.'/>
            <textarea className='write-body' placeholder='내용을 입력해주세요.'/>
            <div className='write-button-div'>
            <Button onClick={clickCancel}>취소</Button>
            <Button>저장</Button>
            </div>
        </div>
    )
}
export default Write;