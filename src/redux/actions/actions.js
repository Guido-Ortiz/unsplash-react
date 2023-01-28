import axios from "axios";
import { ADD_PHOTO, GET_PHOTOS, SEARCH_PHOTOS } from './constants';

export function getPhotos(){
    return async function(dispatch){
        try{
            // const response = await axios.get(`https://api.unsplash.com/photos?client_id=8-HoFBL24ef3QeM66u8MJePbw0Ec1ukWYes5Y7A7CHc`)
            const response = await axios.get(`https://api.unsplash.com/photos?per_page=3?client_id=8-HoFBL24ef3QeM66u8MJePbw0Ec1ukWYes5Y7A7CHc`)
            return dispatch({
                type: GET_PHOTOS,
                payload: response.data
            })
        } catch(e){
            console.log(e)
        }
    }
}

export function searchPhotos(search){
    return async function(dispatch){
        try {
            const response = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=8-HoFBL24ef3QeM66u8MJePbw0Ec1ukWYes5Y7A7CHc`)
            return dispatch({
                type: SEARCH_PHOTOS,
                payload: response.data
            })
        } catch(e) {
            console.log(e)
        }
    }
}

export function addPhoto(payload){
    return{
        type: ADD_PHOTO,
        payload
    }
}