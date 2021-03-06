import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('App Component', () => {

  /// Mock fetchGiphy ??

  let wrapper
  let wrapperInstance
  beforeEach(function() {
    wrapper = shallow(<App />)
    wrapperInstance = wrapper.instance()

  });

  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('find SearchBar Component', () => {
    expect(wrapper.find('SearchBar').length).toEqual(1)
  });

  it('Next button component shouldn\'t be rendered', () => {
    wrapper.setState({gifs: [1,2,3,4,5,6,7,8,9,10]})
    expect(wrapper.find('NextButton').length).toEqual(0)
  });

})
