import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Inventory.css';

const Inventory = ({ inventory }) => {
    const { _id, name, img, description, price, quantity, seller } = inventory;
    const navigate = useNavigate();

    const navigateToUpdateInventory = _id =>{
        navigate(`/inventories/${_id}`); 
    }

    return (
        <div className='inventory '>
            <img className='w-100' height='180px' src={img} alt='' />
            <div className='px-3'>
                <h3 className='brandname'>{name}</h3>
                <h6>Price: ${price}</h6>
                <p className='mb-1'>quantity: {quantity}</p>
                <strong>
                    <p className='mb-1'>Seller: {seller}</p>
                </strong>
                <small>
                    <p className='mb-0'>{description}</p>
                </small>
            </div>
            <button onClick={() => navigateToUpdateInventory(_id)} className='cartbtn fw-bold'>Update</button>
        </div>
    );
};

export default Inventory;