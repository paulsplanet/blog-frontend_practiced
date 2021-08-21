import axios from "axios";

const client = axios.create();

/*
/* global setup example
    use API address
client.defaults.baseURL = 'https://external-api-server.com/'
    header setup
client.defaults.headers.common['Authorization'] = 'Bearer a1b2c3d4';
    intercepter setup
axios.intercepter.response.use({
    response => {
            when it successed
        return response;
    },
    error => {
            when it failed
        return Promise.reject(error);
    })
}) */


export default client;