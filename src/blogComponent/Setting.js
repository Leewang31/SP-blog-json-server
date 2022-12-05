import useFetch from "../util/useFetch";
import Loading from "../component/Loading";
import { useState} from "react";
import styled from "styled-components";

const Setting = () => {
    const [profile, isPending, error] = useFetch(`http://localhost:3001/profile`);
    const DivHover = styled.div`
      border-radius: 100%;
      display: flex;
      justify-content:center;
      align-items : center;
      >.setting-profile-hover-img{
        display: none;
      }
      :hover{
        background-color: black;
        >.setting-profile-hover-img{
          display: block;
        }
      }
    `

    return (
        <div >
            {isPending && <Loading/>}
            {profile && <div className='setting-main'>
                <DivHover className='setting-profile-hover'>
                    <img src='profile-edit.svg' alt='아이콘' className='setting-profile-hover-img'/>
                    <img src='images.jpg' alt='프로필사진' className='setting-profile-img'/>
                </DivHover>
                <div className='setting-profile-text' >
                    <div className='setting-profile-text-name'>
                        <span >{`${profile[0].name}`}</span>
                    </div>
                    <div className='setting-profile-text-detail'>
                        <span>{`${profile[0].body}`}</span>
                    </div>
                </div>
            </div>
            }
        </div>
    )}
export default Setting;