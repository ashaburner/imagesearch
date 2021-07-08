import React from "react";
import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const API_KEY = '22403889-3b19d8d69f8355a1fc746df7c';

export const getImages = async (text) => {
    try{
        const data = await axios.get(`${URL}/?key=${API_KEY}&q=${text}&image_type=photo`)
        return data;
    }catch(error){
        console.log(error)
    }
}