import React, { Component } from 'react'
import { Row, Grid, Col } from 'react-bootstrap'
import {RowAbout} from '../../RowData/RowAbout'
import { Link } from 'react-router'


function Board(props){
	return(
		<Row className="show-grid lead">
			{props.members.map( 
				member => 
						<Boardmembers
							key={member.Hanji.toString()} 
							FirstName={member.FirstName}
							LastName={member.LastName}
							Hanji={member.Hanji}
							Title={member.Title}
							Email={member.Email} />)}
		</Row>
	)
}

function Boardmembers(props){
	return(
		<Col sm={6} className="text-center">  
			<p> {props.Title} </p>
			<p> <small>{props.FirstName} {props.LastName} ({props.Hanji}) </small></p>
			<Link to={props.Email} ><small> {props.Email} </small></Link>
			<hr className='shortline' />
		</Col>
	)
}

export default class About extends Component {
	render(){
		return(
			<Grid> 
				<p className='lead'>Board members</p>
				<hr className="line" />
				<Board members={ RowAbout } /> 
			</Grid>
		)
	}
}
