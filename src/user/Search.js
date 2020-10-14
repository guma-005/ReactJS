import React, {Component} from 'react';

export class Search extends Component {   
    state= {
        searchText : ""
    };
    onChange=(e)=>{        
            this.setState({[e.target.name]: e.target.value})            
        }
            
    onSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state.searchText)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit} className = "form">
                <input type ="text" 
                   name="searchText" 
                   placeholder= "Type to search here"
                   value={this.state.text}
                   onChange={this.onChange}>
                </input>
                <input type="submit"
                   value='submit'
                   className='btn btn-block btn-dark'>
                </input>
                </form>
            </div>
        );
    }
}

export default Search;
