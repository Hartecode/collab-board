import React from 'react';
import { connect } from 'react-redux';
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

			return repository.map((file, index) => {
				let totalOfCollabs = file.collaborators.length;
				let mainUserId = this.props.mainUser.id;
				let pending = (1 === file.pendingRequest.filter(req => req.userID === mainUserId).length) ? 'Pending': <button className="projectSnapShotJoin">Join Team</button>;

				return <SnapShot 
			        		id={file.id}
			        		key={file.id}
				        	transferProject={file}
			        		projectname={file.projectname}
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