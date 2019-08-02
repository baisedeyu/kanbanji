import request from '../utils/request';



export async function getUser() {
  return request('http://localhost:8080/jersey/rest/test/userJason');
}
