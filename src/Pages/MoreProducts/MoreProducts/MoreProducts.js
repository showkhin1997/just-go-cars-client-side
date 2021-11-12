import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Navigation from '../../Shared/Navigation/Navigation';
import MoreProduct from '../MoreProduct/MoreProduct';

const MoreProducts = () => {
    const [moreProducts, setMoreProducts] = useState([]);
    useEffect(() => {
        fetch('https://intense-cliffs-24776.herokuapp.com/moreProducts')
            .then(res => res.json())
            .then(data => setMoreProducts(data))
    }, [])
    return (
        <div className="mb-5">
            <Navigation></Navigation>
            <h2 className="text-center mb-5 header-text">Explore More Cars</h2>
            <Row xs={1} md={3} className="g-4 container mx-auto">
                {
                    moreProducts.map(moreProduct => <MoreProduct
                        key={moreProduct._id}
                        moreProduct={moreProduct}
                    ></MoreProduct>)
                }
            </Row>
        </div>
    );
};

export default MoreProducts;