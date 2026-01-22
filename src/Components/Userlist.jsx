import { useEffect, useState } from 'react'
import { getAll ,deleteUser} from './Service/api'
import './userlist.css'
import {useNavigate} from 'react-router-dom'


const Userlist = () => {
   const navigate =useNavigate()

  const [data, setData] = useState([]);
  useEffect(() => {
    fechData();
  }, []);

  const fechData = async () => {
    // fetch("https://68c104c80b196b9ce1c59de4.mockapi.io/api/users/crud")
    // .then(response=>response.json())
    // .then(result=>{
    //   setData(result)
    //   console.log(result);
    // })
    await getAll()
      .then(result => {
        setData(result.data)
      })
  };
  const handledelete = async(id)=>{
    await deleteUser(id);
    fechData();
  };
  return (
    <>

      <table >
        <thead>
          <tr className='thead'>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>address</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.fullname}</td>
              <td>{user.email}</td>
              <td>{user.mobile}</td>
              <td>{user.address}</td>
              <td>{user.password}</td>
              <td>
                <button onClick={()=>handledelete(user.id)} >Delete</button>
                <button onClick={()=>navigate(`/updateUser/${user.id}`)}>Update</button>
              </td>

            </tr>
            
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Userlist
