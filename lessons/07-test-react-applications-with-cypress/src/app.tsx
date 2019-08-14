import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CheckboxWithLabel } from './checkboxWithLabel';
import { id, onText, offText } from './constants';

ReactDOM.render(
  <CheckboxWithLabel id={id} labelOn={onText} labelOff={offText}/>,
  document.getElementById('root')
);
