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
        const procced = window.confirm('Are you  you want to delete the Order?');
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
        <div>
            <h2>My Cart</h2>
            <Table striped bordered hover responsive="sm">
                <thead>
                    <tr>
                        <th>Name</th>
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