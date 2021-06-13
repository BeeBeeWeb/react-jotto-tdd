import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';

test('renders learn react link', () => {
  const wrapper = shallow(<App />);
  const app = wrapper.find('.container');
  expect(app.length).toBe(1);
});
