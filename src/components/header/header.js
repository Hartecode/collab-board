import React from 'react';
import {Link} from 'react-router-dom';

import './header.css';

export default function Header() {
	return (
		<header role="banner">
	      <nav role="navagation">
	        <ul className="navLinkContainer">
	        	<li>
	        		<Link to='/dashboard'>CB</Link>
	        	</li>
	        	<li>
	        		<Link to="/request"><i className="fas fa-users"></i></Link>
	        	</li>
	        	<li>
	        		<Link to="/board"><i className="fas fa-clipboard-list"></i></Link>
	       		</li>
	        	<li>
	        		<a href="#"><img className="userImage" src="https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg" alt="User name" /></a>
	        	</li>
	        </ul>
	      </nav>
	    </header>
	);
}