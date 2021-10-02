// this code from starter code class 33

/**
Implement a <Login /> Component that has the following features:
1. Provide an account login screen with a form
- Accepts Username and Password
- On successful login, store the token as a cookie 
2. If a user returns and has a valid login cookie, hide the login form and consider them “Logged In”
- Display a logout button instead of a form if they are “Logged In”.
 */

import React, { useContext, useState } from 'react';
import { When } from 'react-if';
import useForm from '../hooks/form';
import { LoginContext } from '../context/loginContext';
import { Button, FormGroup, Menu, MenuItem } from '@blueprintjs/core';

export default function Login() {

  const login = useContext(LoginContext);
  const { handleChange, handleSubmit } = useForm(handleLogin);

  // declear state for signup ............ i will do it later 

  // const [user_name, setuser_name] = useState("")
  // const [user_password, setuser_password] = useState("")
  // const [user_phone, setuser_phone] = useState("");
  // const [user_address, setuser_address] = useState("")
  // const [user_gender, setuser_gender] = useState("")
  // const [user_role, setuser_role] = useState("")

  // const [singupShow, setSingupShow] = useState(true);

  function handleLogin(user) {
    login.login(user.username, user.password)
  }
// login form input username and password to see our home and setting page 
  return (
    <>

      <form onSubmit={handleSubmit} style={{width:'200px' ,height:'200px',backgroundColor:'Highlight',margin:'20px'}}>

        <h2 style={{textAlign:'center',textShadow:'inherit'}}>LogIn</h2>
          <br/>
          <input style={{margin:'10px'}} onChange={handleChange} name="username" type="text" placeholder="ENTER YOUR NAME" />        
          <input style={{margin:'10px'}} onChange={handleChange} name="password" type="password" placeholder="YOUR PASSWORD" />
          <br/>
          <Button style={{borderRadius:'25%',backgroundColor:'GrayText',marginLeft:'100px'}} type="submit">LogIn</Button>
       
      </form>
    </>
  )
}