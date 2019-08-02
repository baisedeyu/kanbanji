import fetch from 'dva/fetch';
// import $ from 'jquery';
import fetchJsonp from 'fetch-jsonp';

function parseJSON(response) {
  console.log(response)
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw  error;
}

export default function request(url) {
  return fetchJsonp(url)
    .then(parseJSON)
    .catch(err => ({ err }));
}
