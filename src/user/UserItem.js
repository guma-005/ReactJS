import React, {Component } from  'react'


class UserItem extends Component {

    constructor(){
        super();
        this.state = {
            id:'id',
            login: 'mojombo',
            avatar_url: 'https://avatar0.githubusercontent.com/u/1?v=4'
        }
    }
    render(){
        return(
            <div className="card text-center">
                <img src={this.state.avatar_url}/>
            </div>
        );
    }
}
export default UserItem;