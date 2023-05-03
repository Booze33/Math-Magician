import renderer from 'react-test-renderer';
import Calculator from '../Calculator/calculator';

test('Test paragraph-1', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
