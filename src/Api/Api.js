import * as axios from "axios";

const instens = axios.create({baseURI:`http://localhost:5000`, headers: {}});

export const authUser = {login(username, password){return instens.post(`mutation{
login(
  username: ${username}
  password: ${password}
){
  token
} 
}`)}}