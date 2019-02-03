import React, { Component } from 'react';
import Button from '../short_button/';

import './style.sass';

export default class CalcLongButton extends Button {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="button-container button-container--long">
                <button className="button">
                    { this.value }
                </button>
            </div>
        )
    }
}