import React, { Component } from 'react';

import UpcomingEvents from '../UpcomingEvents';
import PastEvents from '../PastEvents';
import Objectives from '../Objectives';
import RegularActivities from '../RegularActivities';

export default class Home extends Component {
	render() {
		return (
		  <div>
		    <img src={ require('../../Images/grouppic.jpg')} alt='TAA-NJ' className="img-responsive" />
		    <UpcomingEvents />
		    <PastEvents />
		    <Objectives />
		    <RegularActivities />	
		  </div>
		);
	}
}


