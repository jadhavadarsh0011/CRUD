import './register.css';
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa6";
import { FaMobileRetro } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { addUser } from './Service/api';


const Register = () => {
  const navigate =useNavigate()
   const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');

  const handleAddUser = async (e) => {
    e.preventDefault();
    const UserData = {fullname, email, address, mobile, password};
    await addUser(UserData)
      .then(res => {
        console.log(res.data);
        setFullname('')
        setEmail('')
        setAddress('')
        setMobile('')
        setPassword('')
      });
      alert("SuccessFully Added ! ")
      navigate("/login")
  }
  return (
    <>
    <form action="" className='body' onSubmit={handleAddUser}>
      <h1>Register From</h1>
     <FaUser  />
     <input type='text' placeholder='Enter Full Name' className='input' name='fullname' value={fullname} onChange={(e) => setFullname(e.target.value)}/>
     <br />
     <MdEmail />
     <input type='email' placeholder='Enter Email'  className='input' name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
    <br />
     <FaAddressCard />
     <textarea  placeholder='Enter address' className='address' name="address" value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
     <br />
     <FaMobileRetro />
     <input type='text' placeholder='Enter Mobile Number ' className='input' name='mobile' value={mobile} onChange={(e) => setMobile(e.target.value)}/>
     <br />
     <RiLockPasswordFill />
     <input type="password" placeholder='Set PassWord' className='input'  name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
     <br />
     <button className='submit' >Register</button> 
    <br />
    <span>Login here ? </span><span onClick={()=>navigate("/login")} className='span'>Login</span>
    </form>
    </>
  )
}

export default Register
