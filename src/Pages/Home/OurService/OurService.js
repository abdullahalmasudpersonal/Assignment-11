import React from 'react';
import img1 from '../../../image/service/computer-service.jpg';
import img2 from '../../../image/service/laptop-service.jpg';
import img3 from '../../../image/service/mobile-service.jpg';
import './OurService.css';

const OurService = () => {
    return (
        <div>
            <hr className='w-50 hr-service mx-auto mt-5 ' />
            <h3 className='text-center fw-bold service-h3'>Our Service</h3>
            <hr className='w-50 hr-service mx-auto mb-5' />
            <div className='container mb-3'>
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    <div class="col">
                        <div class="card h-100 border-0">
                            <img src={img1} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title text-center">Computer</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. </p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 border-0">
                            <img src={img2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title text-center">laptop</h5>
                                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 border-0">
                            <img src={img3} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title text-center">Phone</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurService;