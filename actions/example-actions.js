export const actionTypes = {
    GET_POSTS: 'GET_POSTS',
    GET_POSTS_SUCCESS: 'GET_POSTS_SUCCESS',
    API_FAIL: 'API_FAIL'
}

export const getPosts = () => dispatch => {
    return dispatch({type: actionTypes.GET_POSTS})
}

export const getPostsSuccess = data => dispatch => {
    return dispatch({type: actionTypes.GET_POSTS_SUCCESS, payload: data})
}

export const getPostsError = error => dispatch => {
    return dispatch({type: actionTypes.API_FAIL, payload: error})
}