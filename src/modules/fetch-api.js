import fetch from 'isomorphic-fetch'
//require('es6-promise').polyfill() //allows us to use 'fetch' on older browsers who dont support this method

export default function fetchApi(method, url, data) {
  const body = method.toLowerCase() === 'get' ? {} : { body: JSON.stringify(data) } //if there is a get action, return an emtpy object, otherwise, return a budy stringifying the data

  return fetch(url, {
    method,
    headers: {
      'Accept': 'application/json', //content type
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest', //necessary for server
    },
    credentials: 'same-origin', //the 'coors' request credentials
    ...body //initial request will be empty object/body
  }).then(response => response.json())
}