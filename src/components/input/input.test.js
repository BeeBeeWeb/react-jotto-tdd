import { shallow } from 'enzyme';
import { findByTestAttr } from '../../test/test.utils';
import Input from './input.component';

const setup = () => {
    return shallow(<Input />);
}

test('renders without errors', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-input');
    expect(component.length).toBe(1);
})