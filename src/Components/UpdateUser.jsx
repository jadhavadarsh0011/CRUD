import './adduser.css';
import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaMobileRetro } from "react-icons/fa6";
import {  useParams } from 'react-router-dom';
import { getUserById, updateUser } from "./Service/api";
import { useNavigate } from 'react-router-dom';

const UpdateUser = () => {
  const navigate = useNavigate();
  const {id}=useParams();
  // const[data,setData]=useState(" ");
   const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');


  useEffect(()=>{
    fetchUser();
  },[id]);

 const fetchUser= async ()=> await getUserById(id)
 .then(
  res=>{
    setFullname(res.data.fullname)
    console.log(res.data);
    
  })
  const handleUpadate =async(e)=>{
    e.preventDefault()
    const users={fullname,email,mobile,address,password}
    await updateUser(id,users)
    .then(res=>{
      console.log(res.data);
      navigate('/Userlist')
    })
  }

  return (
   <> 
       <form className='form'  onSubmit={handleUpadate} >
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

export default UpdateUser
