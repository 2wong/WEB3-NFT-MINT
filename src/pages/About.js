import React from 'react';
import { Col, Container, Row, Carousel } from 'react-bootstrap';

import './About.css'
const About=(props)=> {
    return (
        <Container id="about">
             <Row style={{ alignItems: "center", justifyContent: "center" }}>
             <Col xl={5} lg={6}>
                   <Row>
                       <Col className='p-3' xs={6}>
                           <img  width="95%" src='https://lordsocietynft.com/static/media/3.4353df4afd9a8db1d0c6.png' alt='' />
                       </Col>
                       <Col className='p-3' xs={6}>
                           <img  width="95%" src='https://lordsocietynft.com/static/media/2.d6469e8ef69f96fcf120.jpeg' alt='' />
                       </Col>
                       <Col className='p-3' xs={6}>
                           <img  width="95%" src='https://lordsocietynft.com/static/media/1.75e971864e9e635a578e.jpeg' alt='' />
                       </Col>
                       <Col className='p-3' xs={6}>
                           <img  width="95%" src='https://lordsocietynft.com/static/media/4.1246c1c13f350ca02433.png' alt='' />
                       </Col>
                   </Row>
                </Col>
                <Col xl={5} lg={6} xs={11}>
                    <div className='theme-heading'>Join the club</div>
                    <p className='inner-text'>
                    When you buy a Lord, you don’t buy only an avatar or a piece of art.

                    </p>
                    <br />
                    <p className='inner-text mb-4'>
                    <span>You are gaining membership access to a club </span> whose benefits and offerings will increase over time. Your Lord can serve as your digital identity, VIP pass for our casino, breed a Junior lord, receive daily tokens and much more !

                    </p>

                </Col>
                
            </Row>
        </Container>
    );
}

export default About;