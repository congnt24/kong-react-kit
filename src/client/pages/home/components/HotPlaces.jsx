import React from 'react';
import {Link} from 'react-router-dom';
import './style.css'

class HotPlaces extends React.Component {
    componentDidMount() {

    }

    render() {
        return (
            <section className="destination-wrapper">
                <div className="container">
                    <div className="heading">
                        <h2>NHỮNG ĐIỂM ĐẾN HẤP DẪN NHẤT HIỆN NAY</h2>
                    </div>
                    <div className="destination">
                        <div className="row">
                            <div className="col-xs-12 col-sm-4">
                                <div className="destination__item">
                                    <Link to="/khach-san/ha-noi">
                                        <img src="https://statics.vntrip.vn/website/images/dest.373x181.01.png" alt="Ha Noi"/>
                                        <h4>Hà Nội</h4>
                                        <ul>
                                            <li><i className="fa fa-search"></i> 1000 khách sạn Hà Nội</li>
                                            <li><i className="fa fa-search"></i> Cẩm nang du lịch Hà Nội</li>
                                            <li><i className="fa fa-search"></i> Khuyến mại du lịch Hà Nội</li>
                                        </ul>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-2">
                                <div className="destination__item">
                                    <Link to="/khach-san/da-nang">
                                        <img src="https://statics.vntrip.vn/website/images/dest.181x181.01.png" alt="Da Nang"/>
                                        <h4>Đà Nẵng</h4>
                                        <ul>
                                            <li><i className="fa fa-search"></i> 600 khách sạn Đà Nẵng</li>
                                            <li><i className="fa fa-search"></i> Cẩm nang du lịch Đà Nẵng</li>
                                            <li><i className="fa fa-search"></i> Khuyến mại du lịch Đà Nẵng</li>
                                        </ul>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-2">
                                <div className="destination__item">
                                    <Link to="/khach-san/quang-nam/hoi-an">
                                        <img src="https://statics.vntrip.vn/images/dest/dest.181x181.02.png" alt="Hoi An"/>
                                        <h4>Hội An</h4>
                                        <ul>
                                            <li><i className="fa fa-search"></i> 500 khách sạn Hội An</li>
                                            <li><i className="fa fa-search"></i> Cẩm nang du lịch Hội An</li>
                                            <li><i className="fa fa-search"></i> Khuyến mại du lịch Hội An</li>
                                        </ul>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-4">
                                <div className="destination__item">
                                    <Link to="/khach-san/sai-gon-ho-chi-minh">
                                        <img src="https://statics.vntrip.vn/images/dest/dest.373x181.02.png" alt="Tp.HCM"/>
                                        <h4>TP Hồ Chí Minh</h4>
                                        <ul>
                                            <li><i className="fa fa-search"></i> 1500 khách sạn TP Hồ Chí Minh</li>
                                            <li><i className="fa fa-search"></i> Cẩm nang du lịch TP Hồ Chí Minh</li>
                                            <li><i className="fa fa-search"></i> Khuyến mại du lịch TP Hồ Chí Minh</li>
                                        </ul>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-4">
                                <div className="destination__item">
                                    <Link to="/khach-san/kien-giang/phu-quoc">
                                        <img src="https://statics.vntrip.vn/images/dest/dest.373x181.03.png" alt="Phu Quoc"/>
                                        <h4>Phú Quốc</h4>
                                        <ul>
                                            <li><i className="fa fa-search"></i> 350 khách sạn Phú Quốc</li>
                                            <li><i className="fa fa-search"></i> Cẩm nang du lịch Phú Quốc</li>
                                            <li><i className="fa fa-search"></i> Khuyến mại du lịch Phú Quốc</li>
                                        </ul>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xs-6 col-sm-4">
                                <div className="destination__item">
                                    <Link to="/khach-san/khanh-hoa/nha-trang">
                                        <img src="https://statics.vntrip.vn/images/dest/dest.373x181.04.png" alt="Nha Trang"/>
                                        <h4>Nha Trang</h4>
                                        <ul>
                                            <li><i className="fa fa-search"></i> 500 khách sạn Nha Trang</li>
                                            <li><i className="fa fa-search"></i> Cẩm nang du lịch Nha Trang</li>
                                            <li><i className="fa fa-search"></i> Khuyến mại du lịch Nha Trang</li>
                                        </ul>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-4">
                                <div className="destination__item">
                                    <Link to="khach-san/lam-dong/da-lat">
                                        <img src="https://statics.vntrip.vn/images/dest/dest.373x181.05.png" alt="Da Lat"/>
                                        <h4>Đà Lạt</h4>
                                        <ul>
                                            <li><i className="fa fa-search"></i> 500 khách sạn Đà Lạt</li>
                                            <li><i className="fa fa-search"></i> Cẩm nang du lịch Đà Lạt</li>
                                            <li><i className="fa fa-search"></i> Khuyến mại du lịch Đà Lạt</li>
                                        </ul>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default HotPlaces;