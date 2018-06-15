import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

import AddProjectForm from './addProject';


const mockStore = configureMockStore();
const store = mockStore({}); 

describe('<AddProjectForm />', () => {
  it('Renders without crashing', () => {
    shallow(<Provider store={store}>
                <AddProjectForm />
            </Provider>);
  });
});