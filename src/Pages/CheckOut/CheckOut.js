import React from 'react';
import { useParams } from 'react-router-dom';
import useInventoriesDetail from '../../hooks/UseInventoriesDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './CheckOut.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const CheckOut = () => {
    const { inventoriesId } = useParams();
    const [inventories] = useInventoriesDetail(inventoriesId);
    const [user] = useAuthState(auth);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            inventories: inventories.name,
            inventoriesId: inventoriesId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('http://localhost:5000/order',order)
        .then(response =>{
            const {data} = response;
            if(data.insertedId){
                toast('Your order is booked!!!');
                event.target.reset();
            }
        })
    }
    return (
        <div className='w-50 mx-auto checkout mt-5'>
            <h3>Pleace Order: {inventories.name}</h3>
            <form onSubmit={handlePlaceOrder}>
                <input className="w-100 mb-2" type="text" value={user?.displayName} name="name" placeholder="name" required readOnly disabled />
                <br />
                <input className="w-100 mb-2" type="email" value={user?.email} name="email" placeholder="email" required readOnly disabled />
                <br />
                <input className="w-100 mb-2" type="text" value={inventories.name} name="inventories" placeholder="inventories" required />
                <br />
                <input className="w-100 mb-2" type="text" name="address" placeholder="address" required autoComplete='off' />
                <br />
                <input className="w-100 mb-2" type="text" name="phone" placeholder="phone" required />
                <br />
                <input className='' type="submit" value="Please Order" />
            </form>
        </div>
    );
};

export default CheckOut;