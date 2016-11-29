import React, { Component } from 'react';

export default class Links extends Component {
	render(){
		return(
			<div>
			{this.props.children}
			<h1>Links template</h1>
			</div>
		)
	}
}
