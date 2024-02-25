import React from 'react';
import './Artist.css'
import { Col, Container, Row, Carousel } from 'react-bootstrap';

const Artist = (props) => {
    return (
        <Container id="artist">
            <Row style={{ alignItems: "center", justifyContent: "center" }}>
            <Col md={8} xs={12} style={{textAlign:"center"}} >
                    <div className='theme-heading'>The Artist</div>
                  
                    <br />
                    <p className='inner-text mb-4'>
                        <span>Meet Our Artist, Taking his 3D Art From The Screen Of Blockbusters including Frozen (2013) and Spiderman (No Way Home 2021), Into The word of Lords. The Lord Society is brought to you by our digital artists. As they became the most wanted for the highly influential media giants in the world.</span> 
                        

                    </p>

                </Col>

                <Col xs={11}>
                    <Row>
                        <Col sm={3}>
                            <img className='m-3' width="95%" src='https://lordsocietynft.com/static/media/3.4353df4afd9a8db1d0c6.png' alt='' />
                            <p className='inner-text mb-4'>
                                <span>You are gaining membership access to a club </span> whose benefits and offerings will increase over time. Your Lord can serve as your digital identity.

                            </p>
                        </Col>
                        <Col sm={3}>
                            <img className='m-3' width="95%" src='https://lordsocietynft.com/static/media/2.d6469e8ef69f96fcf120.jpeg' alt='' />
                            <p className='inner-text mb-4'>
                                <span>You are gaining membership access to a club </span> whose benefits and offerings will increase over time. Your Lord can serve as your digital identity.

                            </p>
                        </Col>
                        <Col sm={3}>
                            <img className='m-3' width="95%" src='https://lordsocietynft.com/static/media/1.75e971864e9e635a578e.jpeg' alt='' />
                            <p className='inner-text mb-4'>
                                <span>You are gaining membership access to a club </span> whose benefits and offerings will increase over time. Your Lord can serve as your digital identity.

                            </p>
                        </Col>
                        <Col sm={3}>
                            <img className='m-3' width="95%" src='https://lordsocietynft.com/static/media/4.1246c1c13f350ca02433.png' alt='' />
                            <p className='inner-text mb-4'>
                                <span>You are gaining membership access to a club </span> whose benefits and offerings will increase over time. Your Lord can serve as your digital identity.

                            </p>
                        </Col>
                    </Row>
                </Col>

            </Row>
        </Container>
    );
}

export default Artist;