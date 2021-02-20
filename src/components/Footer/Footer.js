import React from 'react';
import logo from '../../images/logo.png';
import './Footer.css';
const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="container-1">
                    <h1 className="rmstu">
                        <span>R</span>
                        <span>M</span>
                        <span>S</span>
                        <span>T</span>
                        <span>U</span>
                    </h1>
                    <img src={logo} alt=""/>
                    <p>PERMANENT ADDRESS</p>
                    <h3>Rangamati Science and Technology University Vedvedi, Rangamati-4500</h3>
                    <p>LIASON OFFICE ADDRESS</p>
                    <h3>4th floor, C1 unit, 70/B, Dolphin Goli, Lake Circus, Kalabagan, Dhaka-1205</h3>
                    <p>PHONE AND MOBILE</p>
                    <h3>+880351-63893</h3>
                    <h3>01704-383642</h3>
                </div>
                <div className="container-2">
                    <h2>ABOUT RMSTU</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta numquam dolorem odit mollitia sit voluptatibus reprehenderit amet modi! Repellat, asperiores?</p>
                </div>
                <div className="container-3">
                    <h2>FEATURED LINKS</h2>
                    <ul>
                        <li><a href="/notice">Jobs and vacancies</a></li>
                        <li><a href="/research">Research</a></li>
                        <li><a href="/clubs">Clubs</a></li>
                        <li><a href="/scholarship">Scholarship</a></li>
                        <li><a href="/calendar">Academic Calendar</a></li>
                        <li><a href="/web-mail">Web-mail</a></li>
                    </ul>
                </div>
                <div className="container-4">
                    <h2>Social Links</h2>
                    <ul>
                        <li><a href="/admissions">Facebook</a></li>
                        <li><a href="web-mail">Instragram</a></li>
                        <li><a href="/department">Twitter</a></li>
                        <li><a href="/linkedin">Linkedin</a></li>
                    </ul>
                </div>
            </div>
            <hr/>
            <div className="copywright">
                <p>Developed and Designed By <span style={{color:'#333', fontWeight: '600', fontSize: '18px'}}>Golam Mostafa</span> 2<sup>nd</sup> batch, RMSTU - 2021</p>
            </div>
        </div>
    );
};

export default Footer;