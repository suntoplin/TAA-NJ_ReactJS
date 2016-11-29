import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';

export default class App extends Component {
	render() {
		return (
		  <div>
		  	<Header />	
		    { this.props.children }
		    <Footer />
		  </div>
		);
	}
}


