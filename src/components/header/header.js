import React from 'react';
import './header.css';

export default function Header(props) {
	return (
		<header role="banner">
	      <nav role="navagation">
	        <ul className="navLinkContainer">
	          <li><a href="#">CB</a></li>
	          <li>
	            <a href="#"><i className="fas fa-users"></i></a>
	          </li>
	          <li>
	            <a href="#"><i className="fas fa-clipboard-list"></i></a>
	          </li>
	          <li>
	            <a href="#"><img className="userImage" src="https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg" alt="User name"></a>
	          </li>
	        </ul>
	      </nav>
	    </header>
	);
}