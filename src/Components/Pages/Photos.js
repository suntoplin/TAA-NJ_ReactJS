import React, { Component } from 'react';
import { Row, Grid, Col } from 'react-bootstrap';
import {RowPhotos} from '../../RowData/RowPhotos'
import { Link } from 'react-router';

function Photo(props){
	return (
		<div>
			{
				props.events.map(
				event => 
				(
					<PhotoList2 
						key={event.date.toString()} 							
						date={event.date}
						title_EN={event.event_EN}
						title_TW={event.event_TW}
						desc_EN={event.description_EN}
						desc_TW={event.description_TW}
						img1={event.img1}
						img2={event.img2}
						img3={event.img3}
						img4={event.img4} 
						photoURL={event.photo_url}/>
				)).reverse()
			}
		</div>
	);
}

class PhotoList2 extends Component{
	constructor(){
		super()
		// this.handleMouseOver = this.handleMouseOver.bind(this)
		// this.handleMouseLeave = this.handleMouseLeave.bind(this)
		this.showURL = this.showURL.bind(this)
		this.showTitleTW = this.showTitleTW.bind(this)
		this.showDesciptionTW = this.showDesciptionTW.bind(this)
		this.state ={ 
			// 'class': 'img-responsive',
			'today': new Date()
			
		}
	}
	// handleMouseOver(){
	// 	this.setState( {'class': 'img-thumbnail'} )
	// }
	// handleMouseLeave(){
	// 	this.setState( {'class': 'img-responsive'} )
	// }
	showTitleTW(){
		if (this.props.title_TW) { 
			return <h4 className="text-center"> {this.props.title_TW} </h4> 
		};
	}
	showDesciptionTW(){
		if (this.props.desc_TW) { 
			return <p className="text-center lead"> {this.props.desc_TW} </p> 
		};
	}
	showURL(){
		if(this.props.photoURL) { 
			return <div className="text-right"><Link to={ this.props.photoURL } target="_blank">MORE</Link></div> 
		};
	}
	render(){
		let eventDate = new Date(this.props.date);
		let now = this.state.today;
		if ( eventDate < now ) { 
			return (
				<div>
					<h4 className="text-center"> {this.props.date} {this.props.title_EN}</h4>
					{ this.showTitleTW() }
					{ this.showDesciptionTW() }
					<Row className="show-grid">
						<Col sm={3}><img src={require('../../' + this.props.img1)} alt="Loading" className="img-responsive" /></Col>
						<Col sm={3}><img src={require('../../' + this.props.img2)} alt="Loading" className="img-responsive" /></Col>
						<Col sm={3}><img src={require('../../' + this.props.img3)} alt="Loading" className="img-responsive" /></Col>
						<Col sm={3}><img src={require('../../' + this.props.img4)} alt="Loading" className="img-responsive" /></Col>
					</Row>
					{ this.showURL() }			
				</div>
			)
		}
	}
}


export default class Photos extends Component {
	render(){
		return(
			<div >
				<div className="container">	
					<p className='lead'>Past Events & Photos</p>
					<hr className="line" />
				</div>
				<Grid> 
					<Photo events={ RowPhotos } /> 
				</Grid>
			</div>
		)
	}	
}