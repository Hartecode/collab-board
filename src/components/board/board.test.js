import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import Board from './board';


const mockStore = configureMockStore();
const store = mockStore({});

describe('<Board />', () => {
  it('Renders without crashing', () => {
    shallow(<Provider store={store}>
                    <Board />
                </Provider> );
  });
});
