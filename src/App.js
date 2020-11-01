import React, { Component, Fragment } from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import axios from 'axios';
import Navbar from './components/Layout/Navbar'
import Alert from './components/Layout/Alert'
import Users from './user/Users'
import User from './user/User'
import Search from './user/Search'
import './App.css';
import About from './pages/About'



class App extends Component{
  state={
    users: [],
    repos: [],
    user:{},
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

  //get single github user

  getUser  = async (username) => {
    this.setState({loading: true});
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=
      ${process.env.REACT_APP_GITHUB_CLIENT_ID}
      &client_secret=
      ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({user:res.data, loading: false});
  }

  //getting user repos
  getUserRepos = async (username) => {
    this.setState({loading: true});
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&cort=created:asc&client_id=
      ${process.env.REACT_APP_GITHUB_CLIENT_ID}
      &client_secret=
      ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({repos:res.data, loading: false});
  }

  //clear users from state
  clearUserMethod = ()=> {
        this.setState({users:[], loading: false})
  }
  
  //setting alert 
  setAlertMethod=(msg, type)=>{
    this.setState({alert: {msg: msg, type:type}}) // alert is an object having two attributes of type msg , type
    setTimeout(()=>this.setState({alert:null}), 5000) // this wil remove the alert message after 5 sec
  
  }
  

  render(){
    return(  
      <Router>    
        <div className='App'>
          <Navbar />         
          <div className='container'>
              <Alert alert={this.state.alert}/>
              <Switch>
                < Route 
                  exact path='/'
                  render={props => (
                    <Fragment>
                      <Search searchUsers = {this.searchUserMethod} 
                        clearUsers = {this.clearUserMethod}
                        showClear = {this.state.users.length > 0 ? true : false}
                        setAlert = {this.setAlertMethod}
                      />
                      <Users users={this.state.users} loading={this.state.loading}/>
                     </Fragment>
                  )  }/>
              <Route exact path='/about' component={About}/>
              <Route exact path='/user/:login' render={props => (
                <User 
                  {...props}
                   getUser={this.getUser} 
                   getUserRepos={this.getUserRepos} 
                   user={this.state.user}
                   repos={this.state.repos}
                   loading={this.state.loading}/>
              )} />
                  
              </Switch>
                  </div>        
        </div>
        </Router>

       
    );
  }
}


export default App;
