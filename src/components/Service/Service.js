import React, { useContext, useEffect, useState } from 'react';
import AllServices from '../AllServices/AllServices';
import { courseContext } from '../Home/Home';
import './Service.css';

const Service = () => {
  const course =useContext(courseContext);
    const [service, setService] = useState([]);
    useEffect(()=>{
        fetch('./fakedata.json')
        .then(res => res.json())
        .then(data => setService(data))
    },[])
    return (
        <div className="Service">
            {
                service.map(service =><AllServices
                key={service.id}
                allServices={service}
                ></AllServices> )
            }
            
        </div>
    );
};

export default Service;