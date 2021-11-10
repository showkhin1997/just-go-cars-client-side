import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/404.png';

const Notfound = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-12 col-md-7">
                    <img src={notFound} alt="" />
                </div>
                <div className="col-sm-12 col-md-5 mt-5 ms-5">
                    <h5>ERROR</h5>
                    <p>The requiested page dose not exist!</p>
                    <Link to="/home">
                        <button type="button" className="btn btn-warning primary-button fw-bold">Home</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Notfound;