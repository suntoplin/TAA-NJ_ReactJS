import React,{Component} from 'react'
import Slider from 'react-slick'
import {RowAims} from '../RowData/RowAims'

class SimpleSlider extends Component{
    render(){
      const settings = {
        dots: true,
        infinite: true,
        lazyLoad: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };
    return(
      <div className="container">
        <Slider {...settings}>
          <div>
            <img src={require('../' + this.props.event[0].img)} alt='Loading' className="img-thumbnail" />
            <h3 className="text-center lead"><strong>“</strong> {this.props.event[0].title} <strong>“</strong></h3>
          </div>
          <div>
            <img src={require('../' + this.props.event[1].img)} alt='Loading' className="img-thumbnail" />
            <h3 className="text-center lead"><strong>“</strong> {this.props.event[1].title} <strong>“</strong></h3>
          </div>
          <div>
            <img src={require('../' + this.props.event[2].img)} alt='Loading' className="img-thumbnail" />
            <h3 className="text-center lead"><strong>“</strong> {this.props.event[2].title} <strong>“</strong></h3>
          </div>
          <div>
            <img src={require('../' + this.props.event[3].img)} alt='Loading' className="img-thumbnail" />
            <h3 className="text-center lead"><strong>“</strong> {this.props.event[3].title} <strong>“</strong></h3>
          </div>
          <div>
            <img src={require('../' + this.props.event[4].img)} alt='Loading' className="img-thumbnail" />
            <h3 className="text-center lead"><strong>“</strong> {this.props.event[4].title} <strong>“</strong></h3>
          </div>
        </Slider>
        <br/>
        <hr/>
      </div>
    )
  }
}

export default class Aims extends Component{
	render(){
		return(
      <SimpleSlider event={RowAims} />
		)
	}
}
