import React, { Component } from 'react';
import PlaceDetailed from '../../components/PlaceDetailed/PlaceDetailed';
import CommentForm from '../../components/CommentForm/CommentForm';
import * as actionCreators from '../../store/actions/';
import { connect } from 'react-redux';
import classes from './TourismLogin.css';

class TourismLogin extends Component {

    state = {
        newCommentInfo: {
            author: "",
            body: "",
            title: "",
        },
        placeSelected: {
            title: "",
            description: "",
            score: "",
            img: "",
            id: "",
            comments: [],
            detailedDescription: "",
        },
        isUserLoggedIn: this.props.isUserLoggedIn
    }

    componentDidMount() {
        const { params } = this.props.match;
        this.props.onFetchPlace(params.idPlace - 1);
    }

    componentWillUpdate(nextState) {
        const { params } = this.props.match;
        if (!this.state.isUserLoggedIn && nextState.isUserLoggedIn) {
            this.props.onFetchPlace(params.idPlace - 1);
        }
    }

    componentWillReceiveProps(nextProp) {
        if (this.state.placeSelected['id'] !== nextProp.placeSelected['id']) {
            this.setState({
                isUserLoggedIn: nextProp.isUserLoggedIn,
                placeSelected: nextProp.placeSelected,
            });
        }
    }

    render() {
        return (
            this.condition()
        );
    }

    condition() {
        if (this.props.isUserLoggedIn) {
            return (
                <div>
                    <PlaceDetailed place={this.state.placeSelected} />
                    <div className={classes.comments}>
                        <CommentForm
                            newCommentInfo={this.state.newCommentInfo}
                            updateCommentInfo={this.updateCommentInfo}
                            submitCommentForm={this.submitCommentForm}
                        />
                    </div>

                </div>
            )
        }
        return (
            <div>
                <PlaceDetailed place={this.state.placeSelected} />
                <p className = {classes.logInMessage}>Inicia Sesión para comentar</p>
            </div>
        );
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

        this.props.onSaveCommentPlace(commentData, this.state.placeSelected.id - 1);

        this.setState({
            newCommentInfo: {
                author: "",
                body: "",
                title: "",
            },
            placeSelected: updatedPlaceSelected
        });
    }

}

const mapStateToProps = state => {
    return {
        placeSelected: state.tourismStore.placeSelected,
        isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
        userLoggedIn: state.authenticationStore.userLoggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchPlace: (idPlace) => dispatch(actionCreators.fetchPlace(idPlace)),
        onSaveCommentPlace: (commentData, idPlace) => dispatch(
            actionCreators.saveCommentPlace(commentData, idPlace)
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TourismLogin);