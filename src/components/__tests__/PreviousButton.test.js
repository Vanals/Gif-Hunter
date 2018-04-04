import React from 'react';
import { shallow } from 'enzyme';
import PreviousButton from '../PreviousButton';

describe('PreviousButton Component', () => {

  let wrapper
  beforeEach(() => {
    wrapper = shallow(<PreviousButton />);
  });

  it('renders without crashing', () => {
    wrapper;
  });

  it('find one input tag', () => {
    expect(wrapper.find('input').length).toEqual(1)
  });

})
