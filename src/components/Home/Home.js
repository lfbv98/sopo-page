import React, { Component } from 'react';
import classes from "./Home.css";
import InformationTown from '../InformationTown/InformationTown.js';
import PictureSlider from '../PictureSlider/PictureSlider';
import NewsHomeContainer from '../NewsHomeContainer/NewsHomeContainer.js';
import NavigationBar from '../NavigationBar/NavigationBar';
import Footer from '../Footer/Footer';
import CommunityPics from '../CommunityPics/CommunityPics';
import { Row, Col } from 'react-bootstrap';

export default class Home extends Component {
    render() {
        return (
            <div>
                <NavigationBar />
                <PictureSlider />
                <div className={`${classes.cuerpo} row`}>
                    <Row>
                        <Col sm={6}><NewsHomeContainer /></Col>
                        <Col sm={6}>
                            <InformationTown />
                            <CommunityPics />
                        </Col>
                    </Row>
                </div>
                <Footer />
            </div>
        );
    }
}