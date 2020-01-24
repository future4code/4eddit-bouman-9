import axios from "axios";
import { routes } from '../containers/Router';
import { push } from "connected-react-router";

export const setPosts = (postList) => ({
  type: 'SET_POSTS',
  payload: {
    postList,
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