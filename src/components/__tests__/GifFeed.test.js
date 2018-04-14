import React from 'react';
import { shallow } from 'enzyme';
import GifFeed from '../GifFeed';

describe('GifFeed Component', () => {

  let wrapper
  beforeEach(() => {
    wrapper = shallow(<GifFeed />);
  });

  xit('renders without crashing', () => {
    wrapper;
  });

  xit('find iframe tag', () => {
    expect(wrapper.find('iframe').length).toEqual(1)
  });

})
