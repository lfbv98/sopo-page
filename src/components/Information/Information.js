import React from 'react';
import "./Information.css"


class Information extends React.Component {
    render = () => {
        return (
            <div className = "row">
                <div className = "col-md-6" style={{ textAlign: 'right', fontSize: '15px'}}> 
                    <h9><b>{this.props.name}</b></h9>
                </div>
                <div className = "col-md-6" style={{ textAlign: 'left', fontSize: '15px'}}>
                    <h9>{this.props.content}</h9>
                </div>
                <br></br>
            </div>
        );
    };
}

export default Information;