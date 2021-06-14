import { shallow } from 'enzyme';
import App from './App';
import { findByTestAttr } from './test/test.utils';

/**
 * @function setup - Setup function for the App component
 * @returns {ShallowWrapper}
 */
const setup = () => {
  return shallow(<App />);
}

test('renders without error', () => {
  const wrapper = setup();
  const app = findByTestAttr(wrapper, 'component-app')
  expect(app).toHaveLength(1);
});
