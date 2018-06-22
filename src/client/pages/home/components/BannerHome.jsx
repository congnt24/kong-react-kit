import React from 'react';
import Slider from "react-slick";
import './style.css'
class BannerHome extends React.Component {
    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        let banners = this.props.banners.map(bn => {
            return (
                <div key={bn.id} className="slider__item">
                    <img src={bn.url} alt={bn.alt}/>
                </div>
            )
        });

        return (
            <div className="slider_home">
                <Slider {...settings}>
                    {banners}
                </Slider>
            </div>
        );
    }
}

export default BannerHome;
