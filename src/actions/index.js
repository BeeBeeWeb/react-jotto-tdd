import axios from 'axios';

export const getSecretWord = () => {
    // TODO: write actual action in Redux / Context sections
    return axios.get('http:localhost:3030').then((response) => {
        return response.data;
    });
}