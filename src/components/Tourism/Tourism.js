import React, { Component } from 'react';
import TouristPlaceCard from '../TouristPlaceCard/TouristPlaceCard';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import classes from './Tourism.css';

import * as actionCreators from '../../store/actions/';
import Footer from '../Footer/Footer';
import NavigationBar from '../NavigationBar/NavigationBar';
import TourismLogin from '../../containers/TourismLogin/TourismLogin';
import { Container, Row } from 'react-bootstrap';

class Tourism extends Component {
    state = {
        isUserLoggedIn: this.props.isUserLoggedIn,
        places: this.props.places,
        placeSelected: {
            title: "",
            description: "",
            score: "",
            img: "",
            id: "",
            comments: [],
            detailedDescription: "",
        },
        newCommentInfo: {
            author: "",
            body: "",
            title: "",
        }
    }

    componentDidMount() {
        this.props.onFetchTourism();
    }

    componentWillUpdate(nextState) {
        if (!this.state.isUserLoggedIn && nextState.isUserLoggedIn) {
            this.props.onFetchTourism();
        }
    }

    componentWillReceiveProps(nextState) {
        this.setState({
            isUserLoggedIn: nextState.isUserLoggedIn,
            places: nextState.places,
        });
    }

    onClickCard(itemPosition) {
        const place = this.state.places.find(({ id }) => id === itemPosition);
        this.setState({
            placeSelected: place,
        });
    }

    getPlaces = () => {
        return (
            <Container className={classes.border} >
                <Row className="justify-content-md-center" >
                    {this.state.places.map(place =>
                        <TouristPlaceCard
                            title={place.title}
                            description={place.description}
                            img={place.img}
                            score={place.score}
                            handleClick={this.onClickCard.bind(this)}
                            id={place.id}
                        />
                    )}
                </Row>
            </Container>
        )
    }

    render() {
        return (
            <div>
                <NavigationBar />
                {this.conditions()}
                <Footer />
            </div>
        );
    }

    conditions() {
        if (this.state.isUserLoggedIn === false) {
            return (
                this.onUserLogOut()
            )
        }
        else {
            return (
                this.onUserLogIn()
            )
        }
    }

    onUserLogIn() {
        return (
            <div className={classes.container}>
                <Route path="/tourism/" exact>{this.getPlaces()}</Route>
                <Route path="/tourism/:idPlace" exact component={TourismLogin} />
            </div>
        )

    }

    updateCommentInfo = (event, type) => {
        var updatedCommentInfo = {
            ...this.state.newCommentInfo
        }

        updatedCommentInfo[type] = event.target.value;

        this.setState({
            newCommentInfo: updatedCommentInfo,
        });
    }

    submitCommentForm = () => {
        var commentData = {
            ...this.state.newCommentInfo
        };

        var updatedPlaceSelected = {
            ...this.state.placeSelected
        }

        commentData['author'] = this.props.userLoggedIn.userName;

        updatedPlaceSelected['comments'] = Object.values(updatedPlaceSelected["comments"]);

        updatedPlaceSelected['comments'].push(commentData);

        this.props.onsaveCommentPlace(commentData, this.state.placeSelected.id - 1);

        this.setState({
            newCommentInfo: {
                author: "",
                body: "",
                title: "",
            },
            placeSelected: updatedPlaceSelected
        });
    }

    onUserLogOut() {
        return (
            <div className={classes.container}>
                <div className={classes.container}>
                    <Route path="/tourism/" exact>{this.getPlaces()}</Route>
                    <Route path="/tourism/:idPlace" exact component={TourismLogin} />
                </div>
            </div>
        )

    }
}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
        userLoggedIn: state.authenticationStore.userLoggedIn,
        places: state.tourismStore.places,
        loadingPlaces: state.tourismStore.loadingPlaces
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchTourism: () => dispatch(actionCreators.fetchTourism()),
        onsaveCommentPlace: (commentData, idPlace) => dispatch(
            actionCreators.saveCommentPlace(commentData, idPlace)
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tourism);

