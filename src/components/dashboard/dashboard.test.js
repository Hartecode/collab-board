import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import Dashboard from './dashboard';

const mockStore = configureMockStore();
const store = mockStore({}); 

describe('<Dashboard />', () => {
  it('Renders without crashing', () => {
    shallow(<Provider store={store}>
                <Dashboard />
            </Provider>);
  });
});