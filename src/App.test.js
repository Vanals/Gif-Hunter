import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Component', () => {

  /// Mock fetchGiphy ??

  let wrapper
  beforeEach(function() {
    wrapper = shallow(<App />)
  });

  it('renders without crashing', () => {
    shallow(<App />);
  });

})
