const initialState = {
  postArr: [],
  postDetailArr: null,
}

export const posts = ( state = initialState, action) => {
  switch (action.type) {
    case 'SET_POSTS':
      return { ...state, postArr: action.payload.postList}
    case 'SET_POST_DETAIL':
      return { ...state, postDetailArr: action.payload.postDetail }
    default:
      return state
  }
}