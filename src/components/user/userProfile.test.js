import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import UserProfile from './userProfile';

const mockStore = configureMockStore();
const store = mockStore({}); 

describe('<UserProfile />', () => {
  it('Renders without crashing', () => {
    shallow(<Provider store={store}>
                <UserProfile />
            </Provider>);
  });
});