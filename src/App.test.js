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

  it('find SearchBar Component', () => {
    expect(wrapper.find('SearchBar').length).toEqual(1)
  });

  it('find NextButton component', () => {
    expect(wrapper.find('NextButton').length).toEqual(1)
  });

})
