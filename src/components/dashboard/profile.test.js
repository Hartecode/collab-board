import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Profile from './profile';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<Profile />', () => {
  it('Renders without crashing', () => {
    shallow(<Provider store={store}>
                <Profile />
            </Provider>);
  });
});