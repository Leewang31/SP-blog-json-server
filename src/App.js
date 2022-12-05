import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {lazy, Suspense} from "react";
import Footer from './component/Footer'
import Header from './component/Header'
import Navbar from './component/Navbar'
import {useEffect, useState} from "react";
import useFetch from "./util/useFetch";

const Post = lazy(() => import ('./blogComponent/Post'));
const PostDetail = lazy(() => import ('./blogComponent/PostDetail'));
const Home = lazy(() => import ('./blogComponent/Home'));
const Setting = lazy(() => import ('./blogComponent/Setting'));
const Write = lazy(() => import ('./blogComponent/Write'));
const Loading = lazy(() => import('./component/Loading'));


function App() {
    const [posts, isPending, error] = useFetch("http://localhost:3001/posts");

    return (
        <BrowserRouter>
            { error && <div>{ error }</div> }
            <div id='wrapper'>
                <Header/>
                <Navbar/>
                <div className="windowArea">
                    <Suspense fallback={<Loading/>}>
                        <Routes >
                            <Route path="/" element={<Home/>}/>
                            <Route path="/post" element={<Post posts={posts} isPending={isPending}/>}/>
                            <Route path="/post/:id" element={<PostDetail/>}/>
                            <Route path="/write" element={<Write/>}/>
                            <Route path="/setting" element={<Setting/>}/>
                        </Routes>
                    </Suspense>
                </div>
            <Footer/>
            </div>
        </BrowserRouter>
    )
        ;
}

export default App;