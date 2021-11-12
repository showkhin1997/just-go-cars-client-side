import React from 'react';

const ManageAllOrder = ({ order }) => {
    const { buyerName, email, phone, productName, price } = order;
    return (
        <tr>
            <td>{buyerName}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{productName}</td>
            <td>{price}</td>
            {/* <button className="btn btn text-success" onClick={() => handleApproved(true)}>{!isApproved ? 'Procced' : 'Approved'}</button> */}

            {/* <button onClick={() => handleDeleteUsers(_id)} type="button" className="btn btn text-danger">Delete</button> */}
        </tr>
    );
};

export default ManageAllOrder;