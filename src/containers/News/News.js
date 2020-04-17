import React, { Component } from 'react';
import axios from '../../instances/axiosInstance';
import NewsVerticalCard from '../../components/NewsVerticalCard/NewsVerticalCard.js';
import classes from './News.css';
import { Route } from 'react-router-dom';
import NavigationBar from '../NavigationBar/NavigationBar.js';
import Footer from '../../components/Footer/Footer.js';
import NewsLogin from '../NewsLogin/NewsLogin';

export default class News extends Component {

    state = {
        isUserLoggedIn: this.props.isUserLoggedIn,
        news: this.props.news,
        newsSelected : {
            id: "",
            img: "",
            title: "",
            info: "",
            fullInfo: "",
        },
        newCommentInfo: {
            author: "",
            body: "",
            title: "",
        }
    }

    componentDidMount() {
        axios.get('/news')
            .then(response => {
                var updatedNews = response.data;
                updatedNews = updatedNews.map(aNew => {
                    return {
                        id: aNew.id,
                        img: aNew.img,
                        title: aNew.title,
                        info: aNew.info,
                        fullInfo: aNew.fullInfo,
                    }
                });
                this.setState({
                    News: updatedNews,
                });
            })
            .catch(error => {
            });
    }

    componentDidMount() {
        this.props.onFetchNews();
    }

    componentWillUpdate(nextState) {
        if (!this.state.isUserLoggedIn && nextState.isUserLoggedIn) {
            this.props.onFetchNews();
        }
    }

    componentWillReceiveProps(nextState) {
        this.setState({
            isUserLoggedIn: nextState.isUserLoggedIn,
            news: nextState.news,
        });
    }

    onClickNews(itemPosition) {   
        const news = this.state.News.find(({ id }) => id === itemPosition);
        this.setState({
            newsSelected: news,
        });  
    }

    getNews = () => {
        return(
            <div>
                <p className = {classes.title}>Noticias al Día</p>
                <div className = {classes.container}>
                    {this.state.News.map( aNew =>
                        <NewsVerticalCard
                            img = {aNew.img}
                            title = {aNew.title}
                            info = {aNew.info}
                            id = {aNew.id}
                            handleClick = {this.onClickNews.bind(this)}
                            fullInfo = {aNew.fullInfo}
                        />
                    )}
                </div>
            </div>
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
                <Route path="/tourism/" exact>{this.getNews()}</Route>
                <Route path="/tourism/:idNews" exact component={NewsLogin} />
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

    onUserLogOut() {
        return (
            <div className={classes.container}>
                <div className={classes.container}>
                    <Route path="/tourism/" exact>{this.getNews()}</Route>
                    <Route path="/tourism/:idNews" exact component={TourismLogin} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isUserLoggedIn: state.authenticationStore.isUserLoggedIn,
        userLoggedIn: state.authenticationStore.userLoggedIn,
        news: state.newsStore.news,
        loadingNews: state.newsStore.loadingNews
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchNews: () => dispatch(actionCreators.fetchNews()),
        onSaveCommentNews: (commentData, idNews) => dispatch(
            actionCreators.saveCommentNews(commentData, idNews)
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(News);
