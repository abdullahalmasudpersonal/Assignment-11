import React from 'react';
import img1 from '../../../image/collection/pc.png';
import img2 from '../../../image/collection/laptop.png';
import img3 from '../../../image/collection/accessories.png';
import './OurCollection.css';

const OurCollection = () => {
    return (
        <div>
            <hr className='w-50 hr-colluction mx-auto mt-5' />
            <h3 className='text-center fw-bold colluction-h3'>Our Collection</h3>
            <hr className='w-50 hr-colluction mx-auto mb-5' />
            <div className='container'>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card h-100 border-0">
                            <img src={img1} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Computer</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 border-0">
                            <img src={img2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">laptop</h5>
                                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 border-0">
                            <img src={img3} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Computer ccessories</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurCollection;