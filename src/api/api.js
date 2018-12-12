import axios from 'axios'

export const proxy = axios.create({
    baseURL: (process.env.NODE_ENV === 'DEV' ? 'http://localhost:3300/': 'https://addressbook2-server.herokuapp.com/')
})

export function getConfig() {
    return { headers: {'auth': sessionStorage.getItem('token') } }
}

export const handleError = error => {
    let errorMessage = ''
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response);
        errorMessage = error.response.data.message;
        // console.log(error.response.status);
        // console.log(error.response.headers);
    } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the 
        // browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
        errorMessage = 'Network error'
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
        errorMessage = error.message;
    }
    console.log(error.config);
    return errorMessage;
}
