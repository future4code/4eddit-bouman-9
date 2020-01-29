const initialState = {
  postArr: [],
  postDetailArr: null,
  isLoading: false,
}

export const posts = ( state = initialState, action) => {
  switch (action.type) {
    case 'SET_POSTS':
      return { ...state, postArr: action.payload.postList}
    case 'SET_POST_DETAIL':
      return { ...state, postDetailArr: action.payload.postDetail }
    case 'CHANGE_LOADING_STATUS':
      return { ...state, isLoading: !state.isLoading }
    default:
      return state
  }
}