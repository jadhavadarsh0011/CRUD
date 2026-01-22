
import axios from 'axios'
const BaseUrl="https://68c104c80b196b9ce1c59de4.mockapi.io/api/users/crud";
export const addUser=(user)=>axios.post(BaseUrl , user);
export const deleteUser=(id)=>axios.delete(`${BaseUrl}/${id}`);
export const getAll=()=>axios.get(BaseUrl);
export const updateUser=(id,users)=>axios.put(`${BaseUrl}/${id}`,users);
export const getUserById=(id)=>axios.put(`${BaseUrl}/${id}`);