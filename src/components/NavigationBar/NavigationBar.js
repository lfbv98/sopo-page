import React, { Component } from 'react';
import logo from './logo.png';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import classes from './NavigationBar.css';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/';
import Weather from '../Weather/Weather';

class NavigationBar extends Component {
  state = {
    isUserLoggedIn: this.props.isUserLoggedIn,
    temperature: this.temp,
    userName: this.props.userLoggedIn.userName,
    idToken: this.props.userLoggedIn.idToken
  }
  temp = 32

  componentDidMount() {
    this.props.onGetData(this.props.userLoggedIn.idToken);
    setInterval(() => {
      this.changeState();
    }, 2000);
  }

  componentWillReceiveProps(nextState) {
    this.setState({
      isUserLoggedIn: nextState.isUserLoggedIn,
      userName: nextState.userName,
    });
  }

  changeState = () => {
    this.temp === 36 ? this.temp-- : this.temp++;
    this.setState({
      temperature: this.temp,
    });
  }

  userLogIn() {
    return (
      <div className={classes.navContainer}>
        <Navbar bg="dark" variant="dark">
          <Link to="/" className={classes.link}>
            <img
              src={logo}
              width="50"
              height="50"
              alt="logo"
              className="d-inline-block align-top"
            />
          </Link>
          <Link to="/" className={classes.links}>
            Sopó Cundinamarca
            <br />
            <div className={classes.brandSubtext}>
              Seguridad y Prosperidad
            </div>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link className={classes.links} to="/tourism">Turismo</Link>
              <Link className={classes.links} to="/news">Noticias</Link>
            </Nav>
            <Weather/>
            <Nav>
              <Nav.Link href="https://www.youtube.com/user/alcaldiadesopo/videos" target="_blank"><i class="fab fa-youtube fa-lg"></i></Nav.Link>
              <Nav.Link href="https://es-la.facebook.com/AlcaldiadeSopo/" target="_blank"><i class="fab fa-facebook-f fa-lg"></i></Nav.Link>
              <Nav.Link href="https://twitter.com/alcaldiadesopo?lang=es" target="_blank"><i class="fab fa-twitter fa-lg"></i></Nav.Link>
              <Nav.Link eventKey={2} href="#memes" />
              <Nav.Link eventKey={2} href="#memes" />
            </Nav>
            <Link className={classes.links} >{this.props.userLoggedIn.userName}</Link>
            <Link className={classes.links} onClick={this.props.onLogOut}>Cerrar Sesión</Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }

  userLogOut() {
    return (
      <div className={classes.navContainer}>
        <Navbar bg="dark" variant="dark">
          <Link to="/" className={classes.link}>
            <img
              src={logo}
              width="50"
              height="50"
              alt="logo"
              className="d-inline-block align-top"
            />
          </Link>
          <Link to="/" className={classes.links}>
            Sopó Cundinamarca
            <br />
            <div className={classes.brandSubtext}>
              Seguridad y Prosperidad
            </div>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link className={classes.links} to="/tourism">Turismo</Link>
              <Link className={classes.links} to="/news">Noticias</Link>
            </Nav>
            <Weather/>
            <Nav>
              <Nav.Link href="https://www.youtube.com/user/alcaldiadesopo/videos" target="_blank"><i class="fab fa-youtube fa-lg"></i></Nav.Link>
              <Nav.Link href="https://es-la.facebook.com/AlcaldiadeSopo/" target="_blank"><i class="fab fa-facebook-f fa-lg"></i></Nav.Link>
              <Nav.Link href="https://twitter.com/alcaldiadesopo?lang=es" target="_blank"><i class="fab fa-twitter fa-lg"></i></Nav.Link>
              <Nav.Link eventKey={2} href="#memes" />
              <Nav.Link eventKey={2} href="#memes" />
            </Nav>
            <Link className={classes.links} to="/login">Iniciar sesión</Link>
            <Link className={classes.links} to="/signup">Registrarse</Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }

  render() {
    if (this.state.isUserLoggedIn === false) {
      return (
        this.userLogOut()
      );
    }
    else {
      return (
        this.userLogIn()
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
    userLoggedIn: state.authenticationStore.userLoggedIn,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogOut: () => dispatch(actionCreators.logOut()),
    onGetData: (idToken) => dispatch(actionCreators.userData(idToken))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);
