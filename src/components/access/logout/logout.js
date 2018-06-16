import React from 'react';
import {Link} from 'react-router-dom';
import './logout.css';

export default function LogOut() {
	return (
		<main className="" role='main'>
			<div className="logoutBox">
				<h1>Do you want to log out?</h1>
				<a href="http://localhost:8080/auth/logout">
					<button className="btn logoutBtn">
						Yes
					</button>
				</a>
				<Link to='/dashboard'>
					<button className="btn logoutBtn">
						No, back to my dashboard
					</button>
				</Link>
			</div>
		</main>
	);
}