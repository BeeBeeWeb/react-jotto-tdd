import { shallow } from 'enzyme';
import { checkProps, findByTestAttr } from '../../test/test.utils';
import Input from './input.component';

const defaultProps = {
    secretWord: 'train'
};

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<Input {...setupProps} />);
};

test('renders without errors', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-input');
    expect(component.length).toBe(1);
});

test('does not throw error with expected props', () => {
    checkProps(Input, defaultProps);
})