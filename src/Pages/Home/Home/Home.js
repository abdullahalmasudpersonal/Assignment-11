import React, { useEffect, useState } from 'react';
import Inventory from '../../Shared/Inventory/Inventory';
import Banner from '../Banner/Banner';
import OurCollection from '../OurCollection/OurCollection';
import OurService from '../OurService/OurService';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch('https://tranquil-wave-46370.herokuapp.com/inventories')
            .then(res => res.json())
            .then(data => setInventories(data));
    });

    return (
        <div>
            <Banner />
            <hr className='w-50 inventory-hr mx-auto mt-5' />
            <h2 className='inventory-heading mt-2 align-items-center d-flex justify-content-center mb-0'>Inventories (<strong>
                {inventories.length} </strong>) </h2>
            <hr className='w-50 inventory-hr mx-auto mt-3' />

            <div className='container inventories py-5'>
                {
                    inventories.slice(0, 6).map(inventory => <Inventory
                        key={inventory._id}
                        inventory={inventory}
                    ></Inventory>)
                }
            </div>
            <Link to='/inventories' className='text-decoration-none'>
                <button className='see-more'><span className='d-flex justify-content-center align-items-center m-0'>See more</span></button>
            </Link>
            <div className='text-center m-5'>
                <Link to='/manageinventories'>
                    <button className='rounded w-50 inven-manag fw-bold'>Manage Inventories</button>
                </Link>
            </div>
            <OurCollection />
            <OurService />
        </div>
    );
};

export default Home;