import React, {Component} from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import './styles.scss';

export default  class SliderComponent extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            slidesToShow: 1,
            autoplaySpeed: 2000,
            arrows : false,
            slidesToScroll: 1
        };
        const { classNames } = this.props;
        return (
            <div className={"custom-slider " + (classNames ? classNames : '')}>
                <div className="slider-wrap">
                    <div className="sliders-content container">
                        <Slider {...settings}>
                            <div className="slider-item">
                                <div className="slider-img">
                                    <img src="../../../public/images/banner-img2.png" alt="" />
                                </div>
                                <div className="slider-content">
                                    <h3>Is it a pen? Is it a calculator?</h3>
                                    <p>Well, the IDFC MF SIP Pen is both.</p>
                                    <Link to="/" className="idfc-main-button"> Know More </Link>
                                </div>
                            </div>
                            <div className="slider-item">
                                <div className="slider-img">
                                    <img src="../../../public/images/banner-img1.png" alt="" />
                                </div>
                                <div className="slider-content">
                                    <h3>Tools, Merchandise & More</h3>
                                    <p>One place that answers all your needs</p>
                                    <Link to="/" className="idfc-main-button"> Know More </Link>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }
}
