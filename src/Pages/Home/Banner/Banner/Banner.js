import React from 'react';
import BannerCarousel from '../BannerCarousel/BannerCarousel';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-bg">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-4 mt-4">
                        <h2><span className="welcome-text">Welcome to</span><br /> <span className="site-name text-wrap"><span className="justgo-text">JustGO</span>Cars</span></h2> <br />
                        <button type="button" className="btn btn-warning primary-button">Explore</button>
                    </div>
                    <div className="col-sm-8">
                        <BannerCarousel></BannerCarousel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;