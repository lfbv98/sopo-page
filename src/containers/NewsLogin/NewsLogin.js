import React, { Component } from 'react';
import NewsDetailed from '../../components/NewsDetailed/NewsDetailed.js';
import CommentForm from '../../components/CommentForm/CommentForm';
import * as actionCreators from '../../store/actions/';
import { connect } from 'react-redux';
import classes from './NewsLogin.css';

class NewsLogin extends Component {

    state = {
        newCommentInfo: {
            author: "",
            body: "",
            title: "",
        },
        newsSelected: {
            id: 0,
            img: "",
            title: "",
            info: "",
            fullInfo: "",
            comments: [],
        },
        isUserLoggedIn: this.props.isUserLoggedIn
    }

    componentDidMount() {
        const { params } = this.props.match;
        this.props.onFetchNew(params.idNews - 1);
    }

    componentWillUpdate(nextState) {
        const { params } = this.props.match;
        if (!this.state.isUserLoggedIn && nextState.isUserLoggedIn) {
            this.props.onFetchNew(params.idNews - 1);
        }
    }

    componentWillReceiveProps(nextProp) {
        if (this.state.newsSelected['id'] !== nextProp.newsSelected['id']) {
            this.setState({
                isUserLoggedIn: nextProp.isUserLoggedIn,
                newsSelected: nextProp.newsSelected,
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
                    <NewsDetailed news={this.state.newsSelected} />
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
                <NewsDetailed news={this.state.newsSelected} />
                <p className = {classes.logInMessage}>Inicia Sesión para comentar</p>
            </div>
        );
    }

    updateCommentInfo = (event, type) => {
        var updatedCommentInfo = {
            ...this.state.newCommentInfo
        }

        console.log(updatedCommentInfo);

        updatedCommentInfo[type] = event.target.value;

        this.setState({
            newCommentInfo: updatedCommentInfo,
        });
    }


    submitCommentForm = () => {
        var commentData = {
            ...this.state.newCommentInfo
        };

        var updatedNewsSelected = {
            ...this.state.newsSelected
        }

        commentData['author'] = this.props.userLoggedIn.userName;

        updatedNewsSelected['comments'] = Object.values(updatedNewsSelected["comments"]);

        updatedNewsSelected['comments'].push(commentData);

        this.props.onSaveCommentNews(commentData, this.state.newsSelected.id - 1);

        this.setState({
            newCommentInfo: {
                author: "",
                body: "",
                title: "",
            },
            newsSelected: updatedNewsSelected
        });
    }

}

const mapStateToProps = state => {
    return {
        newsSelected: state.newsStore.newsSelected,
        isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
        userLoggedIn: state.authenticationStore.userLoggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchNew: (idNews) => dispatch(actionCreators.fetchNew(idNews)),
        onSaveCommentNews: (commentData, idNews) => dispatch(
            actionCreators.saveCommentNews(commentData, idNews)
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsLogin);