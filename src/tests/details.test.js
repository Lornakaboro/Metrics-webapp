import React from 'react';
import renderer from 'react-test-renderer';
import Details from '../__mocks__/Details';

describe('Details', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Details />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
