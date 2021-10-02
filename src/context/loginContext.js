// this code from starter code class 33

import React, { useState, useEffect } from 'react';
import superagent from "superagent";
// import axios from "axios";
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
const API = 'https://auth-server-401.herokuapp.com/signin';// .env

export default function LoginProvider(props) {

  // declare state 
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  // initial render equevelant to componentDidMount method 

//------------------------we used use effect insted of componentDidMount() 
  // componentDidMount() {
  //   const qs = new URLSearchParams(window.location.search);
  //   const cookieToken = cookie.load('auth');
  //   const token = qs.get('token') || cookieToken || null;
  //   this.validateToken(token);
  // }

  useEffect(() => {
    const qs = new URLSearchParams(window.location.search);
    const cookieToken = cookie.load('auth');
    const token = qs.get('token') || cookieToken || null;
    validateToken(token);
  }, [])

   // Define a function that can simulate a login event


   const login = async (username, password) => {
    const encodedUsernameAndPassword =
      base64.encode(`${username}:${password.toUpperCase()}`);

    const response = await superagent.post(`${API}`)
      .set('authorization', `Basic ${encodedUsernameAndPassword}`);
      // .set('Access-Control-Allow-Origin', '*'); to solve acess control problem
    console.log(response.body);
    validateToken(response.body.token);
    
    // to save the data in local storage 
    let data = localStorage.getItem('logout');
          let listData = JSON.parse(data);
  }


 // Define a function that can authorize a User based on a capabilty.
 const validateToken = token => {
  if (token) {
    // the user is logged in
    const user = jwt.decode(token);
    setLoginState(true,user);

    cookie.save('token', token)
  } else {
    // the user is NOT logged in
    setLoginState(false,{});
  }

};
// update login state
const setLoginState = (loggedIn,user) => {
 
  setLoggedIn(loggedIn);
  setUser(user);
};
 
 

  // Define a function that can simulate a logout event
  const logout = () => {
    setLoginState(false,{});
    cookie.remove('token');

    // to get data from local storage 
    let data = localStorage.getItem('list');
    let listData = JSON.parse(data);
    let parsedData = JSON.stringify(listData);
    localStorage.setItem('logout' , parsedData);
  };

  // Define a function that can simulate a signup event...i will do it later

// const signup=async(user_name,user_password,user_phone,user_address,user_gender,user_role)=>{
//   let reqBody={
//     user_name: user_name,
//     user_password:user_password,
//     user_phone:user_phone,
//     user_address:user_address,
//     user_gender:user_gender,
//     user_role:user_role
//   }
//   const response = await axios.post(`${API}/signup`,reqBody)
//   validateToken(response.data.token);
// }

  const can = (capability) => {
    return user?.capabilities?.includes(capability);
  }
  
  const state = {
    loggedIn,
    setLoggedIn,
    login,
    setLoginState,
    logout,
    user,
    setUser,
    can,
    
  }

  return (
    <LoginContext.Provider value={state}>
      {props.children}
    </LoginContext.Provider>
  );

}

