import React,{useState,useContext, useEffect} from 'react';
import Nav from "./Nav/Nav"
import Posts from "./Posts/Posts"
import { UserContext } from "../../App"
import Story from "./storyData"
import PostsData from "./postData"
// export const userContext = React.createContext(UserContext)

const Home = () => {
    const context = useContext(UserContext)
    useEffect(()=>{
        context.dispatch({type:"post",data:PostsData})
        context.dispatch({type:"story", value:Story})
        console.log("this data",context.state.post)
        // console.log(PostsData)
    },[])
    return (
        <div>
            <Nav />
            {console.log("home post ddata", context.state.post)}
            <Posts />            
        </div>
    );
}

export default React.memo(Home);
