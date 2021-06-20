import axios from 'axios';

export const actionTypes = {
    CORRECT_GUESS: 'CORRECT_GUESS'
}

/**
 * @function correctGuess
 * @returns {object} - Action object with type 'CORRECT_GUESS'
 */
export function correctGuess() {
    return { type: actionTypes.CORRECT_GUESS };
}

/**
 * @function getSecretWord
 * @returns {Promise} - Promise that resolves to secret word
 */
export const getSecretWord = () => {
    // TODO: write actual action in Redux / Context sections
    return axios.get('http:localhost:3030').then((response) => {
        return response.data;
    });
}