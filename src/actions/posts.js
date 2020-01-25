import axios from "axios";
import { routes } from '../containers/Router';
import { push } from "connected-react-router";

export const setPosts = (postList) => ({
  type: 'SET_POSTS',
  payload: {
    postList,
  }
})

export const setPostDetail = (postDetail) => ({
  type: 'SET_POST_DETAIL',
  payload: {
    postDetail,
  }
})

export const getAllPosts = () => async (dispatch) => {
  const token = window.localStorage.getItem('token')
  const requestHeader = {
    headers: {
      auth: token,
    }
  }
  try {
    const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts', requestHeader)
    dispatch(setPosts(response.data.posts))

  } catch {
    dispatch(push(routes.root))
  }
}

export const createNewPost = (bodyContent) => async (dispatch) => {
  const token = window.localStorage.getItem('token')
  const requestHeader = {
    headers: {
      auth: token,
    }
  }
  try{
    await axios.post('https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts', bodyContent, requestHeader)
    dispatch(getAllPosts())
  } catch {
    window.alert("Erro ao enviar o post.")
  }
}

export const getPostDetail = (idPost) => async (dispatch) => {
  const token = window.localStorage.getItem('token')
  const requestHeader = {
    headers: {
      auth: token,
    }
  }
 try{ const response = await axios.get(`https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts/${idPost}`,
  requestHeader)

  dispatch(setPostDetail(response.data.post))
  dispatch(push(routes.postId))
  
  } catch(e) {
    window.alert(e.response.data.message)
    dispatch(push(routes.root))
  }
}

export const postVote = (idPost, directionOfVote) => async (dispatch) => {
  const token = window.localStorage.getItem('token')
  const requestHeader = {
    headers: {
      auth: token,
    }
  }
  const requestBody = {
    direction: directionOfVote
  }
  try {
    await axios.put(`https://us-central1-missao-newton.cloudfunctions.net/fourEddit/posts/${idPost}/vote`, requestBody, requestHeader)
    dispatch(getAllPosts())
  } catch {
    window.alert("Não foi possível registrar seu voto.")
  }
}