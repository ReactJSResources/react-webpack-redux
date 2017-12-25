import React, { Component } from 'react';
import SampleApi from '../services/SampleApi';

export class Sample extends Component {

	getUsers = (email) => {
		SampleApi.getUsers().then((res) => {
			console.log(res);
		});
	}

	render() {
			return (
				<div>
					test
					<button onClick={() => this.getUsers()}>Get User Service Sample</button>
			</div>
			);
	}
}

export default Sample;
