import React, {Component} from 'react';
import {upcomingEvents} from '../RowData/RowUpcomingEvents'
import { Button } from 'react-bootstrap'

function Upcoming(props){
  return(
    <div className="container lead">
      <p><strong>Upcoming Events</strong></p><hr className="line" />
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
        <hr/>
    </div>
  );
}

class UpcomingList extends Component{
  constructor(){
    super()
    this.state={isHidden:true,style:'hidecontent'}
    this.handleClick=this.handleClick.bind(this)
  }
  handleClick(){
    this.setState({
      isHidden:!this.state.isHidden,
      style:this.state.isHidden ?'showcontent' :'hidecontent'
    })
  }

  render(){
    const Title=(
      <p>
        <span className={this.props.icon}> </span> {this.props.date} {this.props.title}
        <Button bsStyle="link" onClick={this.handleClick}> MORE </Button>
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
      <Upcoming events={upcomingEvents} />
    )
  }
}
