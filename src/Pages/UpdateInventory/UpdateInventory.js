import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateInventory = () => {
    const { inventoriesId } = useParams();
    const [inventories, setInventories] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/inventories/${inventoriesId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setInventories(data));
    }, [])

    return (
        <div className='inventory mt-5'>
        <img className='w-100 rounded' height='180px' src={inventories.img} alt='' />
        <div className='px-3'>
            <h3 className='brandname'>{inventories.name}</h3>
            <h6>Price: ${inventories.price}</h6>
            <p className='mb-1'>quantity: {inventories.quantity}</p>
            <strong>
                <p className='mb-1'>Seller: {inventories.seller}</p>
            </strong>
            <small>
                <p className='mb-0'>{inventories.description}</p>
            </small>
        </div>
    </div>
    );
};

export default UpdateInventory;