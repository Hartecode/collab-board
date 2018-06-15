import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import Request from './request';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<Request />', () => {
  it('Renders without crashing', () => {
    shallow(<Provider store={store}>
                <Request />
            </Provider> );
  });
});
