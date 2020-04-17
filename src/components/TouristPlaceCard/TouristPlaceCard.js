import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import classes from './TouristPlaceCard.css';
import StarRatingComponent from 'react-star-rating-component';
import { Link } from 'react-router-dom';

export default class TouristPlaceCard extends Component {
    render() {
        return (
            <Link to={`/tourism/${this.props.id}`}>
                <Card className={classes.card} style={{ width: '20rem' }} onClick={this.onClick}>
                    <Card.Img variant="top" src={this.props.img} height="150" />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                        <StarRatingComponent
                            name="rate1"
                            starCount={5}
                            value={this.props.score}
                        />
                    </Card.Body>
                </Card>
            </Link>
        )
    }
    onClick = () => {
        this.props.handleClick(this.props.id)
    }
}


