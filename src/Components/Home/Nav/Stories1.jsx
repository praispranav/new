import React , {useContext, useEffect, useState } from "react"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import AddCircleIcon from "@material-ui/icons/AddCircle"
import StoryView from "./Stories2"
import {UserContext } from "../../../App"


const Stories = () =>{
    const context = useContext(UserContext)
    const [ IsModelOpen , setIsModelOpen ] = useState(false)
    const modelHandler = (event1, event2) =>{
        setIsModelOpen(true)
        context.dispatch({type:"updatestory",id:event1, image:event2})
    }
    const Array = context.state.story.map((item)=> <div keys={item.id} style={{marginLeft: item.read ? "0.1em" :"0.4em",
        padding:item.read ? "0":"-1px",border: item.read ? "0" : "1px solid red" ,borderRadius:"50%",display:"flex"}}>
            <AccountCircleIcon onClick={()=> modelHandler(item.id, item.image)} style={{fontSize:"60px", borderRadius:"50%", }}/>
    </div>
  )
    return(
        <div>
            <div className="stories">
                 <div style={{}} className="flex">
                    <AccountCircleIcon style={{fontSize:"60px"}} className="storyaccountcircle"/>
                    <AddCircleIcon style={{}} className="addcircleicon" />
                </div>
                {Array}
            </div>
            <StoryView open={IsModelOpen ? 'block' : "none"} close={()=> setIsModelOpen(false)} />
        </div>
    )
}
export default React.memo(Stories);