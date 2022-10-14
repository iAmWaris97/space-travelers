import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Missions from '../components/Missions/Missions';
import store from '../redux/configureStore';

describe('Testing Missions', () => {
  it('Should render missions', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Missions />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});
