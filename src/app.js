import React, { useContext } from 'react';
import SettingsContext from './context/context';
import { LoginContext } from './context/loginContext';

// for lab 32
import Header from './components/header';
import Footer from './components/footer.js';
import FormSettingPage from './components/formSettingPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// for lab 33
import LoginProvider from "./context/loginContext"
import Auth from './components/auth';
import ToDo from './components/todo/todo.js';
import { If, Else, Then } from "react-if";
import Login from "./components/login";


export default class App extends React.Component {
  render() {
    return (

      <SettingsContext>
        <LoginProvider>
          <Login />
          <Router>
            <Header />
            <Switch>
              <Route exact path="/">
              <Auth capability="read">
                <ToDo />
            </Auth >
              </Route>
              <Route exact path="/form">
            <Header />
            <FormSettingPage />
            <Footer />
            </Route>
            </Switch>
          </Router>

         
          
        </LoginProvider>
      </SettingsContext>

    );
  }
}
