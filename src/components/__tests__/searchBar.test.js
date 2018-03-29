import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from '../SearchBar';

describe('SearchBar Component')

it('renders without crashing', () => {
  shallow(<SearchBar />);
});
