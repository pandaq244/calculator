import React, { Component } from 'react';

import Display from './display/';
import ActionButtons from './keys/action/';
import NumberButtons from './keys/num/';
import OperationButtons from './keys/operation/';

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