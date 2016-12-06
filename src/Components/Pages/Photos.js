import React, { Component } from 'react';
import { Row, Grid, Col } from 'react-bootstrap';
import {RowPhotos} from '../../RowData/RowPhotos'
import { Link } from 'react-router';

function Photo(props){
	return (
		<div>
			{
				props.events.map(event => (
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

function ShowImage(props){
	return(
		<Link to={require('../../' + props.image)} target='_blank'>
			<img src={require('../../' + props.image)} alt="Loading" className="img-responsive"  />
		</Link>
	)
}
class PhotoList2 extends Component{
	render(){
		let eventDate = new Date(this.props.date);
		let now = new Date();
		if ( eventDate < now ) {
			return (
				<div>
					<h4 className="text-center"> {this.props.date} {this.props.title_EN}</h4>
					{ this.props.title_TW &&
						<h4 className="text-center"> {this.props.title_TW} </h4>
					}
					{ this.props.desc_TW &&
						<p className="text-center lead"> {this.props.desc_TW} </p>
					}
					<Row className="show-grid">
						<Col sm={3}><ShowImage image={this.props.img1}/></Col>
						<Col sm={3}><ShowImage image={this.props.img2}/></Col>
						<Col sm={3}><ShowImage image={this.props.img3}/></Col>
						<Col sm={3}><ShowImage image={this.props.img4}/></Col>
					</Row>
					{ this.props.photoURL &&
						<div className="text-right"><Link to={ this.props.photoURL } target="_blank">MORE</Link></div>
					}
				</div>
			)
		}
	}
}

export default class Photos extends Component {
	render(){
		return(
			<Grid>
				<p className='lead'>Past Events & Photos</p>
				<hr className="line" />
				<Photo events={ RowPhotos } />
			</Grid>
		)
	}
}
