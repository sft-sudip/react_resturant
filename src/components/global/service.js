import config from './config';
import axios from 'axios';

export function userRegister(data){
    return axios.post(`${config.apiBaseUrl}register`, data)
}

export function userLogin(data){
    return axios.post(`${config.apiBaseUrl}login`, data)
}

export function getUserList(params){
    return axios.get(`${config.apiBaseUrl}users${params}`)
}