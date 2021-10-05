import React from 'react';
import img1 from '../../img/team1.png';
import img2 from '../../img/team2.png';
import img3 from '../../img/team3.png';
import img4 from '../../img/team4.png';
import './About.css';

const About = () => {
    return (
        <div>
           <div className="Head-instructor">
            <div className="instructor">
               <img src={img1} alt="" />
               <h3>AS lenger</h3>
               <h4>Head of Instructor</h4>
            </div>
            <div className="bio">
                <h2>Hello! I am Head Instructor of <b>kishok bari.com</b></h2>
                <p>Bangladesh is a country of villages. Agriculture is a major profession in this country. Therefore, a farmer places very important position in our social order. She is the backbone of our country. Hard work, patience and honesty are some characteristics of his character. He is so suffering that the people of his country are very rich. He is a very useful member of our society. She works hard, sheds her sweat and blood for the sake of her countrymen. He grows grains, vegetables and fruits for us to eat. She grows cotton from which clothes are made. His work is very heavy.</p>
            </div>
            </div>
            <div className="co-instructor">
                <div>
                <img src={img2}alt="" />
                <h3>M Akorl lee</h3>
                <h4>Co-Instructor</h4>
                </div>
                <div>
                <img src={img3}alt="" />
                <h3>Marselle loss</h3>
                <h4>Co-Instructor</h4>
                </div>
                <div>
                <img src={img4}alt="" />
                <h3>Venzoo ker</h3>
                <h4>Co-Instructor</h4>
                </div>
           
            </div>
        </div>
    );
};

export default About;