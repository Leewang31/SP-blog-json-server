import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {lazy, Suspense} from "react";
import Footer from './component/Footer'
import Header from './component/Header'
import Navbar from './component/Navbar'
import {useEffect, useState} from "react";

const Post = lazy(() => import ('./blogComponent/Post'));
const PostDetail = lazy(() => import ('./blogComponent/PostDetail'));
const Home = lazy(() => import ('./blogComponent/Home'));
const Profile = lazy(() => import ('./blogComponent/Profile'));
const Write = lazy(() => import ('./blogComponent/Write'));
const Loading = lazy(() => import('./component/Loading'));


function App() {
    const [posts, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        //실수로 시작되거나 더 이상 필요 없는 비동기 작업에 대해 중단할 방법을 제공
        //fetch도 비동기 요청이기 때문에, 이 비동기 작업의 중단을 위해 사용
        const abortCont = new AbortController();

        setTimeout(() => {
            //요청과 통신하거나 중단하는 데에 사용하는 신호 역할
            fetch("http://localhost:3001/posts", {signal: abortCont.signal})
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
        <BrowserRouter>
            <div id='wrapper'>
                <Header/>
                <Navbar/>
                <div className="windowArea">
                    <Suspense fallback={<Loading/>}>
                        <Routes>
                            <Route path="/" element={<Home posts={posts}/>}/>
                            <Route path="/post" element={<Post posts={posts} isPending={isPending}/>}/>
                            <Route path="/post/:id" element={<PostDetail/>}/>
                            <Route path="/write/:id" element={<Write/>}/>
                            <Route path="/profile" element={<Profile/>}/>
                        </Routes>
                    </Suspense>
                </div>
            </div>
            <Footer/>
        </BrowserRouter>
    )
        ;
}

export default App;