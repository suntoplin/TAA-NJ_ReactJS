import React,{Component} from 'react'
import Slider from 'react-slick'
import {RowAims} from '../RowData/RowAims'

class AimsSlider extends Component{
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
        {this.props.event.map(
          aim =>
          (
            <div key={aim.title.toString()}>
              <img src={require('../' + aim.img)} alt='Lazy loading' className="img-thumbnail"  />
              <h3 className="text-center lead"><strong>“ {aim.title} “</strong></h3>
            </div>
          )
        )}
        </Slider>
        <br/><hr/>
      </div>
    )
  }
}

export default class Aims extends Component{
	render(){
		return(
      <AimsSlider event={RowAims} />
		)
	}
}
