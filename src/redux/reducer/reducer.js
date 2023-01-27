import { GET_PHOTOS } from "../actions/constants"

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


        default:
            return state
        //break;
    }
}
export default rootReducer