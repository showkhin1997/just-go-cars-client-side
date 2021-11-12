import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import bestDeal1 from '../../../../images/bestdeals/1.jpg';
import bestDeal2 from '../../../../images/bestdeals/2.jpg';
import bestDeal3 from '../../../../images/bestdeals/3.jpg';
import bestDeal4 from '../../../../images/bestdeals/4.jpg';
import bestDeal5 from '../../../../images/bestdeals/5.jpg';
import bestDeal6 from '../../../../images/bestdeals/6.jpg';
import './BestDeals.css';


const BestDeals = () => {
    return (
        <div className="container mt-5" id="bestdeal">
            <h2 className="text-center mb-5 header-text">Best Deals</h2>
            <h5 className="mt-4 mb-3 text-primary text-center fw-bold fst-italic">WINTER Offer Every deal have 25% OFF</h5>
            <Container className="g-2 best-deal-container">
                <Row>
                    <Col> <img src={bestDeal1} className="w-100" alt="" /></Col>
                    <Col xs={6}><img src={bestDeal5} className="w-75" alt="" /></Col>
                    <Col><img src={bestDeal3} className="w-100" alt="" /></Col>
                </Row>
                <Row>
                    <Col><img src={bestDeal4} className="w-75" alt="" /></Col>
                    <Col xs={5}><img src={bestDeal6} className="w-50" alt="" /></Col>
                    <Col> <img src={bestDeal2} className="w-100" alt="" /></Col>
                </Row>
            </Container>
        </div>

        // <div className="container">
        //     <div classname="container">
        //         <div classname="row">
        //             <div classname="col">
        //                
        //             </div>
        //             <div classname="col-6">
        //                 
        //             </div>
        //             <div classname="col">
        //                 
        //             </div>
        //         </div>
        //         <div classname="row">
        //             <div classname="col">
        //                 
        //             </div>
        //             <div classname="col-5">
        //                 
        //             </div>
        //             <div classname="col">
        //                
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default BestDeals;