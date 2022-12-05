import Loading from "../component/Loading";
import useFetch from "../util/useFetch";

const Home = () => {
    const [profile, isPending, error] = useFetch(`http://localhost:3001/profile`);
    return (
        <div >
            {isPending && <Loading/>}
            {profile && <div className='home-main'>
                <div>
                    <img src='images.jpg' alt='프로필사진' className='home-profile-img'/>
                </div>
                <div className='home-profile-text'>
                    <div className='home-profile-text-name'>
                        <span >{`${profile[0].name}`}</span>
                    </div>
                    <div className='home-profile-text-detail'>
                        <span>{`${profile[0].body}`}</span>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}
export default Home;