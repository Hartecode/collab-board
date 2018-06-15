import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Notice from './notice';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<Notice />', () => {
  it('Renders without crashing', () => {
    shallow(<Provider store={store}>
                <Notice />
            </Provider>);
  });
});