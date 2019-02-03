import React, { Component } from 'react';

import './style.sass';

export default class CalcButton extends Component {
    constructor(props) {
        super(props);
        this.value = props.value;
        this.type = props.type;
    }
    render() {
        return(
            <div className="button-container">
                <button className="button">
                    { this.value }
                </button>
            </div>
        )
    }
}