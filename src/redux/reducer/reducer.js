import { GET_PHOTOS, SEARCH_PHOTOS } from "../actions/constants";

const initialState = {
    photos: [],
    allPhotos: [],
    filters: [],
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

        default:
            return state
        //break;
    }
}
export default rootReducer