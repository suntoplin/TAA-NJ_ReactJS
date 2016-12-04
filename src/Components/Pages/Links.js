import React, { Component } from 'react'
import { Row, Grid, Col } from 'react-bootstrap'
import {otherOrg, sponsorList} from '../../RowData/RowLinks'
import { Link } from 'react-router'

// More About TW
function MoreAboutTW(props){
	return(
		<Row className="show-grid lead">
			{props.groups.map(group=> <AboutTWOrg key={group.org.toString()} url={group.url} img={group.img} org={group.org}/>)}
		</Row>
		)
	}
function AboutTWOrg(props){
	return(
		<Col sm={6} className="text-center">
			<Link to={props.url} target="_blank">
				<img src={require('../../'+ props.img)} alt={props.org} height='80'/>
				<p>{props.org}</p>
			</Link>
			<hr/>
		</Col>
	)
}

// SponsorList w/o picture
function Sponsors(props) {
	return(
		<Row className="show-grid lead">
			{props.List.map(List=> <SponsorList key={List.TEL.toString()} name={List.Title_Name} tel={List.TEL} />)}
		</Row>
	)
}

function SponsorList(props) {
	return(
		<Col sm={12} className="text-center">
			<p>{props.name}</p>
			<p>{props.tel}</p>
			<hr width="50"/>
		</Col>
	)
}

// SponsorList with picture
function SponsorsWithPic() {
	return(
		<Row className="show-grid lead text-center">
			<Col sm={6}>
				<Link to="https://www.china-airlines.com/hk/en" target="_blank">
					<img src={require('../../Images/sponsor/china_airlines.gif')} alt="Loading" className="img-thumbnail" />
				</Link>
			</Col>
			<Col sm={6}>
				<Link to="http://www.edisonplantsandflowers.com/" target="_blank">
					<img src={require('../../Images/sponsor/flower.gif')} alt="Loading" className="img-thumbnail" />
				</Link>
			</Col>
			<Col sm={12}>
				<Link to="http://taiwaneseamericanhistory.org/" target="_blank">
					<img src={require('../../Images/sponsor/TAHistorical.jpg')} alt="Loading" className="img-thumbnail" />
				</Link>
			</Col>
			<Col sm={5}>
				<Link to="http://lakehavasushogun.com/" target="_blank">
					<img src={require('../../Images/sponsor/ShoGun.png')} alt="Loading" className="img-thumbnail" />
				</Link>
			</Col>
			<Col sm={7}>
				<Link to="http://www.chiasinfarms.com/" target="_blank">
					<img src={require('../../Images/sponsor/Chia-Sin.gif')} alt="Loading" className="img-thumbnail" />
				</Link>
			</Col>
			<Col sm={12}>
				<Link to="http://www.pacific-times.com/" target="_blank">
					<img src={require('../../Images/sponsor/PacificTimes.jpg')} alt="Loading" className="img-thumbnail" />
				</Link>
			</Col>
			<Col sm={4} className='text-center'>
				<Link to="http://kwtownesquare.yourkwoffice.com/" target="_blank">
					<img src={require('../../Images/sponsor/KellerWilliams.png')} alt="Loading" className="img-thumbnail" />
					<p>Linda Lin Kosley </p>
					<p>TEL: 908-766-0085</p>
				</Link>
			</Col>
			<Col sm={4} className='text-center'>
				<Link to="http://yuchihchiao.bhhsnj.com/eng" target="_blank">
					<img src={require('../../Images/sponsor/BerkshireHathaway.png')} alt="Loading" className="img-thumbnail" />
					<p>Chiao, Yu-Chih (趙玉枝)</p>
					<p>TEL: 732-469-1516 ext.331</p>
				</Link>
			</Col>
			<Col sm={4} className='text-center'>
				<Link to="http://templegourmet.com/" target="_blank">
					<img src={require('../../Images/sponsor/TempleGourmetChinese.jpg')} alt="Loading" className="img-thumbnail" />
				</Link>
			</Col>
			<Col sm={4} className='text-center'>
				<Link to="https://www.hsuginseng.com/us/control/main" target="_blank">
					<img src={require('../../Images/sponsor/Hsu.png')} alt="Loading" className="img-thumbnail" />
				</Link>
			</Col>
		</Row>
	)
}

// Page Frame
export default class Links extends Component {
	render(){
		return(
			<Grid>
				<p className='lead'>More about Taiwan</p>
				<hr className="line" />
				<MoreAboutTW groups={otherOrg}/>
				<p className='lead'>敬請支持我們的贊助者/TAA-NJ Sponsors</p>
				<hr className="line" />
				<SponsorsWithPic />
				<hr width="50"/>
				<Sponsors List={sponsorList}/>
			</Grid>
		)
	}
}
