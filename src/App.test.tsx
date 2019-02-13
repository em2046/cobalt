import React from 'react';
import * as ReactDOM from 'react-dom';
import ButtonDemo from './views/ButtonDemo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ButtonDemo />, div);
  ReactDOM.unmountComponentAtNode(div);
});
