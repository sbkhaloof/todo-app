import React from "react"

import { Link } from "react-router-dom";//for lab 32

export default function Header (props){
    return (
        <>
        <header style={{height:"75px" , backgroundColor:"Highlight"}}>
        <h1>To Do List: {props.incomplete} items pending</h1>
        <Link className="bp3-button bp3-minimal bp3-icon-home" to="/">Home 🏠</Link>
        <span ></span>
          <Link className="bp3-button bp3-minimal bp3-icon-cog" to="/form">FormSettingPage ✍</Link>
        </header>
        </>
    )
}