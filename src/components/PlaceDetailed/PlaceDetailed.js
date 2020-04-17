import classes from './PlaceDetailed.css';
import { Card, Row, Col, Container } from 'react-bootstrap';
import StarRatingComponent from 'react-star-rating-component';

import React, { Component } from 'react';

class PlaceDetailed extends Component {
    render() {
        return (
            <div>
                <Container className={classes.place} fluid>
                    <Row className={classes.image} style={{ backgroundImage: "url(" + this.props.place.img + ")" }} />

                    <Row>
                        <h2 className={classes.title}>{this.props.place["title"]}</h2>
                        <Col sm={4}></Col>
                        <Col sm={4} className={classes.starC}>
                            <StarRatingComponent
                                className={classes.star}
                                name="rate1"
                                starCount={5}
                                value={this.props.place["score"]}
                            />
                        </Col>
                        <Col sm={4}></Col>
                    </Row>
                    <Row>
                        <Col sm={1}></Col>
                        <Col sm={10}>
                            <p className={classes.detailedDescription}>{this.props.place["detailedDescription"]}</p>
                            <p style={{ fontSize: "20px", fontWeight: "bold", textAlign: "center" }}>Agrega tu experiencia en este sitio.</p>
                            <div className={classes.comments}>
                                {this.condition()}
                            </div>
                        </Col>
                        <Col sm={1}></Col>
                    </Row>
                </Container>
            </div>
        );
    }

    condition() {
        if (this.props.place["comments"] !== undefined && this.props.place["comments"] !== null) {
            return (
                Object.values(this.props.place["comments"]).map(comment => {
                    return (
                        <Card className={classes.card} >
                            <Card.Header>{comment.author}</Card.Header>
                            <Card.Body>
                                <Card.Title>{comment.title}</Card.Title>
                                <Card.Text>
                                    {comment.body}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    )
                })
            );
        } 
    }
}

export default PlaceDetailed;

