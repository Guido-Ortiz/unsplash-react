import { ADD_PHOTO, GET_PHOTOS, REMOVE_PHOTO, SEARCH_PHOTOS, EDIT_PHOTO } from "../actions/constants";

const initialState = {
    photos: [],
    allPhotos: [],
    filters: [],
    favorites: []
    // diets: [],
    // detail: null
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PHOTOS:
            return {
                ...state,
                photos: action.payload,
                allPhotos: action.payload,
                filters: action.payload
            }
        //break;
        case SEARCH_PHOTOS:
            return {
                ...state,
                photos: action.payload,
                allPhotos: action.payload,
                filters: action.payload
            }

        case ADD_PHOTO:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }

        case REMOVE_PHOTO:
            return{
                ...state,
                favorites: state.favorites.filter(photos => photos.id !== action.payload)
            }

        case EDIT_PHOTO:
            // console.log(action.payload)
            const photo = state.favorites.find(e => e.id === action.payload.id)
            photo.description = action.payload.newDescription
            // console.log(photo) 
            return{
                ...state,
                favorites: state.favorites.map(e => e)
            }
        default:
            return state
        //break;
    }
}
export default rootReducer