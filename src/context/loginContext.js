// this code from starter code class 33

import React, { useState, useEffect } from 'react';
import superagent from "superagent";
import base64 from "base-64";
import cookie from 'react-cookies';
import jwt from 'jsonwebtoken';

// const testUsers = {
//   admin: {password:'password', name:'Administrator', role:'admin', capabilities:['create','read','update','delete']},
//   editor: { password: 'password', name: 'Editor', role: 'editor', capabilities: ['read', 'update']},
//   writer: { password: 'password', name: 'Writer', role: 'writer', capabilities: ['create']},
// };


// create login context 
export const LoginContext = React.createContext();
const API = "https://pets-mid-pro.herokuapp.com"//

export default function LoginProvider(props) {

  // declare state 
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  // initial render equevelant to componentDidMount method 
  useEffect(() => {
    const tokenFromCookie = cookie.load('token');
    validateToken(tokenFromCookie);
  }, [])
 
  // Define a function that can simulate a login event

/**
 * 
from our back end 
"user_name":"mohammad2",
    "user_password":"1234",
    "user_phone":"07888",
    "user_address":"amman",
    "user_gender":"Male",
    "user_role":"user"
 */

  const login = async (username, password) => {
    const encodedUsernameAndPassword =
      base64.encode(`${username}:${password}`);

    const response = await superagent.post(`${API}/signin`)
      .set('authorization', `Basic ${encodedUsernameAndPassword}`);

    console.log(response.body);

    validateToken(response.body.token);
  }


 

  // Define a function that can authorize a User based on a capabilty.
  const validateToken = token => {
    if (token) {
      // the user is logged in
      const user = jwt.decode(token);
      setLoginState(true, user);

      cookie.save('token', token)
    } else {
      // the user is NOT logged in
      setLoginState(false, {});
    }

  };

  const setLoginState = (loggedIn, token, user) => {
    cookie.save('auth', token);
    setLoggedIn(loggedIn);
    setUser(user);
  };

  // Define a function that can simulate a logout event
  const logout = () => {
    setLoginState(false, {});
    setUser({});
    cookie.remove('token');
  };

  const can = (capability) => {
    return user?.capabilities?.includes(capability);
  }
  //------------------------we used use effect insted of componentDidMount() 
  // componentDidMount() {
  //   const qs = new URLSearchParams(window.location.search);
  //   const cookieToken = cookie.load('auth');
  //   const token = qs.get('token') || cookieToken || null;
  //   this.validateToken(token);
  // }
  const state = {
    loggedIn,
    login,
    logout,
    user,
    can
  }

  return (
    <LoginContext.Provider value={state}>
      {props.children}
    </LoginContext.Provider>
  );

}

