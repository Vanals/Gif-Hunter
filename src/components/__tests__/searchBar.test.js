import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from '../SearchBar';

describe('SearchBar Component', () => {

  let wrapper
  beforeEach(() => {
    wrapper = shallow(<SearchBar />);
  });

  it('renders without crashing', () => {
    wrapper;
  });

  it('find input tag', () => {
    expect(wrapper.find('input').length).toEqual(1)
  });

})
