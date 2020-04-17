import React from 'react';
import classes from './footer.css';
import { Navbar, Nav } from 'react-bootstrap';


export default class Footer extends React.Component {
    render = () => {
        return (
            <div className={classes.footer}>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand className="copy">© Copyright 2019</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#TyC">Términos y Condiciones</Nav.Link>
                        <Nav.Link href="#Privacidad">Privacidad</Nav.Link>
                        <Nav.Link href="#Seguridad">Seguridad</Nav.Link>
                    </Nav>
                    <Nav className="justify-content-end">
                        <Nav.Link href="#Contacto">Contacto</Nav.Link>
                        <Nav.Link href="#About">Acerca De</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        );

    };

}