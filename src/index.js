import React from 'react';
import ReactDOM from 'react-dom';

import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
// lab  33 
import LoginProvider from './context/loginContext';

import App from './app.js';

class Main extends React.Component {
  render() {

    return (
     
        <App />
     
    )

  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);