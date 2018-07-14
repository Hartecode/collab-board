import React from 'react';
import { connect } from 'react-redux';
import Notice from './notification/notice';
import './request.css';
import { fetchRequests } from '../../actions';


export class Request extends React.Component {

	componentDidMount() {
		const userId = this.props.mainUser.id;
		this.props.dispatch(fetchRequests(userId));
	}

	render() {
		const requestList = this.props.requests;
		const list = () => {
			if(requestList.length > 0) {
				return requestList.map( (obj, index) => 
					<Notice 
						index={index}
						key={obj.id}
						id={obj.id}
						requesterId={obj.requesterID}
						projectName={obj.projectname}
						projectID={obj.projectID}
						requesterUsername={obj.requesterUsername}
						avatarImgUrl={obj.requesterAvatarUrl}
						requestDec={obj.requestDec}
					/>
				);
			} else {
				return <li><h3>No Requests</h3></li>
			}
		}
			
		return (
			<main role="main">
		      <section>
		        <h2 className="pageTilte">Collabs Requests</h2>
		        <ul className="projectRequests" aria-live="assertive">
		        	{list()}
		        </ul>
		      </section>
		    </main>
		);
	}
	

}

const mapStateToProps = state => ({
	mainUser: state.mainUser,
    requests: state.requests
});

export default connect(mapStateToProps)(Request);