import React, { useState } from 'react';
import { useForm } from 'react-hook-form';


const DashboardHome = () => {
    const { register, handleSubmit, reset } = useForm();
    const [reviewData, setReviewData] = useState(false);
    const onSubmit = data => {
        fetch('https://intense-cliffs-24776.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    reset();
                    setReviewData(true);
                }
            })
    };

    return (
        <div className="add-product">
            <h1 className="mb-5 text-center section-title">DASHBOARD</h1>
            <h5 className="mb-5 text-center section-title">Please Give your important feedback</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
                {
                    reviewData && <div className="alert alert-success w-75 text-center" role="alert">
                        Thanks for Your Feedback!
                    </div>
                }
                <input {...register("email", { required: true, maxLength: 20 })} placeholder="Email" required />
                <textarea {...register("feedback")} placeholder="Feedback" required />
                <input {...register("rating")} placeholder="Rate us(0-5)" required />
                <input type="submit" className="btn btn-warning primary-button" />
            </form>
        </div>
    );
};

export default DashboardHome;