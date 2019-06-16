import React, { Component } from 'react';
import {connect} from 'trim-redux';
import axios from 'axios';

import './business.scss'

class Business extends Component {

    params;
    constructor(props) {
        super(props)
        this.params = props.match.params.id; 
    }

    componentDidMount() {
        if(this.params){
            axios.post('http://tpi.uneed.ir:7100/place/get', { pi: this.params  }, {
                headers: { 't': this.props.token }
            }).then(response => {console.log('asdasd')})
        }
    }
    
    render() {
        return (
            <div className="container-fluid">
                
            </div>
        )
    }
}

const mstp = state => ({
    token: state.token
})

export default connect(mstp)(Business);