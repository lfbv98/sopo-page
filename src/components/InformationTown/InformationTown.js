import React, {Component} from 'react';
import image1 from '../Home/assets/iglesia.jpg';
import { ButtonToolbar, OverlayTrigger, Tooltip, Image } from 'react-bootstrap';
import Information from '../Information/Information.js';
import classes from './InformationTown.css';
import axios from '../../instances/axiosInstance';


class InformationTown extends Component{
    state = {
        information: [],
    }

    componentDidMount(){
        axios.get('/info')
            .then(response =>{
                var updatedInfo = response.data;
                updatedInfo = updatedInfo.map(nInfo => {
                    return{
                        name: nInfo.name,
                        content: nInfo.content,
                    }
                });
                this.setState({
                    information: updatedInfo,
                });
            })
    }

    render = () => {
        return(
            <div className={classes.content}>  
                <p className={classes.webDesc}>¡Bienvenido/a a la página oficial del Municipio de Sopó!</p>
                <div className="row">
                    <div className="col-md-3">
                        <ButtonToolbar>
                            {['top'].map(placement => (
                                <OverlayTrigger
                                    key={placement}
                                    placement={placement}
                                    overlay={
                                        <Tooltip id={`tooltip-${placement}`}>
                                            Iglesia Divino Salvador de Sopó
                                    </Tooltip>
                                    }
                                >
                                    <Image src={image1} style={{ height: '200px' }} rounded />
                                </OverlayTrigger>
                            ))}
                        </ButtonToolbar>
                    </div>
                    <div className="col-md-9" style={{ backgroundColor: 'white', paddingTop: '10px' }}>
                        {this.state.information.map( nInfo =>
                        <Information
                            name = {nInfo.name}
                            content = {nInfo.content}
                        />
                    )}
                    </div>
                </div>
            </div>
        )
    }
}

export default InformationTown;