import { ADD_PHOTO, GET_PHOTOS, REMOVE_PHOTO, SEARCH_PHOTOS, EDIT_PHOTO, ORDER_HEIGTH, ORDER_WIDTH, ORDER_LIKES, ORDER_DATE, SEARCH_PHOTO_DESCRIPTION } from "../actions/constants";

const initialState = {
    photos: [],
    allPhotos: [],
    filters: [],
    favorites: [],
    allFavorites: []
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
                favorites: [...state.favorites, action.payload],
                allFavorites: [...state.favorites, action.payload]
            }

        case REMOVE_PHOTO:
            return {
                ...state,
                favorites: state.favorites.filter(photos => photos.id !== action.payload),
                allFavorites: state.favorites.filter(photos => photos.id !== action.payload)
            }

        case EDIT_PHOTO:
            const photo = state.favorites.find(e => e.id === action.payload.id)
            photo.description = action.payload.newDescription
            return {
                ...state,
                favorites: state.favorites.map(e => e),
                allFavorites: state.favorites.map(e => e)
            }

        case ORDER_HEIGTH:
            let order = [...state.allFavorites]

            if (action.payload === 'all') {
                return {
                    ...state,
                    favorites: [...state.allFavorites]
                }
            }
            if (action.payload === 'heigth+') {
                return {
                    ...state,
                    favorites: order.sort(function (a, b) {
                        if (a.heigth < b.heigth) {
                            return 1
                        }
                        if (a.heigth > b.heigth) {
                            return -1
                        }
                        return 0
                    })
                }
            }
            if (action.payload === 'heigth-') {
                return {
                    ...state,
                    favorites: order.sort(function (a, b) {
                        if (a.heigth > b.heigth) {
                            return 1
                        }
                        if (a.heigth < b.heigth) {
                            return -1
                        }
                        return 0
                    })
                }
            }

        case ORDER_WIDTH:
            let width = [...state.allFavorites]

            if (action.payload === 'all') {
                return {
                    ...state,
                    favorites: [...state.allFavorites]
                }
            }
            if (action.payload === 'width+') {
                return {
                    ...state,
                    favorites: width.sort(function (a, b) {
                        if (a.width < b.width) {
                            return 1
                        }
                        if (a.width > b.width) {
                            return -1
                        }
                        return 0
                    })
                }
            }
            if (action.payload === 'width-') {
                return {
                    ...state,
                    favorites: width.sort(function (a, b) {
                        if (a.width > b.width) {
                            return 1
                        }
                        if (a.width < b.width) {
                            return -1
                        }
                        return 0
                    })
                }
            }

        case ORDER_LIKES:
            let likes = [...state.allFavorites]

            if (action.payload === 'all') {
                return {
                    ...state,
                    favorites: [...state.allFavorites]
                }
            }
            if (action.payload === 'likes+') {
                return {
                    ...state,
                    favorites: likes.sort(function (a, b) {
                        if (a.likes < b.likes) {
                            return 1
                        }
                        if (a.likes > b.likes) {
                            return -1
                        }
                        return 0
                    })
                }
            }
            if (action.payload === 'likes-') {
                return {
                    ...state,
                    favorites: likes.sort(function (a, b) {
                        if (a.likes > b.likes) {
                            return 1
                        }
                        if (a.likes < b.likes) {
                            return -1
                        }
                        return 0
                    })
                }
            }

        case ORDER_DATE:
            let date = [...state.allFavorites]

            if (action.payload === 'all') {
                return {
                    ...state,
                    favorites: [...state.allFavorites]
                }
            }
            if (action.payload === 'new') {
                return {
                    ...state,
                    favorites: date.sort(function (a, b) {
                        if (a.liked < b.liked) {
                            return 1
                        }
                        if (a.liked > b.liked) {
                            return -1
                        }
                        return 0
                    })
                }
            }
            if (action.payload === 'old') {
                return {
                    ...state,
                    favorites: date.sort(function (a, b) {
                        if (a.liked > b.liked) {
                            return 1
                        }
                        if (a.liked < b.liked) {
                            return -1
                        }
                        return 0
                    })
                }
            }

        case SEARCH_PHOTO_DESCRIPTION:
            return{
                ...state,
                favorites: state.allFavorites.filter(d => d.description.toLowerCase().includes(action.payload.toLowerCase()))
            }



        default:
            return state
        //break;
    }
}
export default rootReducer