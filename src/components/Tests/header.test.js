import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Header from '../Header/header';

afterEach(() => {
  cleanup();
});

test('Test loading screen', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});
