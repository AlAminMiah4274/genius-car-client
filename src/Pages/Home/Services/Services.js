import React, { useEffect, useState } from 'react';

const Services = () => {

    const [services, setServices] = useState({});

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div>
            <div className='text-center'>
                <p className='text-2xl text-orange-600 font-bold'>Service</p>
                <h2 className='font-semibold text-5xl'>Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br />
                    words which don't look even slightly believable.</p>
            </div>
            <div>
                <p>services: {services.length}</p>
                {

                }
            </div>
        </div>
    );
};

export default Services;