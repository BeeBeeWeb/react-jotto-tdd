module.exports = {
    ...jest.requireActual('..'),
    __esModule: true,
    // TODO: update return value for redux and context implementation 
    getSecretWord: jest.fn().mockReturnValue(Promise.resolve('party'))
}