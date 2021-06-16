import { mount } from 'enzyme';
import App from './App';
import { findByTestAttr } from './test/test.utils';

// activate global mock for getSecretWord, so that it does not make network call
jest.mock('./actions');
// eslint-disable-next-line import/first
import { getSecretWord as mockGetSecretWord } from './actions';

/**
 * @function setup - Setup function for the App component
 * @returns {ShallowWrapper}
 */
const setup = () => {
  // use mount, because useEffect not called on `shallow`
  // https://github.com/airbnb/enzyme/issues/2086
  return mount(<App />);
}

test('renders without error', () => {
  const wrapper = setup();
  const app = findByTestAttr(wrapper, 'component-app')
  expect(app).toHaveLength(1);
});

describe('get secret word', () => {
  beforeEach(() => {
    // clear the mock calls from previous tests
    mockGetSecretWord.mockClear();
  });

  test('get secret word on app mount', () => {
    // eslint-disable-next-line no-unused-vars
    const wrapper = setup();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
  });

  test('getSecretWord does not run on every app update/render', () => {
    const wrapper = setup();
    mockGetSecretWord.mockClear();
    // using setProps because wrapper.update() doesn't trigger useEffect
    // https://github.com/enzymejs/enzyme/issues/2254
    wrapper.setProps();

    expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
  });
})
