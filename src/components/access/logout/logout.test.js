import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import LogOut from './logout';

const mockStore = configureMockStore();
const store = mockStore({}); 

describe('<LogOut />', () => {
	it('Renders without crashing', () => {
	    shallow(<Provider store={store}>
	                <LogOut />
	            </Provider>);
	});
});