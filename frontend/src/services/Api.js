import axios from 'axios'

export default () => {
    return axios.create({
        baseURL: 'https://ihgnsy398h.execute-api.us-west-2.amazonaws.com/dev/'
    }) 
}