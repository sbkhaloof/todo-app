import React from 'react';
import ReactDOM from 'react-dom';

import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

import App from './app.js';
import LoginProvider from './context/loginContext.js';
import  SettingsProvider from './context/context'

class Main extends React.Component {
  // using login provider 
  render() {

    return (
      <LoginProvider>
        <SettingsProvider>
        <App />
        </SettingsProvider>
      </LoginProvider>
     
    )
  
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);