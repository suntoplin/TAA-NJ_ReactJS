import React from 'react';

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
export default class UpcomingEvents extends React.Component{
	render(){
		return(
			<div className="container lead">
				<p><strong>Upcoming Events</strong></p>
				<hr className="line" />
                <Upcoming events={upcomingEvents} />
                <hr/>
			</div>
		)
	}
}

    // <div class="container lead">
    //   <p class='lead'><strong>Upcoming Events</strong></p>
    //   <hr style="border-color:#95989A;">
    //   <div id="upcomingEvents"></div>
    //    <script type="text/javascript">
    //     function UpcomingEvents(events){
    //       var out ="";
    //       if (events.length==0){ out += '<div class="text-left lead"> Take a break! Coming soon~~ </div>';}
          
    //       else{
    //         for (var i = 0; i < events.length; i++) {
    //           out += '<div class="text-left lead"> ';
    //           out += '<p><span class="' + events[i].icon + ' "></span> ' + events[i].date + ' ' + events[i].event_title;
    //           out += '<a href="#Event_'+i+'" class="btn" data-toggle="collapse" style="outline: none;">MORE</a></p>';
    //           out += '</div>';
    //           out += '<div id="Event_'+i+'" class="collapse" >';
    //           if (events[i].img) {
    //             out += '<div ><img src="' + events[i].img +'" class="img-responsive" > </div>'; 
    //           };
    //           out += '<pre style="background-color:white;border-color:white;font-size:14px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;color:#808080;">';
    //           if (events[i].place) {
    //             out += 'Place: '+ events[i].place;
    //           };
    //           if (events[i].address) {
    //             out += ' (' + events[i].address +')';
    //           };
    //           if (events[i].time_start) {
    //             out += '\n\nTime: ' + events[i].time_start +' - ' +events[i].time_end ;
    //           };  
    //           if (events[i].details) {
    //             out += '\n\nDetails: '+ events[i].details +'\n\n';
    //           }else{
    //             out += '\n\nDetails: TBD';
    //           };
    //           if (events[i].contact1) {
    //             out += 'If you have any questions, please contact '+ events[i].contact1_title +' '+ events[i].contact1;
    //             out += '<a href="mailto:'+events[i].contact1_email+'"> '+events[i].contact1_email+'</a>';
    //           };
    //           if (events[i].contact2) {
    //             out += ' or '+ events[i].contact2;
    //             out += '<a href="mailto:'+events[i].contact2_email+'"> '+events[i].contact2_email+'</a>';
    //           };
    //           out += '</pre> ';
    //           out += '</div>';
    //         };
    //       } ;

    //       $('#upcomingEvents').html(out);          
    //     }
    //   </script>
    //   <hr>
    // </div>