import './login.css';
import { useNavigate, useParams } from 'react-router-dom'
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { useEffect, useState } from 'react';
import { getAll } from './Service/api';

const Login = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    fetchUser();
  }, [id]);
  const fetchUser = async () => {
    await getAll()
      .then(result => {
        setData(result.data)
        console.log(result);
      })
  };
  const handleLogin = async (e) => {
    e.preventDefault()
    const user = data.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      alert("Login Successful !");
      navigate("/dashboard");
    } else {
      alert("Email and Password Not match");
    }
  }


  return (

    <>
      <form action="" className='body' style={{ height: "400px" }} onSubmit={handleLogin}>
        <h1>Login</h1>
        <br />
        <MdEmail />
        <input type='email' placeholder='Enetr Email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <RiLockPasswordFill />
        <input type='password' placeholder='Enetr PassWord' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <input type='submit' value='Login' className='loginsub' />
        <br />
        <br />
        <span>Register here ? </span><span onClick={() => navigate("/")} className='span'>Register</span>
      </form>
      {/* {data.map((user) => (
            <tr key={user.id}>
              <td>{user.email}</td>
              <td>{user.password}</td>
            </tr>          
          ))} */}
    </>

  )
}

export default Login
