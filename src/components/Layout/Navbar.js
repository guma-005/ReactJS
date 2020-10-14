import React from 'react'
import PropTypes from 'prop-types'

const Navbar =({icon,title})=>{     // icon, title are the props 
    return(
        <nav className='navbar bg-primary'>
                <h1>
                    <i className={icon}/> {title} { /* icon, title is defined in props  */}
                </h1>
        </nav>
        );    
}
Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
};

Navbar.propTypes ={
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};
export default Navbar