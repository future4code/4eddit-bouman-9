const initialState = {
  postArr: []
}

export const posts = ( state = initialState, action) => {
  switch (action.type) {
    case 'SET_POSTS':
      return { ...state, postArr: action.payload.postList}
  
    default:
      return state
  }
}