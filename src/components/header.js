import React,{useContext} from "react"

import { Link } from "react-router-dom";//for lab 32
// lab33
import { LoginContext } from "../context/loginContext";
import {When} from "react-if";// depand on auth

export default function Header (props){
  const context = useContext(LoginContext)
    return (
        <>
        <When condition={context.loggedIn}>
        <header style={{height:"75px" , backgroundColor:"Highlight"}}>
        <h1>To Do List: {props.incomplete} items pending</h1>
        <Link className="bp3-button bp3-minimal bp3-icon-home" to="/">Home 🏠</Link>
        <span ></span>
          <Link className="bp3-button bp3-minimal bp3-icon-cog" to="/form">FormSettingPage ✍</Link>
        </header>
        </When>
        </>
    )
}