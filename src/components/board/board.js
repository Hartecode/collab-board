import React from 'react';
import { connect } from 'react-redux';
import SnapShot from '../repository/snapshot/projectSnap';
import './board.css';

export function Board(props) {

	const boardList = () => {
		const repository = props.boardRepo;

		return repository.map((file, index) => {
			let totalOfCollabs = file.collaborators.length;
			let mainUserId = props.mainUser.id;
			let pending = (1 === file.pendingRequest.filter(req => req.userID === mainUserId).length) ? 'Pending': <button className="projectSnapShotJoin">Join Team</button>;

			return <SnapShot 
		        		
		        		id={file.id}
		        		key={file.id}
		        		projectName={file.projectName}
		        		projectDec={file.projectDec}
		 				userRole={pending}
		        		numberOfCollabs={totalOfCollabs}
		        	/>
		});
	}

	return (
		<main role="main">
	    	<section>
	        	<h2 className="pageTilte">
	        		Board
	        	</h2>
	        	<ul className="userprojectlist" aria-live="assertive">
		        	{boardList()}
	        	</ul>
	    	</section>
	    </main>
	);
}

const mapStateToProps = state => ({
    boardRepo: state.boardRepo,
    mainUser: state.mainUser
});

export default connect(mapStateToProps)(Board);