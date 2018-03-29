import React from 'react';
import { shallow } from 'enzyme';
import GifFeed from '../GifFeed';

describe('GifFeed Component', () => {

  let wrapper
  beforeEach(() => {
    wrapper = shallow(<GifFeed />);
  });

  it('renders without crashing', () => {
    wrapper;
  });

  it('find input tag', () => {
    expect(wrapper.find('iframe').length).toEqual(1)
  });

})
