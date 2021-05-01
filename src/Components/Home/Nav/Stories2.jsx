import React , {useContext, useEffect, useState } from "react"
import { UserContext } from "../../../App"
import CloseIcon from "@material-ui/icons/Close"

const StoryView = (props) =>{
    const context = useContext(UserContext)
        return(
        <div style={{display:props.open}} className="storyview">
            <CloseIcon 
                onClick={()=> 
                    props.close(false)} 
                style={{color:"white",
                    position:"fixed",
                    right:"0",
                    fontSize:"30px", 
                    zIndex:"100",
                    boxShadow:"-0.5px -1px  black",
                    margin:"1em"}}/>
            <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e" 
                className="storyimage" alt="none" />
        </div>
    )
}
export default React.memo(StoryView);