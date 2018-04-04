import React from 'react';
import { shallow } from 'enzyme';
import NextButton from '../NextButton';

describe('NextButton Component', () => {

  let wrapper
  beforeEach(() => {
    wrapper = shallow(<NextButton />);
  });

  it('renders without crashing', () => {
    wrapper;
  });

  it('find one input tag', () => {
    expect(wrapper.find('input').length).toEqual(1)
  });

})
