import './adduser.css'
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa6";
import { FaMobileRetro } from "react-icons/fa6";
import { RiLockPasswordFill } from "react-icons/ri";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addUser } from './Service/api';

const AddUser = () => {
  const navigate = useNavigate();
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
      navigate("/Adduser")
  }

  return (
    <>
      <form className='form' onSubmit={handleAddUser}>
        <h1>Add User</h1>
        <FaUser id='icon' /><input type="text" placeholder="Enter your Full name" id='input' name='fullname' value={fullname} onChange={(e) => setFullname(e.target.value)} /> <br />
        <MdEmail id='icon' /> <input type="email" placeholder="Enter your Email Address" id='input' name='email' value={email} onChange={(e) => setEmail(e.target.value)} /><br />
        <FaAddressCard id='icon' /><textarea id="address" placeholder="Enter your Address " name="address" value={address} onChange={(e) => setAddress(e.target.value)} ></textarea><br />
        <FaMobileRetro id='icon' /><input type="text" placeholder="Enter your Mobile Number" id='input' name='mobile' value={mobile} onChange={(e) => setMobile(e.target.value)} /><br />
        <RiLockPasswordFill id='icon' /><input type="password" placeholder="Set Password" id='input' name='password' value={password} onChange={(e) => setPassword(e.target.value)} /><br />
        <button >Submit</button>
      </form>
    </>
  )
}

export default AddUser
