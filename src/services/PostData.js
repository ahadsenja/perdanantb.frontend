export function postData(userData) {
    let baseUrl = 'http://perdana-indonesia.herokuapp.com/api/v1/user/login'
    const token = userData.id
    return new Promise((resolve, reject) => {
        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json', 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(userData)
        })
        .then((response) => localStorage.setItem('userData', response.data))
        .then((responseJson) => {
            resolve(responseJson)
        })
        .catch((error) => {
            reject(error)
        })
    })
}