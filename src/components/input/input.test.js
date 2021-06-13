import { shallow } from 'enzyme';
import React from 'react';
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
});

describe('state controlled input field', () => {
    test('state updates value of input box upon change', () => {
        const mockSetCurrentGuess = jest.fn();
        React.useState = jest.fn(() => ['', mockSetCurrentGuess]);

        const wrapper = setup();
        const inputBox = findByTestAttr(wrapper, 'input-box');

        const mockEvent = { target: { value: 'train' } };
        inputBox.simulate('change', mockEvent);

        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
    });
});