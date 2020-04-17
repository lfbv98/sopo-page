import React from 'react';
import classes from './NotFound.css';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <Container className={classes.container}>
            <Row>
                <Col md="12">
                    <div class={classes.template}>
                        <h1>¡Vaya!</h1>
                        <h2>404 No encontrado</h2>
                        <div class="error-details">
                            Lo sentimos, un error ha ocurrido, no se ha encontrado la página solicitada :(
                        </div>
                        <br/>
                        <Link to="/" >
                            <Button variant="primary">Ir a Inicio</Button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default NotFound;