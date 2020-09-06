import { getToken, getUser, clear, store} from './AppStorage'

import axios from 'axios'


const loggedIn = () => {
    return hasToken()
}

const login = (data) => {
    axios.post('http://127.0.0.1:3000/api/auth/login', data)
        .then(res => responseAfterLogin(res)) 
        .catch(error => console.log(error))
}

const responseAfterLogin = (res) => {
    const access_token = res.data.access_token
    const username = res.data.user

    if(access_token!="") {
        store(username, access_token)
        window.location = './'   
    }
}

const hasToken = () => {
    const storedToken = getToken()
    //alert(storedToken)
    if (storedToken) {
        return true
        //return isValid(storedToken) ? true : false
    }
    return false
}

const logout = () => {
    axios.post('http://127.0.0.1:3000/api/auth/logout', {
        headers: { Authorization: 'Bearer '+ getToken() }
    })
        .then(res => console.log(res.data.message)) 
        .catch(error => console.log(error))
    clear()
    window.location = './login'
}

const name = () => {
    if (loggedIn()) {
        return getUser()
    }
    else return "no logged"
}



export {
    loggedIn,
    login,
    responseAfterLogin,
    hasToken,
    logout,
    name
}