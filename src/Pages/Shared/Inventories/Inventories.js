import React, { useEffect, useState } from 'react';
import Inventory from '../Inventory/Inventory';
import './Inventories.css';

const Inventories = () => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/inventories')
            .then(res => res.json())
            .then(data => setInventories(data));
    }, []);
    return (
        <div className='container inventories py-5'>
            {
                inventories.map(inventory => <Inventory
                    key={inventory._id}
                    inventory={inventory}
                ></Inventory>)
            }
        </div>
    );
};

export default Inventories;