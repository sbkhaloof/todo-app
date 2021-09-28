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
import { LoginContext } from '../context/loginContext';

export default function Login(props) {

  const context = useContext(LoginContext);
  // declear state for login
  const [username, setUsenane] = useState("");
  const [password, setPassword] = useState("")


  // declear state for signup 

  // const [user_name, setuser_name] = useState("")
  // const [user_password, setuser_password] = useState("")
  // const [user_phone, setuser_phone] = useState("");
  // const [user_address, setuser_address] = useState("")
  // const [user_gender, setuser_gender] = useState("")
  // const [user_role, setuser_role] = useState("")

  // const [singupShow, setSingupShow] = useState(true);


  // create handle submit function for the form
  const handleSubmit = (e) => {
    e.preventDefault();
    context.login(username, password);
  }
  // const handlesignup=(e)=>{
  //   e.preventDefault();
  //   context.signup(user_name,user_password,user_phone,user_address,user_gender,user_role)
  // }

  return (
    <>
      {/* {singupShow ?} */}
      <When condition={!context.loggedIn}>
        <form onSubmit={handleSubmit}>
          <input type="text" name="username" onChange={(e) => { setUsenane(e.target.value) }}>USER name</input>
          <input type="password" name="password" onChange={(e) => { setPassword(e.target.value) }}>password</input>
          <button type="submit">LOGIN </button>
        </form>
      </When>
      <When condition={context.loggedIn}>
        {/* <button type="button" onClick={setSingupShow(false)}> signup</button>
<span>this is to show user name </span> */}
      </When>
    </>
  );
}

