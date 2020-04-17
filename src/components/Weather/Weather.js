import classes from './Weather.css';
import { Nav } from 'react-bootstrap';
import React from 'react';

class Weather extends React.Component {
    state = {
        temperature: "",
    }

    componentDidMount() {
        const weatherURL = `http://api.openweathermap.org/data/2.5/weather?q=Sopó&appid=c2a3500b611bd3b748acd7255344ec4d&units=metric`;

        fetch(weatherURL)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    temperature: data.main.temp,
                });
            });

    }

    render() {
        return (
            <Nav className={classes.clima}>
                <Nav.Link href="https://openweathermap.org/find?utf8=%E2%9C%93&q=sopó" target="_blank"><i class="fas fa-sun fa-lg sun"></i> {this.state.temperature}°C</Nav.Link>
            </Nav>
        );
    }
};

export default Weather;