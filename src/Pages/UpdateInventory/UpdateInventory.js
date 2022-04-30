import React from 'react';
import { Link, useParams } from 'react-router-dom';

const UpdateInventory = () => {
    const { inventoriesId } = useParams();

    return (
        <div>
            <h2>Update Inventory: {inventoriesId}</h2>

        </div>
    );
};

export default UpdateInventory;