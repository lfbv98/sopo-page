import React, { Component } from 'react';
import NewsVerticalCard from '../NewsVerticalCard/NewsVerticalCard.js';
import classes from './News.css';
import { Route } from 'react-router-dom';
import NavigationBar from '../NavigationBar/NavigationBar.js';
import Footer from '../Footer/Footer.js';
import { connect } from 'react-redux';
import NewsLogin from '../../containers/NewsLogin/NewsLogin.js'

import * as actionCreators from '../../store/actions/';

class News extends Component {
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
    }

    componentDidMount() {
        this.props.onFetchNews();
    }

    componentWillUpdate (nextProps, nextState) {
        if (!this.state.isUserLoggedIn && nextState.isUserLoggedIn) {
            this.props.onFetchNews();
        }
    }

    componentWillReceiveProps (nextState) {
        this.setState({
            isUserLoggedIn: nextState.isUserLoggedIn,
            news: nextState.news,
        });
    }

    onClickNews(itemPosition) {   
        const news = this.state.news.find(({ id }) => id === itemPosition);
        this.setState({
            newsSelected: news,
        });  
    }

    getNews = () => {
        return(
            <div>
                <p className = {classes.title}>Noticias al Día</p>
                <div className = {classes.container}>
                    {this.state.news.map( aNew =>
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


    onUserLogIn(){
        return(
            <div>
                <Route path="/news" exact>{this.getNews()}</Route>
                <Route path="/news/:idNews" exact component={NewsLogin}/>
            </div>
        )
    }

    onUserLogOut(){
        return(
            <div>
                <Route path="/news" exact>{this.getNews()}</Route>
                <Route path="/news/:idNews" exact component={NewsLogin}/>
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
        onFetchNews: () =>dispatch(actionCreators.fetchNews()),
        onsaveCommentNews: (commentData, idNews) => dispatch(
            actionCreators.saveCommentNews(commentData, idNews)
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(News);
