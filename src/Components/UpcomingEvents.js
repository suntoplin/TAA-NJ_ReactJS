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
  }
]

function Upcoming(props){
  return(
    <div>
    {props.events.map(
      event=> <UpcomingList
      key={event.icon.toString()}
      icon={event.icon}
      date={event.date}
      title={event.event_title}
      place={event.place}
      address={event.address}
      details={event.details}
      stateTime={event.time_start}
      endTime={event.time_end} />)}
      </div>
    );
  }

function UpcomingList(props){
  return(
    <div className="text-left lead">
    <p>
    <span className={props.icon}></span>
    {props.date} {props.title}
    <a href="#" className='btn'> MORE</a>
    </p>
    </div>
  );
}
export default class UpcomingEvents extends Component{
  render(){
    return(
      <div className="container lead">
      <p>
        <strong>Upcoming Events</strong>
      </p>
      <hr className="line" />
      <Upcoming events={upcomingEvents} />
      <hr/>
      </div>
    )
  }
}
