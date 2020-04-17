import React from 'react';
import classes from './Error.css';

export default function Error(props) {
    return (
        <div className={classes.error}>
            <i className="fa fa-times-circle margin-icon"></i>
            {props.message}
        </div>
    )
}
