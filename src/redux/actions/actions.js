import axios from "axios";
import { ADD_PHOTO, GET_PHOTOS, REMOVE_PHOTO, SEARCH_PHOTOS, EDIT_PHOTO, ORDER_HEIGTH, ORDER_WIDTH, ORDER_LIKES, ORDER_DATE, SEARCH_PHOTO_DESCRIPTION, RESET_FILTERS } from './constants';

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

// export function searchPhotos(search){
//     return async function(dispatch){
//         try {
//             const response = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=8-HoFBL24ef3QeM66u8MJePbw0Ec1ukWYes5Y7A7CHc`)
//             return dispatch({
//                 type: SEARCH_PHOTOS,
//                 payload: response.data
//             })
//         } catch(e) {
//             console.log(e)
//         }
//     }
// }

export function searchPhotos(search){
    if(search){
        return async function(dispatch){
            try {
                const response = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${search}&per_page=100&client_id=8-HoFBL24ef3QeM66u8MJePbw0Ec1ukWYes5Y7A7CHc`)
                return dispatch({
                    type: SEARCH_PHOTOS,
                    payload: response.data
                })
            } catch(e) {
                console.log(e)
            }
        }
    } else{
        return async function(dispatch){
            try {
                const response = await axios.get(`https://api.unsplash.com/photos/random?count=100&client_id=8-HoFBL24ef3QeM66u8MJePbw0Ec1ukWYes5Y7A7CHc`)
                return dispatch({
                    type: SEARCH_PHOTOS,
                    payload: response.data
                })
            } catch(e) {
                console.log(e)
            }
        }
    }
}

export function addPhoto(payload){
    return{
        type: ADD_PHOTO,
        payload
    }
}

export function removePhoto(id){
    return{
        type: REMOVE_PHOTO,
        payload: id
    }
}

export function editPhoto(payload){
    return{
        type: EDIT_PHOTO,
        payload
    }
}

export function orderHeigth(payload){
    return{
        type: ORDER_HEIGTH,
        payload
    }
}

export function orderWidth(payload){
    return{
        type: ORDER_WIDTH,
        payload
    }
}

export function orderLikes(payload){
    return{
        type: ORDER_LIKES,
        payload
    }
}

export function orderDate(payload){
    return{
        type: ORDER_DATE,
        payload
    }
}

export function searchPhotoDescription(payload){
    return{
        type: SEARCH_PHOTO_DESCRIPTION,
        payload
    }
}

export function resetFilters(){
    return{
        type: RESET_FILTERS,
    }
}