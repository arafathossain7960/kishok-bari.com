import React, { createContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Course from '../Course/Course';
import './Home.css';

export const courseContext= createContext('course');

const Home = () => {
    const [courses, setCourse]=useState([]);
    useEffect(()=>{
        fetch('./fakedata.json')
        .then(res => res.json())
        .then(data => setCourse(data))
    },[])
    
    const course_4= courses.slice(0,4);
    return (
      <courseContext.Provider value={courses}>
          <div>
            <div className="home-header">
                <h1>Welcome to kishok bari.com</h1>
                <p>World wide firming training center</p>
            </div>
           
   
            <div className="card">
            {
             course_4.map(course => <Course 
             key={course.id}
             course={course}></Course>)
          }
     
          </div>
          </div>
          </courseContext.Provider>
    );
};

export default Home;