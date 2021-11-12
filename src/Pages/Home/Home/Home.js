import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner/Banner';
import Products from '../Products/Products/Products';
import UserReview from '../UserReview/UserReview';
import BestDeals from './BestDeals/BestDeals';



const Home = () => {
    return (
        <div id="home">
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <BestDeals></BestDeals>
            <UserReview></UserReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;