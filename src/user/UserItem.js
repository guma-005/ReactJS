import React from  'react'
import PropTypes from 'prop-types'


const UserItem= (props)=> {

        const{login, avatar_url,html_url} = props.user;
        return(
            <div className="card text-center">
                <img 
                    src={avatar_url} 
                    alt=''
                    className='round-img'
                    style={{width: '60px'}}                
                />
                <h3>{login}</h3>
               <div> <a href={html_url}
                 className='btn btn-dark'>more</a></div>
            </div>
        );

};

UserItem.propTypes ={
    user: PropTypes.object.isRequired 
};

export default UserItem;