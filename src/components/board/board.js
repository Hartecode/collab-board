import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SnapShot from '../repository/snapshot/projectSnap';
import './board.css';
import { fetchFullBoard } from '../../actions';

export class Board extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchFullBoard());
	}

	render() {

		const boardList = () => {
			const repository = this.props.boardRepos;
			console.log(repository);
			return repository.map((file, index) => {
				let repoOwner = file.ownerID;
				let currentUser = this.props.mainUser.id;
				let totalOfCollabs = file.collaborators.length;
				let mainUserId = this.props.mainUser.id;
				let status;

				if(repoOwner === currentUser) {
					status = 'Owner';
				} 
				else if (1 === file.pendingRequest.filter(req => req.userID === mainUserId).length) {
					status = 'Pending';
				} else {
					status = <Link to={"/project/" + file.id}> 
				    			<button className="projectSnapShotJoin">Join Team</button>
				    		</Link> 
				}
				
				return <SnapShot 
			        		id={file.id}
			        		key={file.id}
			        		projectname={file.projectname}
			        		projectDec={file.projectDec}
			 				userRole={status}
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
		        	<ul className="userprojectlist" 
		        		aria-live="assertive">
			        	{boardList()}
		        	</ul>
		    	</section>
		    </main>
		);
	}
	
}

const mapStateToProps = state => ({
    boardRepos: state.boardRepos,
    mainUser: state.mainUser
});

export default connect(mapStateToProps)(Board);