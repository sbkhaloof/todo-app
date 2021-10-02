import React, { useContext } from "react"

import { Link } from "react-router-dom";//for lab 32
import { LoginContext } from "../context/loginContext";
import { Navbar, Button, Alignment } from '@blueprintjs/core';

export default function Header(props) {
  const login=useContext(LoginContext);
  // after the user sign in the logOut button will show 

  return (
  <>
      <header style={{ height: "100px", backgroundColor: "Highlight" }}>
        <h1>To Do List: {props.incomplete} items pending</h1>
        <Link to="/" className="pages">
          <Button className="bp3-minimal" icon="home" text="Home" />
        </Link>

        <Link to="/form">
        <Button className="bp3-minimal" icon="cog" text="Settings" />
        </Link>
        
        <Button className="bp3-minimal" icon="off" text="LogOut" onClick = {login.logout} />
      </header>
   </>
  )
}