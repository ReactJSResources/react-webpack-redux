import axios from 'axios';

function getUsers() {
    return axios.get('https://jsonplaceholder.typicode.com/users', {
        headers: { 'Content-Type': 'application/json' }
    });
}

export default {
    getUsers
};
