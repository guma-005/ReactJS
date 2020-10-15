import React, { Component } from 'react';
import Navbar from './components/Layout/Navbar'
import Users from './user/Users'
import Search from './user/Search'
import './App.css';
import axios from 'axios';

class App extends Component{
  state={
    users: [],
    loading: false,
    alert: null
  }
  
 /*  async componentDidMount(){       
   axios.get('https://api.github.com/users').then(res=>console.log(res.data));
   const res = await axios.get(
     `https://api.github.com/users?client_id=
     ${process.env.REACT_APP_GITHUB_CLIENT_ID}
     &client_secret=
     ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
   this.setState({users:res.data, loading: false});
  } */

  //Search github users
  searchUserMethod = async searchText => { 
    this.setState({loading: true});
   const res = await axios.get(
     `https://api.github.com/search/users?q=${searchText}&client_id=
     ${process.env.REACT_APP_GITHUB_CLIENT_ID}
     &client_secret=
     ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
   this.setState({users:res.data.items, loading: false});
  }

  //clear users from state
  clearUserMethod = ()=> {
        this.setState({users:[], loading: false})
  }
  
  //setting alert 
  setAlertMethod=(msg, type)=>{
    this.setState({alert: {msg: msg, type:type}}) // alert is an object having two attributes of type msg , type
  }
  

  render(){

    return(      
        <div className='App'>
          <Navbar />         
          <div className='container'>
              <Search searchUsers = {this.searchUserMethod} 
                  clearUsers = {this.clearUserMethod}
                  showClear = {this.state.users.length > 0 ? true : false}
                  setAlert = {this.setAlertMethod}
              />
          <Users users={this.state.users} loading={this.state.loading}/>
          </div>        
        </div>
    );
  }
}


export default App;
