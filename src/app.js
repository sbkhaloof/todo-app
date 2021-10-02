import React from 'react';
import ToDo from './components/todo/todo.js';
// import "./app.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  FormSettingPage  from"./components/formSettingPage";
import Header from './components/header';
import { When } from 'react-if';
import { LoginContext } from './context/loginContext';
import Login from './components/login';


export default class App extends React.Component {
// here using when condition to show or not our component depand on the user is login or not 
  static contextType = LoginContext;
  render() {
    return (

      <Router >
        <When condition =  {this.context.loggedIn} >
        <Header/>
        <Switch>
          <Route exact path="/">
             <ToDo />
          </Route>

          <Route exact path="/settings">
             <FormSettingPage/>
          </Route>
        </Switch>
        </When>

        <When condition = {!this.context.loggedIn}>
          <Login/>
        </When>

      </Router>
       
    );
  }
}