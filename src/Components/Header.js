import React from 'react'
import { Link } from 'react-router';

export default class Header extends React.Component{
	render(){
		return(
			<div>
				<div className="container text-center" >			
					<img src={ require('../Images/TAANJ.png') } className="img-center" alt="logo" />
					<p className="lead">Taiwanese Association of America in New Jersey Chapter</p> 
					<p>P.O. Box 604, Princeton Junction, NJ 08550</p>  
					<ul className="nav navbar-nav" >
						<li><Link to="">HOME</Link></li>	
						<li><Link to="Photos">PHOTOS</Link></li>
						<li><Link to="About">ABOUT</Link></li>
						<li><Link to="Links">LINKS</Link></li>
					</ul>		
				</div>
				<hr/>
			</div>
		)
	}
}




    

				
