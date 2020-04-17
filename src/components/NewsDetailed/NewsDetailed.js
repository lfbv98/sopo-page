import React, { Component } from 'react';
import classes from './NewsDetailed.css';
import { Row, Col, Container, Image, Card } from 'react-bootstrap';

class NewsDetailed extends Component {
    render() {
        return (
            <div className={classes.newsDetailed}>
                <Container style={{ marginBottom: "2%" }}>
                    <Row>
                        <Col md={5}>
                            <Image src={this.props.news.img} className={classes.image} height="300" width="100%" />
                        </Col>
                        <Col md={6} className="textos">
                            <p className={classes.title}>{this.props.news["title"]}</p>
                            <p className={classes.info}>{this.props.news["info"]}</p>
                        </Col>
                        <Col md={12}>
                            <p className={classes.fullInfo}>{this.props.news["fullInfo"]}</p>
                        </Col>
                    </Row>
                </Container>
                <Row>
                    <Col sm={12} className={classes.commT}>
                        <p style={{ fontSize: "30px", fontWeight: "bold", textAlign: "center", paddingTop: "2%" }}>Discusión.</p>
                    </Col>
                </Row>
                {this.condition()}
            </div>
        )
    }

    condition() {
        if (this.props.news["comments"] !== undefined && this.props.news["comments"] !== null) {
            return (
                Object.values(this.props.news["comments"]).map(comment => {
                    return (
                        <Row>
                            <Col sm={1} />
                            <Col sm={10}>
                                <Card className={classes.card} >
                                    <Card.Header>{comment.author}</Card.Header>
                                    <Card.Body>
                                        <Card.Title>{comment.title}</Card.Title>
                                        <Card.Text>
                                            {comment.body}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={1} />
                        </Row>
                    )
                })
            );
        }
    }

}

export default NewsDetailed;
