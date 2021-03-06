import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import SnapShot from './projectSnap';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<SnapShot />', () => {
  it('Renders without crashing', () => {
    shallow(<Provider store={store}>
                <SnapShot />
            </Provider>);
  });
});