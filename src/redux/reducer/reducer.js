import { ADD_PHOTO, GET_PHOTOS, REMOVE_PHOTO, SEARCH_PHOTOS, EDIT_PHOTO, ORDER_HEIGTH, ORDER_WIDTH, ORDER_LIKES, ORDER_DATE } from "../actions/constants";

const initialState = {
    photos: [],
    allPhotos: [],
    filters: [],
    favorites: [{
        id: "9HI8UJMSdZA",
        title: "Relay runner",
        description: "man on running field",
        width: 3481,
        heigth: 2321,
        likes: 1601,
        url_full: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw0MDM1OTJ8MHwxfHNlYXJjaHwyfHxzcG9ydHxlbnwwfHx8fDE2NzQ5ODUyNTE&ixlib=rb-4.0.3&q=80",
        url_thumb: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDM1OTJ8MHwxfHNlYXJjaHwyfHxzcG9ydHxlbnwwfHx8fDE2NzQ5ODUyNTE&ixlib=rb-4.0.3&q=80&w=200", liked: "11/01/2022"
    }, {
        id: "2",
        title: "aaaa",
        description: "bbbbbbbb",
        width: 23,
        heigth: 4000,
        likes: 32,
        url_full: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw0MDM1OTJ8MHwxfHNlYXJjaHwyfHxzcG9ydHxlbnwwfHx8fDE2NzQ5ODUyNTE&ixlib=rb-4.0.3&q=80",
        url_thumb: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDM1OTJ8MHwxfHNlYXJjaHwyfHxzcG9ydHxlbnwwfHx8fDE2NzQ5ODUyNTE&ixlib=rb-4.0.3&q=80&w=200", liked: "12/02/2022"
    }],
    allFavorites: [{
        id: "9HI8UJMSdZA",
        title: "Relay runner",
        description: "man on running field",
        width: 3481,
        heigth: 2321,
        likes: 1601,
        url_full: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw0MDM1OTJ8MHwxfHNlYXJjaHwyfHxzcG9ydHxlbnwwfHx8fDE2NzQ5ODUyNTE&ixlib=rb-4.0.3&q=80",
        url_thumb: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDM1OTJ8MHwxfHNlYXJjaHwyfHxzcG9ydHxlbnwwfHx8fDE2NzQ5ODUyNTE&ixlib=rb-4.0.3&q=80&w=200", liked: "11/01/2022"
    }, {
        id: "2",
        title: "aaaa",
        description: "bbbbbbbb",
        width: 23,
        heigth: 4000,
        likes: 32,
        url_full: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?crop=entropy&cs=tinysrgb&fm=jpg&ixid=Mnw0MDM1OTJ8MHwxfHNlYXJjaHwyfHxzcG9ydHxlbnwwfHx8fDE2NzQ5ODUyNTE&ixlib=rb-4.0.3&q=80",
        url_thumb: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDM1OTJ8MHwxfHNlYXJjaHwyfHxzcG9ydHxlbnwwfHx8fDE2NzQ5ODUyNTE&ixlib=rb-4.0.3&q=80&w=200", liked: "12/02/2022"
    }]

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



        default:
            return state
        //break;
    }
}
export default rootReducer