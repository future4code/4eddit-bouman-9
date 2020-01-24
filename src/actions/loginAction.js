import axios from 'axios';
import { routes } from "./../containers/Router";
import { push } from "connected-react-router";



export const postLogin = (login) =>async (dispatch) => {
    try {const response = await axios.post('https://us-central1-missao-newton.cloudfunctions.net/fourEddit/login',
        {
            email: login.email,
            password: login.password
        }
    )
    window.localStorage.setItem("token",response.data.token) 
    dispatch(push(routes.feed))   
    }
    catch(e) {
        window.alert(e.response.data.message)
    }
}

export const postSignup = (signup) => async (dispatch) => {
    try {const response = await axios.post(`https://us-central1-missao-newton.cloudfunctions.net/fourEddit/signup`,
    
    {
        email: signup.email,
        password: signup.password,
        username: signup.userName
    }
    
  )
    window.localStorage.setItem("token",response.data.token)
    dispatch(push(routes.feed))
}
 catch (e){
    window.alert(e.response.data.message)
 }
}

