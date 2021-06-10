import checkPropTypes from 'check-prop-types';

/**
 * Returns ShallowWrapper containing node(s) of the given data-test attribute value
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within
 * @param {string} attrValue - data-test attribute value
 * @returns 
 */
export const findByTestAttr = (wrapper, attrValue) => {
    return wrapper.find(`[data-test="${attrValue}"]`);
}

export const checkProps = (component, conformingProps) => {
    const propError = checkPropTypes(
        // eslint-disable-next-line react/forbid-foreign-prop-types
        component.propTypes,
        conformingProps,
        'prop',
        component.name
    );
    expect(propError).toBeUndefined();
}