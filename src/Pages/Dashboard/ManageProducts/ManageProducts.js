import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://intense-cliffs-24776.herokuapp.com/moreProducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleDelete = id => {
        const procced = window.confirm('Are you  you want to delete the Order?');
        if (procced) {
            const url = `https://intense-cliffs-24776.herokuapp.com/moreProducts/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remaining = products.filter(product => product._id !== id);
                        setProducts(remaining);
                    }
                })
        }
    }
    return (
        <div className="container">
            <h2 className="text-center mt-5 mb-4">Manage Products</h2>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Manufacturer</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product =>
                            <tr
                                key={product._id}
                            >
                                <td>{product.productName}</td>
                                <td>{product.manufacturer}</td>
                                <td>{product.price}</td>
                                <Button onClick={() => handleDelete(product._id)} variant="danger text-dark fw-bold">Delete</Button>
                            </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageProducts;