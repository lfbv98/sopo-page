import React from 'react';
import Image from 'react-bootstrap/Image';
import classes from "./NewsCard.css";

class NewsCard extends React.Component {
    render = () => {
        return (
            <li>
                <div className={`row ${classes.notices}`}>
                    <div className={`col-md-6 ${classes.cols}`}>
                        <Image className={classes.noticeImg} src={this.props.img} fluid />
                    </div>
                    <div className={`col-md-6 ${classes.cols}`}>
                        <h5>{this.props.title}</h5>
                        <h9>{this.props.info}</h9>
                    </div>
                </div>
            </li>
        );
    };

}

export default NewsCard;