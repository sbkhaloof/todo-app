import React from 'react';
import SettingsContext from './context'
import ToDo from './components/todo/todo.js';


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

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <SettingsContext>
            <Route exact path="/">

              {/* <Header /> */}
              <ToDo />
              {/* <Footer /> */}
            </Route>
            <Route path="/form">
              <Header />
              <FormSettingPage />
              <Footer />
            </Route>
          </SettingsContext>
        </Switch>
      </Router>
    );
  }
}
