import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Quote from '../Quotes/quote';

afterEach(() => {
  cleanup();
});

test('Test loading screen', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});
