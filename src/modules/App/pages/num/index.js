import React from 'react';

import ButtonS from '../../../../components/short_button/';
import ButtonL from '../../../../components/long_button/';

export default () => (
    <div className="num-buttons">
        <ButtonS value={7} />
        <ButtonS value={8} />
        <ButtonS value={9} />
        <ButtonS value={4} />
        <ButtonS value={5} />
        <ButtonS value={6} />
        <ButtonS value={1} />
        <ButtonS value={2} />
        <ButtonS value={3} />
        <ButtonL value={0} />
        <ButtonS value="." />
    </div>
);