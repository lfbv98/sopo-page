import React, {Component} from 'react';
import { Card } from 'react-bootstrap';
import NewsCard from '../NewsCard/NewsCard';
import classes from './NewsHomeContainer.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actionCreators from '../../store/actions/news.js';

class NewsHomeContainer extends Component {
    state = {
        news: this.props.news,
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
            news: nextState.news,
        });
    }

    render() {
        return(
            <div className={`${classes.newsContainer}`}>
                <Card className={classes.conNews}>
                    <Link to={"/news/"}>
                        <Card.Header style={{ backgroundColor: '#48567F' }}>
                            <div className="row">
                                <div className="col-md-5">
                                    <h1 className={classes.title}>Noticias</h1>
                                </div>
                                <div className="col-md-7">
                                    <p className={classes.newsDesc}>Encuentra las más recientes noticias sobre el municipio
                                y mantente al tanto de los eventos, novedades y demás. </p>
                                </div>
                            </div>
                        </Card.Header>
                    </Link>
                    <Card.Body>
                        <div className="container">
                            <ul class={`nav nav-pills nav-stacked ${classes.scroll}`}>
                                {this.state.news.map( New =>
                                    <NewsCard
                                        id = {New.id}
                                        img = {New.img}
                                        title = {New.title}
                                        info = {New.info}
                                    />
                                )}
                            </ul>
                        </div>
                    </Card.Body>
                </Card>
            </div>
            
        )
    }
}

const mapStateToProps = state => {
    return {
        news: state.newsStore.news,
        loadingNews: state.newsStore.loadingNews
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchNews: () =>dispatch(actionCreators.fetchNews()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsHomeContainer);