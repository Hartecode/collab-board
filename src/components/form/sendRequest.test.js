import React from 'react';
import { shallow } from 'enzyme';

import SendRequestForm from './sendRequest';

describe('<SendRequestForm />', () => {
  it('Renders without crashing', () => {
    shallow(<SendRequestForm />);
  });
});	