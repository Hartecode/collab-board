import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import './logout.css';

export function LogOut(props) {
	return (
		<main className="" role='main'>
			<div className="logoutBox">
				<h1>Do you want to log out?</h1>
				<a href="https://boiling-earth-62792.herokuapp.com/logout">
					<button className="btn logoutBtn">
						Yes
					</button>
				</a>
				<Link to={'/dashboard/' + props.mainUser.id}>
					<button className="btn logoutBtn">
						No, back to my dashboard
					</button>
				</Link>
			</div>
		</main>
	);
}

const mapStateToProps = state => ({
    mainUser: state.mainUser,
});

export default connect(mapStateToProps)(LogOut);