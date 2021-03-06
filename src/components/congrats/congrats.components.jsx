import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional React component for congratulatory message
 * @function
 * @param {object} props - React props
 * @returns {JSX.Element} - Rendered Component (or null if `success` prop is false)
 */
const Congrats = ({ success }) => {

    if (success) {
        return (
            <div data-test="component-congrats" className="alert alert-success">
                <span data-test="congrats-message">
                    Congratulations! You guessed the word!
                </span>
            </div>
        );
    } else {
        return (
            <div data-test="component-congrats"></div>
        );
    }
}

Congrats.propTypes = {
    success: PropTypes.bool.isRequired
}

export default Congrats;