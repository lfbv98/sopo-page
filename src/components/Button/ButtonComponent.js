import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function ButtonComponet(props) {
    return (
        <div>
            <Link to={props.linkTo}>
                <Button variant={props.variant}>
                    {props.label}
                </Button>
            </Link>
        </div>
    )
}
