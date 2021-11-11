import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/order?email=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleDelete = id => {
        const procced = window.confirm('Are you  you want to delete the Product?');
        if (procced) {
            const url = `http://localhost:5000/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remaining = orders.filter(order => order._id !== id);
                        setOrders(remaining);
                    }
                })
        }
    }

    return (
        <div className="container">
            <h2 className="text-center mt-5 mb-4">My Orders</h2>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Buyer</th>
                        <th>Email</th>
                        <th>Car</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order =>
                            <tr
                                key={order._id}
                            >
                                <td>{order.buyerName}</td>
                                <td>{order.email}</td>
                                <td>{order.productName}</td>
                                <td>{order.price}</td>
                                <Button onClick={() => handleDelete(order._id)} variant="danger text-dark fw-bold">Delete</Button>
                            </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default MyOrders;