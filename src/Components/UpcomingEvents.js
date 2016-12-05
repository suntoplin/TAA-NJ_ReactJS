import React, {Component} from 'react';

const upcomingEvents=[
	{
		"date":"12/2016",
		"event_title":"Princeton Outreach at Palmer Square",
		"place":"Palmer square",
		"address":"40 Nassau St. Princeton, New Jersey 08542",
		"details":"Co-organized with OTD-NJ",
		"time_start":"",
		"time_end":"",
		"contact1_title":"",
		"contact1":"Tsai-Yen Han",
		"contact1_email":"jane.han@gmail.com",
		"contact2":"",
		"contact2_email":"",
		"icon":"glyphicon glyphicon-bullhorn",
		"img":"Images/20161008/201610outreach-02.jpg"
	},

]

function Upcoming(props){
  return(
    <div>
    {props.events.map(
      event=> <UpcomingList
      key={event.event_title.toString()}
      icon={event.icon}
      date={event.date}
      title={event.event_title}
      place={event.place}
      address={event.address}
      details={event.details}
      stateTime={event.time_start}
      endTime={event.time_end}
      img={event.img}
      contact1={event.contact1}
      contact1_email={event.contact1_email}
      />)}
    </div>
  );
}

class UpcomingList extends Component{
  constructor(){
    super()
    this.state={'isHidden':true,'style':'hidecontent'}
    this.handleClick=this.handleClick.bind(this)
  }
  handleClick(){
    if(this.state.isHidden){
      this.setState({'isHidden':false,'style':'showcontent'})
    }else{
      this.setState({'isHidden':true,'style':'hidecontent'})
    }
  }
  render(){
    const Title=(
      <p>
        <span className={this.props.icon}> </span> {this.props.date} {this.props.title}
        <span className='btn btn-secondary' onClick={this.handleClick}> MORE </span>
      </p>
    )
    const Content=(
      <div className={this.state.style}>
        <img src={require('../' + this.props.img)} alt={ this.props.act } className="img-thumbnail" />
        <div className='showcontentborder'>
          <p>Place: {this.props.place} {this.props.address}</p>
          <p>Details: {this.props.details}</p>
          <p>If you have any questions, please contact {this.props.contact1} <u> {this.props.contact1_email}</u></p>
        </div>
      </div>
    )
    return(
      <div className="text-left lead">
        {Title}
        {Content}
      </div>
    );
  }
}
export default class UpcomingEvents extends Component{
  render(){
    return(
      <div className="container lead">
        <p><strong>Upcoming Events</strong></p><hr className="line" />
        <Upcoming events={upcomingEvents} /><hr/>
      </div>
    )
  }
}
