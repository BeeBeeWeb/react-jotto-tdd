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
    let wrapper;
    let mockSetCurrentGuess = jest.fn();
    let originalUseState;

    beforeEach(() => {
        mockSetCurrentGuess.mockClear();
        originalUseState = React.useState;
        React.useState = jest.fn(() => ['', mockSetCurrentGuess]);
        wrapper = setup();
    });

    afterEach(() => {
        React.useState = originalUseState;
    });

    test('state updates value of input box upon change', () => {
        const inputBox = findByTestAttr(wrapper, 'input-box');

        const mockEvent = { target: { value: 'train' } };
        inputBox.simulate('change', mockEvent);

        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
    });

    test('state updated value of input box upon submit button click', () => {
        const submitBtn = findByTestAttr(wrapper, 'submit-button');

        submitBtn.simulate('click', { preventDefault: () => {}});

        expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
    });
});