import classes from './Login.css';
import React, { Component } from 'react';
import { Form, Container, Row, Col } from 'react-bootstrap';
import Spinner from '../Spinner/Spinner';
import Error from '../Error/Error';
import * as actionCreators from '../../store/actions/authentication';
import { connect } from 'react-redux';
import NavigationBar from '../NavigationBar/NavigationBar';
import Footer from '../Footer/Footer.js';

class Login extends Component {
    state = {
        isUserLoggedIn: this.props.isUserLoggedIn,
    }

    componentDidUpdate() {
        if (this.state.isUserLoggedIn) {
            this.props.history.push('/');
        }
    }

    componentWillReceiveProps(nextState) {
        this.setState({
            isUserLoggedIn: nextState.isUserLoggedIn
        });
    }

    render() {
        return (
            <div>
                <NavigationBar />
                <div className={classes.container}>
                <div className={classes.bckg}/>
                    <Row className={classes.content}>
                        <Col sm={4} style={{padding : "0"}}></Col>
                        <Col sm={4} className={classes.formC}>
                            <Form className={classes.form} >
                                <Container>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Correo electrónico</Form.Label>
                                        <Form.Control type="email" placeholder="Correo" value={this.state.userName} onChange={(event) => { this.updateLoginInfo(event, 'userName') }} />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Contraseña</Form.Label>
                                        <Form.Control type="password" placeholder="Contraseña" value={this.state.password} onChange={(event) => { this.updateLoginInfo(event, 'password') }} />
                                    </Form.Group>
                                </Container>
                                <Row>
                                    <Col sm={4}></Col>
                                    {this.renderButtons()}
                                    <Col sm={4}></Col>
                                </Row>
                                {this.renderError()}
                            </Form>
                        </Col>
                    </Row>
                </div>
                <Footer/>
            </div>
        );
    }

    renderButtons() {
        let buttons = <button onClick={this.submitLoginForm} className={classes.loginB}>Iniciar Sesión</button>;
        if (this.props.loadingAuth) {
            buttons = <Spinner />;
        }
        return buttons;
    }

    renderError() {
        let error = <div/>;
        if (this.props.isLoginError) {
            error = <Error message=" Datos erróneos." className={classes.errorMsg}/>
        }
        return error;
    }

    updateLoginInfo = (event, type) => {
        var updatedLoginInfo = {
            ...this.state
        }

        updatedLoginInfo[type] = event.target.value;

        this.setState({
            userName: updatedLoginInfo.userName,
            password: updatedLoginInfo.password
        });
    }

    submitLoginForm = () => {
        const userData = {
            email: this.state.userName,
            password: this.state.password
        }

        this.props.onUserLogin(userData, () => {
            this.props.history.push('/');
        });
    }
}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
        loadingAuth: state.authenticationStore.loadingAuth,
        isLoginError: state.authenticationStore.isLoginError,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUserLogin: (authData, onSuccessCallback) => dispatch(
            actionCreators.logIn(authData, onSuccessCallback)
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
