import React, {useContext} from 'react';
import { UserContext } from "../App"
import BottomNav from "./Nav/BottomNav"
import { Route,Switch } from "react-router-dom"
import Home from "./Home/Home"
import Search from "./Search/Search"
import Nav from "./Nav/Nav"

const Components = () => {
    const context = useContext(UserContext)
    return (
        <div>
            <Nav />
            <Switch>
                <Route exact path="/search">
                    <Search />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
            <BottomNav />
        </div>
    );
}

export default Components;
