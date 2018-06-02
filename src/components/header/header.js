import React from 'react';
import {connect} from 'react-redux';

import {Link} from 'react-router-dom';

import './header.css';

export function Header(props) {
	return (
		<header role="banner">
	      <nav role="navagation">
	        <ul className="navLinkContainer">
	        	<li>
	        		<Link to='/dashboard'>
	        			CB
	        		</Link>
	        	</li>
	        	<li>
	        		<Link to="/request">
	        			<i className="fas fa-users">
	        			</i>
	        		</Link>
	        	</li>
	        	<li>
	        		<Link to="/board">
	        			<i className="fas fa-clipboard-list">
	        			</i>
	        		</Link>
	       		</li>
	        	<li>
	        		<Link to="/logout">
	        			<img className="userImage" 
	        				src={props.mainUser.avatarUrl} 
	        				alt={props.mainUser.username} 
	        			/>
	        		</Link>
	        	</li>
	        </ul>
	      </nav>
	    </header>
	);
}

const mapStateToProps = state => ({
    mainUser: state.mainUser,
});

export default connect(mapStateToProps)(Header);