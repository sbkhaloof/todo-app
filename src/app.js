import React from 'react';
import settings from './context/context'
import ToDo from './components/todo/todo.js';
import Header from './components/header'
import Footer from './components/footer'



export default class App extends React.Component {
  render() {
    return (
     <settings>
       <Header />
       <ToDo />
       <Footer />
     </settings>
    );
  }
}
