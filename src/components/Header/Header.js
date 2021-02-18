import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import logo from '../../images/logo.png';
import './Header.css';
const Header = () => {
    return (
        <div className="header">
            <div className="name-input">
                <p id="para">RANGAMATI SCIENCE AND TECHNOLOGY UNIVERSITY</p>
                <Form inline id="input">
                    <FormControl style={{width:'165px'}} type="text" placeholder="Search" className="mr-sm-2" />
                    <Button style={{width:'70px',height:'35px'}} variant="outline-success">Search</Button>
                </Form>
            </div>
            <div className="nav">
                <div className="navbar">
                    <a className='link, active' href="/">HOME</a>
                    <a className='link' href="/departments">DEPARTMENT</a>
                    <a className='link' href="/institutes">INSTITUTES</a>
                    <a className='link' href="/faculties">FACULTIES</a>
                    <a className='link' href="/adminastration">ADMINASTRATION</a>
                    <a className='link mid1' href="/research">RESEARCH</a>
                    <img className="logo" src={logo} alt=""/>
                    <a className='link mid2' href="/admission">ADMISSSION</a>
                    <a className='link' href="/notice">NOTICE</a>
                    <a className='link' href="/about">ABOUT</a>
                    <a className='link' href="/gallery">GALLERY</a>
                    <a className='link' href="/web-mail">WEB-MAIL</a>
                    <a className='link' href="/contact">CONTACT US</a>
                </div>
            </div>
        </div>
    );
};

export default Header;