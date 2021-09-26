import React from 'react';
import settingsContext from './context/context'
import ToDo from './components/todo/todo.js';




export default class App extends React.Component {
  render() {
    return (
     <settingsContext>
     
       <ToDo />
      
     </settingsContext>
    );
  }
}
