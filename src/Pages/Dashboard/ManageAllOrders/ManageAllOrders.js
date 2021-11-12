import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://intense-cliffs-24776.herokuapp.com/order')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    const handleDelete = id => {
        const procced = window.confirm('Are you  you want to delete the Order?');
        if (procced) {
            const url = `https://intense-cliffs-24776.herokuapp.com/order/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remaining = orders.filter(orders => orders._id !== id);
                        setOrders(remaining);
                    }
                })
        }
    }
    return (
        <div className="container">
            <h2 className="text-center mt-5 mb-4">Manage All Orders</h2>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Product</th>
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
                                <td>{order.phone}</td>
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

export default ManageAllOrders;