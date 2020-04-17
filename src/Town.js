import React from 'react';
import { Card } from 'react-bootstrap';

function PromotionalVideo() {
    return (
        <Card>
            <Card.Header>Video promocional</Card.Header>
            <Card.Body>
                <Card.Text>
                    <iframe src="https://youtu.be/1oWeLSLb_tU"></iframe>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}