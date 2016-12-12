import React from 'react'
import { Link } from 'react-router';

export default class Header extends React.Component{
	constructor(){
		super()
		this.state ={topClass:' topnav'}
		this.showHamburger=this.showHamburger.bind(this)
	}
	showHamburger(){
		if(this.state.topClass === 'topnav'){
			this.setState({topClass:'topnav responsive'})
		}else{
			this.setState({topClass:'topnav'})
		}
	}
	render(){
		return(
			<div>
				<div className="container text-center " >
					<img src={ require('../Images/TAANJ.png') } className="img-center" alt="logo" />
					<p className="lead">Taiwanese Association of America in New Jersey Chapter</p>
					<p>P.O. Box 604, Princeton Junction, NJ 08550</p>
					<ul className={this.state.topClass} id="TopNav">
						<li><Link to="">HOME</Link></li>
						<li><Link to="Photos">PHOTOS</Link></li>
						<li><Link to="About">ABOUT</Link></li>
						<li><Link to="Links">LINKS</Link></li>
						<li><Link to="Contact">CONTACT</Link></li>
						<li className="icon"><Link to="" onClick={this.showHamburger}>&#9776;</Link></li>
					</ul>
				</div>
				<hr/>
			</div>
		)
	}
}
