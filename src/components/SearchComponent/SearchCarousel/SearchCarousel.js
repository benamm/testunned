import React, { Component } from 'react';
import Slider from 'react-slick';
import { connect } from 'trim-redux';

class SearchCarousel extends Component {
    previous = () => {
        this.slider.slickPrev();
    }

    next = () => {
        this.slider.slickNext();
    }

    render() {
        let aa = '';
        if (this.props.sliderItems) {
            aa = <Slider ref={sliderControlBtns => (this.slider = sliderControlBtns)} {...setting}>
                {
                    this.props.sliderItems.map((el, ss) => {
                        return <div key={ss} className="carousel-search-content-items d-flex">
                            <img src={`http://tpi.uneed.ir:7100/m/` + el.media} alt="" className="img-fluid" />

                        </div>
                    })
                }
            </Slider>
        }
        const setting = {
            infinite: false,
            slidesToShow: 1,
            SlideToScrol: 1,
            dots: false,
            arrows: false
        }

        return (
            <div className="col-md-12 px-0 carousel-search-content">
                <span className="btn icon-arrows_left left nav-slider-arrow" onClick={this.previous}></span>
                {aa}
                <span className="btn icon-arrows_right right nav-slider-arrow" onClick={this.next}></span>
            </div>
        )
    }
}

const mstp = state => ({
    sliderItems: state.sliderItems
});

export default connect(mstp)(SearchCarousel);
