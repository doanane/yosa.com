import axios from './axios';

//POST requests
const createVolunteer = (data) => axios.post('volunteers/', data);
const createContactUsMesasge = (data) => axios.post('contactus/', data);

//GET requests
const fetchNews = () => axios.get('/news/');
const fetchgallery = () => axios.get('/gallery/')

export {createVolunteer, createContactUsMesasge, fetchNews, fetchgallery}