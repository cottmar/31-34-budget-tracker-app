import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import { configure as configureEnzyme, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import Dashboard from '../component/dashboard/dashboard';

configureEnzyme({ adapter: new Adapter() });

// in order to write the following, you have to understand what's happening in state and reducer.
describe('#Dashboard', () => {
  const initialState = {
    categories: [
      {
        name: 'Cara',
        id: 0.123, // maybe isn't unique id but actually hard coded?
        createdOn: new Date(),
      },
      {
        name: 'Billie',
        id: 0.222, // maybe isn't unique id but actually hard coded?
        createdOn: new Date(),
      },
    ],
    expenses: {
      0.123: [],
      0.222: [],
    },
  };


  test('Testing dashboard interactions with the store', () => {
    const middleware = [];
    const mockStoreFactory = configureStore(middleware);
    const mountedDashboard = mount(<Provider store={mockStoreFactory(initialState)}
    ><Dashboard/></Provider>);

    expect(mountedDashboard.find('CategoryForm')).toBeTruthy();
    expect(mountedDashboard.find('Category').length).toEqual(2);
  });
});
