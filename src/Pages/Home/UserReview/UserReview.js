import { Rating, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import './UserReview.css';

const UserReview = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="mb-5 mt-5" id="reviews">
            <h2 className="text-center mb-5 header-text">Rivews</h2>
            {
                reviews.map(review =>
                    <Card className="container mb-2 border-0 mx-auto"
                        key={review._id}
                    >
                        <Card.Body className="bg-review-container">
                            <Card.Text>
                                <Typography component="legend">{review.email}</Typography>
                                <Rating name="read-only" value={review.rating} readOnly />
                                <Card.Title>{review.feedback}</Card.Title>
                            </Card.Text>
                        </Card.Body>
                    </Card>)
            }
        </div>
    );
};

export default UserReview;