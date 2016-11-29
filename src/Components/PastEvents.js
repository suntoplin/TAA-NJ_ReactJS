import React from 'react';
import { Link } from 'react-router';

import {RowPastEvents} from '../RowData/RowPastEvents'


function Past(props){
	return (
		<div>
			{props.events.map(
				event=> <PastList 
							key={event.icon.toString()} 
							icon={event.icon}
							date={event.date}
							title={event.event_title} />).reverse()}
		</div>
	);
}

function PastList(props){
	return(
		<div className="text-left lead">
			<p><span className={props.icon}></span> {props.date} {props.title}</p>
		</div>
	)
}

export default class PastEvents extends React.Component{
	render(){
		return(
			<div className="container lead">
				<p><strong>PastEvents</strong></p>
				<hr className="line" />
				<Past events={RowPastEvents} />
				<div className="text-center">
					<Link to='Photos' >MORE PHOTOS</Link>
				</div>
				<hr/>
			</div>
		)
	}
}