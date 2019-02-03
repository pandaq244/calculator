import React, { Component } from 'react';

import Display from './pages/display/';
import ActionButtons from './pages/action/';
import NumberButtons from './pages/num/';
import OperationButtons from './pages/operation/';

import './style.sass';

export default class Calculator extends Component {
    constructor(props) {
        super(props);
    }
    render() {
       return(
            <div className="calculator-container">
                <Display 
                    value={0} />
                <ActionButtons />
                <NumberButtons />
                <OperationButtons />
            </div>
       )
   }
}