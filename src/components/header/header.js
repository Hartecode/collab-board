import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip'
import './header.css';


export function Header(props) {
	const dashboardUrl = `/dashboard/${props.mainUser.id}`;

	return (
		<header className="appHeader" role="banner">
	      <nav role="navagation">
	        <ul className="navLinkContainer">
	        	<li>
	        		<Link to={dashboardUrl} > 
	        			<span data-tip="dashboard" data-for="dashboard" className="logoSmallScreen">CB</span>
	        			<span className="logoLargeScreen"> CollaBoard</span>
	        		</Link>
	        		<ReactTooltip id="dashboard" />
	        	</li>
	        	<li data-tip="dashboard" data-for="dashboard" className="dashboardWide">
	        		<Link to={dashboardUrl} > 
	        			<i class="fas fa-tachometer-alt"></i>
	        		</Link>
	        		<ReactTooltip id="dashboard" />
	        	</li>
	        	<li>
	        		<Link data-tip="requests" data-for="requests" to="/request">
	        			<i className="fas fa-users">
	        			</i>
	        		</Link>
	        		<ReactTooltip id="requests" />
	        	</li>
	        	<li>
	        		<Link data-tip="board" data-for="board" to="/board">
	        			<i className="fas fa-clipboard-list">
	        			</i>
	        		</Link>
	        		<ReactTooltip id="board" />
	       		</li>
	        	<li>
	        		<Link data-tip="logout" data-for="logout" to="/logout">
	        			<img className="userImage" 
	        				src={props.mainUser.avatarUrl} 
	        				alt={props.mainUser.username} 
	        			/>
	        		</Link>
	        		<ReactTooltip id="logout" />
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