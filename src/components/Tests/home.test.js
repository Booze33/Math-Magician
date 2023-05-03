import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Home from '../Home/home';

afterEach(() => {
  cleanup();
});

test('Test paragraph-1', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
