import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './Components/Register'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import UpdateUser from './Components/UpdateUser'
import AddUser from './Components/AddUser'
import Userlist from './Components/Userlist';

// import Bostex from './Components/Bostex'
// import Swiperwx from './Components/Swiperwx'
// import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/updateuser/:id" element={<UpdateUser />} />
        <Route path="/AddUser" element={<AddUser />} />
        <Route path="/Userlist" element={<Userlist />} />

      </Routes>
    </BrowserRouter>
    // <Swiperw/>

    // <Bostex/>
  )
}

export default App