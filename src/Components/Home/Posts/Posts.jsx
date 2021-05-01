import React,{useContext} from 'react';
import { UserContext } from "../../../App"
import PostsBody from "./PostsBody"

const Posts = () => {
    const context = useContext(UserContext)
    const Arr = context.state.post.map((item)=>
        <PostsBody
            userimage={item.profileimage}
            image={item.image}
            about={item.about}
            like={item.like} 
            liked={item.liked}
            username={item.username}
            saved={item.saved}
            >    
            {console.log("mapped Username",item.username)}</PostsBody>
    )
    return (
        <div>
            {Arr}
        </div>
    );
}

export default React.memo(Posts);
