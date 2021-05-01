import React , {useContext} from "react"
import Typography from "@material-ui/core/Typography"
import MessageIcon from "@material-ui/icons/Message"
import Stories from "./Stories1"


const Nav = () => {
    // const context = useContext(UserContext)
    // const Padding = context.state.active == 1 ? {style:"1em", name:"Instagram"} :{style:"0em", name:""};
    return (
        <div>
            <div className="nav-home" style={{paddingTop:"1em", paddingBottom:"1em"}}>
                    <Typography variant="h5">Instagram</Typography>
                    <MessageIcon />
            </div>
            <Stories />
        </div>
    );
}

export default React.memo(Nav);