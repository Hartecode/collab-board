import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Project from './project';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<Project />', () => {
  it('Renders without crashing', () => {
    shallow(<Provider store={store}>
                <Project />
            </Provider>);
  });
});