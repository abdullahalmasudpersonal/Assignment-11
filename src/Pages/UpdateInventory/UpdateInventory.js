import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './UpdateInventory.css';
import useInventoriesDetail from '../../hooks/UseInventoriesDetail';

const UpdateInventory = () => {
    const { inventoriesId } = useParams();
    const [inventories] = useInventoriesDetail(inventoriesId);

    return (
        <div className='inventory updateinventory mt-5'>
            <img className='w-100 rounded' height='180px' src={inventories.img} alt='' />
            <div className='px-3'>
                <h3 className='brandname'>{inventories.name}</h3>
                <h6>Price: ${inventories.price}</h6>
                <p className='mb-1'>quantity: {inventories.quantity}</p>
                <p className='mb-1 fw-bold'> Id: {inventoriesId}</p>
                <strong>
                    <p className='mb-1'>Seller: {inventories.seller}</p>
                </strong>
                <small>
                    <p className='mb-0'>{inventories.description}</p>
                </small>
                <div className='addtocart'>
                    <Link to={`/checkout/${inventoriesId}`}>
                        <button>Add to cart</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default UpdateInventory;