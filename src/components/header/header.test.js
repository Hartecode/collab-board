import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import Header from './header';

const mockStore = configureMockStore();
const store = mockStore({}); 

describe('<Header />', () => {
  it('Renders without crashing', () => {
    shallow(<Provider store={store}>
                <Header />
            </Provider>);
  });
});