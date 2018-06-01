import React from 'react';
import {Link} from 'react-router-dom';
import './logout.css';

export default function LogOut() {
	return (
		<main className="container" role='main'>
			<h1>Do You want to LogOut?</h1>
				<a href="http://localhost:8080/auth/logout">
					<button className="">
						Yes
					</button>
				</a>
				<Link to='/dashboard'>
					<button className="">
						No, back to my dashboard
					</button>
				</Link>
		</main>
	);
}