import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const [data, setData] = useState(false);
    const onSubmit = data => {
        fetch('http://localhost:5000/products', {
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
                    setData(true);
                }
            })
    };
    return (
        <div className="add-product">
            <h2 className="mb-5 text-center section-title">Adda a Product</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                {
                    data && <div className="alert alert-success w-75 text-center" role="alert">
                        Product Added Successfully!
                    </div>
                }
                <input {...register("productName", { required: true, maxLength: 20 })} placeholder="Name" required />
                <input {...register("manufacturer", { required: true, maxLength: 20 })} placeholder="Manufacturer" required />
                <textarea {...register("description")} placeholder="Description" required />
                <input {...register("img")} placeholder="Image url" required />
                <input type="number" {...register("price")} placeholder="Price" required />
                <input type="submit" className="btn btn-warning primary-button" />
            </form>
        </div>
    );
};

export default AddProduct;