import React, { Component } from 'react';
import Navbar from './components/Layout/Navbar'
import UserItem from './user/UserItem'
import './App.css';

class App extends Component{
  
  render(){

    return(      
        <div className='App'>
          <Navbar />
          <UserItem/>
        </div>
    );
  }
}


export default App;
