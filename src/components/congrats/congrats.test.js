import { shallow } from 'enzyme';

import { checkProps, findByTestAttr } from '../../test/test.utils';
import Congrats from './congrats.components';

const defaultProps = {
    success: false
};

/**
 * Factory function to create a ShallowWrapper for the component
 * @function setup
 * @param {object} props 
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<Congrats {...setupProps} />);
}

test('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1);
});

test('renders no text when `success` prop is false', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.text()).toBe('');
});

test('renders non-empty congratulatory message when `success` prop is true', () => {
    const wrapper = setup({ success: true });
    const component = findByTestAttr(wrapper, 'congrats-message');
    expect(component.text().length).not.toBe(0);
});

test('does not throw warning with expected props', () => {
    const expectedProps = { success: false };
    checkProps(Congrats, expectedProps);
})