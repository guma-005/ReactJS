import React, {Component} from 'react';
import PropTypes from 'prop-types'

export class Search extends Component {   
    state = {
        searchText : ""
    };

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired
      }
    onChange=(e)=>{        
            this.setState({[e.target.name]: e.target.value})            
        }
         
    
    onSubmit=(e)=>{
        e.preventDefault();
        if(this.state.searchText === ''){
            this.props.setAlert('Please type something', 'light');
        }
        else{
            this.props.searchUsers(this.state.searchText); // SearchUsers is a props which we are going to feed to App component
            this.setState({ searchText : ""});
        }
        
        
    }
   
    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit} className = "form">
                <input type ="text" 
                   name="searchText" 
                   placeholder= "Type to search here"
                   value={this.state.searchText}
                   onChange={this.onChange}>
                </input>
                <input type="submit"
                   value='submit'
                   className='btn btn-block btn-dark'>
                </input>
                </form>

                {this.props.showClear && <input type='button'
                   value='Clear'
                   className='btn btn-block btn-light'
                   onClick={this.props.clearUsers}>
                </input>
                }
               
            </div>
        );
    }
}

export default Search;
