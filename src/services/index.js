// import { authHeader } from '../helpers/authHeader'

export const userService = {
    login,
    logout,
    // getAll
}

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    }
    return fetch('http://perdana-indonesia.herokuapp.com/api/v1/member/login', requestOptions)
        .then(handleResponse)
        .then(member => {
            if (member) {
                // member.authdata = window.btoa(username + ':' + password)
                localStorage.setItem('token', JSON.stringify(member))
            }
            return member
        })
}

function logout() {
    localStorage.removeItem('user')
}

// function getAll() {
//     const requestOptions = {
//         method: 'GET',
//         headers: authHeader()
//     }
//     return fetch(`/users`, requestOptions).then(handleResponse)
// }

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text)
        if (!response.ok) {
            if (response.status === 401) {
                logout()
            }
            const error = (data && data.message) || response.statusText
            return Promise.reject(error)
        }
        return data
    })
}