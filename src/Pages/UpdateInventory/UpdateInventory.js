import React from 'react';
import { Link, useParams } from 'react-router-dom';

const UpdateInventory = ({inventory}) => {
   /*  const { _id, name, img, description, price, quantity, seller } = inventory; */
    const { inventoriesId } = useParams();

    return (
        <div>
            <h2>Update Inventory: {inventoriesId}</h2>
            <h3 className='brandname'>Name:{inventoriesId.name}</h3>
        </div>
    );
};

export default UpdateInventory;