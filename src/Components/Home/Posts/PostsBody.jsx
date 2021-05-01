import Typography 
    from '@material-ui/core/Typography';
import React from 'react';
import CommentIcon from "@material-ui/icons/Comment"
import MoreVertIcon 
    from "@material-ui/icons/MoreVert";
import BookmarkBorder 
    from '@material-ui/icons/BookmarkBorder';
import Bookmark
    from '@material-ui/icons/Bookmark';
import 
    Favorite 
    from '@material-ui/icons/Favorite';
import 
    FavoriteBorder 
    from '@material-ui/icons/FavoriteBorder';


const PostsBody = (props) => {
    const Book = props.saved ? <Bookmark  /> : <BookmarkBorder />
    const Fav = props.liked ? <Favorite /> : <FavoriteBorder />
    return (
        <div style={{marginBottom:"3em"}}>
        <div className="post">
            <header>
                <div class="flex">
                    <div style={{borderRadius:"50%", height:"35px",marginRight:"0.5em", marginLeft:"-1em", width:"35px", border:"0.2px solid black"}}>
                        <img src={props.userimage} style={{width:"35px",height:"35px", borderRadius:"50%"}}/>
                    </div>
                    <Typography variant="h6">{props.username}</Typography>
                </div>
                <MoreVertIcon style={{marginRight:"20px"}}/>
            </header>
            <div style={{width:"97vw",overflow:"hideen"}}>
                <img src={props.image}  alt="naone" 
                    style={{width:"100vw",
                        maxWidth:"550px",height:"auto",
                        minHeight:"400px", }}/>

            </div>
            <div className="flex" style={{marginBottom:"4em",justifyContent:"space-between",margin:"5px 1em 5px 1em"}}>
                <div className="flex">
                    {Fav}
                    <CommentIcon style={{marginLeft:"10px"}} />
                </div>         
                {Book}       
            </div>
        </div>
        </div>
    );
}

export default PostsBody;
