import React from 'react';
import { shallow } from 'enzyme';

import LogIn from './login';

describe('<LogIn />', () => {
  it('Renders without crashing', () => {
    shallow(<LogIn />);
  });
});