import React from 'react';
import { connect } from 'react-redux';
import Notice from './notification/notice';
import './request.css';
import { fetchRequests } from '../../actions';


export class Request extends React.Component {

	componentDidMount() {

	}

	render() {
		const requestlist = this.props.requests;

		const list = () => {
			if(requestlist.length > 0) {
				return requestlist.map( (obj, index) => 
					<Notice 
						index={index}
						key={obj.id}
						projectName={obj.projectName}
						avatarImgUrl={obj.avatarImgUrl}
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
    requests: state.requests
});

export default connect(mapStateToProps)(Request);