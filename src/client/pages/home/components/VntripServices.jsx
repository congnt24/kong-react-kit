import React, { Component } from 'react';
import './style.css'

class VntripServices extends Component {
    render() {
        return (
            <section className="service-wrapper">
                <div className="container">
                    <div className="iconbox">
                        <div className="iconbox__item">
                            <div className="iconbox__img">
                                <div className="iconbox__img_price vnt-icon-bestprice"></div>
                            </div>
                            <h3>RẺ HƠN GIÁ RẺ NHẤT</h3>
                            <p>Ở đâu giá rẻ hơn,<span className="orange bold">Vntrip.vn hoàn tiền.</span> Khách hàng vẫn được mua với giá rẻ hơn giá rẻ nhất
                                <a className="iconbox__arrow" id="popup-best-price__btn" href="" onClick={e => this.openPopup(e)}><i className="fa fa-angle-right"></i></a></p>
                        </div>
                        <div className="iconbox__item">
                            <div className="iconbox__img">
                                <div className="iconbox__img_free vnt-icon-transform"></div>
                            </div>
                            <h3>MIỄN PHÍ ĐÓN SÂN BAY</h3>
                            <p>Tiết kiệm hơn với dịch vụ<span className="orange bold"> đón xe miễn phí</span> tại sân bay trên toàn quốc
                                <a className="iconbox__arrow" id="popup-free-car__btn" href="" ><i className="fa fa-angle-right"></i></a></p>
                        </div>
                        <div className="iconbox__item">
                            <div className="iconbox__img">
                                <div className="iconbox__img_247 vnt-icon-phone"></div>
                            </div>
                            <h3>HỖ TRỢ MIỄN PHÍ 24/7</h3>
                            <p>Gọi ngay 1800-2032 kể cả 2h sáng để được hỗ trợ.<br/>Hoàn toàn<span className="orange bold"> không - mất - phí!</span></p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default VntripServices;