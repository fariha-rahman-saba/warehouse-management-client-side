import './App.css';
import Header from './pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Blogs from './pages/Blogs/Blogs';
import AddItems from './pages/AddItems/AddItems';
import Login from './pages/Authentication/Login/Login';
import SignUp from './pages/Authentication/SignUp/SignUp';
import ManageInventory from './pages/ManageInventory/ManageInventory';

function App () {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/add-items' element={<AddItems></AddItems>}></Route>
        <Route path='/manage-inventory' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/inventory/:id' element={<AddItems></AddItems>}></Route>
        <Route path='/*' element=''></Route>
        {/* <Route path='/manage' element=''></Route>
        <Route path='' element=''></Route>
        <Route path='' element=''></Route> */}
      </Routes>
    </div>
  );
}

export default App;
