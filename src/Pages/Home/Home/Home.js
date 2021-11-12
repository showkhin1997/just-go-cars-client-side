import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner/Banner';
import Products from '../Products/Products/Products';
import UserReview from '../UserReview/UserReview';



const Home = () => {
    return (
        <div id="home">
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <UserReview></UserReview>

        </div>
    );
};

export default Home;