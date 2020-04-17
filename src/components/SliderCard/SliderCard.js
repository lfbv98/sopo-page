import React from 'react';
import classes from "./SliderCard.css";


class SliderCard extends React.Component {
    render = () => {
        return (
            <div className={classes.slideCard}>
                <h3>{this.props.title}</h3>
                <p>{this.props.p}</p>
            </div>
        );
    };
}

export default SliderCard;