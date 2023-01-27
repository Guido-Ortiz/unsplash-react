import axios from "axios";
import { GET_PHOTOS } from './constants';

export function getPhotos(){
    return async function(dispatch){
        try{
            const response = await axios.get('')
            return dispatch({
                type: GET_PHOTOS,
                payload: response.data
            })
        } catch(e){
            console.log(e)
        }
    }
}