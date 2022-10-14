import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Profile from '../components/Profile/Profile';
import store from '../redux/configureStore';

describe('Testing profile', () => {
  it('Should render profile page', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Profile />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});
