import React from 'react';
import { Row,Grid, Col } from 'react-bootstrap';
import {RowActivity} from '../RowData/RowActivity'

function Avtivity(props){
	return (
		<Row className="show-grid">
	  		{ props.events.map( event => 
	  			<Thumbnail 
	  				key={event.activity.toString()} 
	  				act={event.activity} 
	  				period={ event.period}
	  				contact={ event.contact}
	  				email={ event.email}
	  				img={ event.img }/> )}
		</Row>
	);
}

function Thumbnail(props) {
  	return ( 
	  	<Col sm={6} md={4}> 
	  		<div className="thumbnail" >
	  			<img src={require('../Images/' + props.img)} alt={ props.act } className="img-responsive" />
	  			<div className="caption" >	
	  				<h5>{ props.act } </h5>
	  				<p> { props.period } </p>
	  				<p> { props.contact } <u> { props.email } </u> </p>
	  			</div>
	  		</div>  
	  	</Col>
  	);
}

export default class RegularActivities extends React.Component{
	
	render(){
		return(
			<div>
				<div className="container">
					<p className='lead'><strong>Regular Activities</strong></p>
					<hr className="line" />
				</div>
				<Grid>
			    	<Avtivity events={ RowActivity } />
				</Grid>
			</div>
		)
	}
}




