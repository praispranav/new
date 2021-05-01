import React,{useContext} from 'react';
import HomeIcon from "@material-ui/icons/Home"
import SearchIcon from "@material-ui/icons/Search"
import AddBoxIcon from "@material-ui/icons/AddBox"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import AccountCircleIcon from "@material-ui/icons/AccountCircle"
import {Link} from "react-router-dom"
import { UserContext } from "../../App"

const BottomNav = () => {
    const context = useContext(UserContext)
    const state = context.state
    const dispatch = (event) =>{
        context.dispatch({type:"active", value: event})
    }
    const Background= {background:"rgb(231, 228, 228)",color:"black"}
    const Homeactive = state.active == 1 ? Background :{color:"black"};
    const Search = state.active == 2 ? Background :{color:"black"};
    const Add = state.active == 3 ? Background :{color:"black"};
    const Fav  = state.active == 4 ? Background :{color:"black"};
    const User  = state.active == 5 ? Background :{color:"black"};
    return (
        <div>
            {/* {state.active} */}
            <div className="bottom-nav">
                <Link to="/">
                    <HomeIcon 
                        onClick={()=> dispatch(1)} style={Homeactive} 
                        className="icons" />
                </Link>
                <Link to="/search">
                    <SearchIcon 
                        onClick={()=> dispatch(2)} style={Search} 
                        className="icons" />
                </Link>
                <Link to="/add">
                    <AddBoxIcon 
                        onClick={()=> dispatch(3)} 
                        style={Add} 
                        className="icons"/>
                </Link>
                <Link to="/fav">
                    <FavoriteBorderIcon 
                        onClick={()=> dispatch(4)} 
                        style={Fav} 
                        className="icons" />
                </Link>
                <Link to="/user">
                    <AccountCircleIcon 
                        onClick={()=> 
                        dispatch(5)} 
                        style={User} 
                        className="icons"/>
                </Link>
            </div>
        </div>
    );
}

export default BottomNav;
