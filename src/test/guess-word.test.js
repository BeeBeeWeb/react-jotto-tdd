import React from 'react';
import { mount } from 'enzyme';

import App from '../App';
import { findByTestAttr } from './test.utils';

/**
 * Create App wrapper with specified initial conditions,
 * then submit a guessed word of 'train'
 * @param {object} state - Initial conditions
 * @returns {Wrapper} - Enzyme wrapper of mounted App component
 */
const setup = (state = {}) => {

    // TODO: Apply state
    const wrapper = mount(<App />);
    // console.log(wrapper.debug());

    // find and add value to input box
    const inputBox = findByTestAttr(wrapper, 'input-box');
    inputBox.simulate('change', { target: { value: 'train' } });

    // simulate click on submit button
    const submitBtn = findByTestAttr(wrapper, 'submit-button');
    submitBtn.simulate('click', { preventDefault: () => { } });

    return wrapper;
};

describe('when invalid word guessed', () => {
    test.todo('then guessed word table does not get another row');
})

describe.skip('no words guessed', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = setup({
            secretWord: 'party',
            success: false,
            guessedWords: []
        });
    });

    test('creates a GuessedWords table with one row', () => {
        const guessedWordsRows = findByTestAttr(wrapper, 'guessed-word');
        expect(guessedWordsRows.length).toBe(1);
    });
});

describe.skip('some words have been guessed', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = setup({
            secretWord: 'party',
            success: false,
            guessedWords: [
                { guessedWord: 'agile', letterMatchCount: 1 },
                { guessedWord: 'heart', letterMatchCount: 3 }
            ]
        });
    });

    test('creates a GuessedWord table with 3 rows', () => {
        const guessedWordsRows = findByTestAttr(wrapper, 'guessed-word');
        expect(guessedWordsRows.length).toBe(3);
    });
});

describe.skip('secret word has been guessed', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = setup({
            secretWord: 'party',
            success: false,
            guessedWords: [
                { guessedWord: 'agile', letterMatchCount: 1 }
            ]
        });

        // add value same as `secretWord`
        const inputBox = findByTestAttr(wrapper, 'input-box');
        inputBox.simulate('change', { target: { value: 'party' } });

        // simulate click on submit button
        const submitBtn = findByTestAttr(wrapper, 'submit-button');
        submitBtn.simulate('click', { preventDefault: () => { } });
    });

    test('creates a GuessedWord table with 3 rows', () => {
        const guessedWordsRows = findByTestAttr(wrapper, 'guessed-word');
        expect(guessedWordsRows.length).toBe(3);
    });

    test('displays congrats message', () => {
        const congrats = findByTestAttr(wrapper, 'component-congrats');
        expect(congrats.text().length).toBeGreaterThan(0);
    });

    test('does not display input component content', () => {
        const inputBox = findByTestAttr(wrapper, 'input-box');
        expect(inputBox.exists()).toBe(false);

        const submitBtn = findByTestAttr(wrapper, 'submit-button');
        expect(submitBtn.exists()).toBe(false);
    });
});