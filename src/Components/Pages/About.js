import React, { Component } from 'react';

export default class About extends Component {
	render(){
		return(
			<div>
			<h1>About template</h1>
			{this.props.children}
			</div>
		)
	}
}
