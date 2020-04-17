import React, { Component } from 'react';
import { Image, Carousel, Row, Col } from 'react-bootstrap';
import title from './assets/community.png';
import classes from './CommunityPics.css';
import pic1 from './assets/carousel/sopo1.jpg';
import pic2 from './assets/carousel/sopo2.jpg';
import pic3 from './assets/carousel/sopo3.jpg';
import pic4 from './assets/carousel/sopo4.jpg';
import pic5 from './assets/carousel/sopo5.jpg';
import pic6 from './assets/carousel/sopo6.jpg';
import pic7 from './assets/carousel/sopo7.jpg';
import pic8 from './assets/carousel/sopo8.jpg';


class CommunityPics extends Component {

    render = () => {
        return (
            <div className={classes.content}>
                <Row>
                    <Col sm={5}>
                        <Image src={title} className={classes.titleImg} />
                    </Col>
                    <Col sm={7}>
                        <Carousel indicators={true} className={classes.carousel}>
                            {/* {images.map(pic =>
                                <Carousel.Item>
                                    <Image src={pic.src} className={classes.titleImg} />
                                </Carousel.Item>
                            )} */}
                            <Carousel.Item>
                                <Image src={pic1} className={classes.img} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={pic2} className={classes.img} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={pic3} className={classes.img} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={pic4} className={classes.img} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={pic5} className={classes.img} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={pic6} className={classes.img} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={pic7} className={classes.img} />
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={pic8} className={classes.img} />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>

            </div>
        );
    };

}

export default CommunityPics;