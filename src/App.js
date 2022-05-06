import './App.css';
import Header from './pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Blogs from './pages/Blogs/Blogs';
import AddItems from './pages/AddItems/AddItems';
import Login from './pages/Authentication/Login/Login';
import SignUp from './pages/Authentication/SignUp/SignUp';
import ManageInventory from './pages/ManageInventory/ManageInventory';
import RequireAuth from './pages/Authentication/RequireAuth/RequireAuth';
import NotFound from './pages/NotFound/NotFound';
import MyItems from './pages/MyItems/MyItems';
import ItemDetails from './pages/ItemDetails/ItemDetails';

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
        <Route path='/*' element={<NotFound></NotFound>}></Route>

        {/* Private routes */}
        <Route path='/add-items' element={<RequireAuth><AddItems></AddItems></RequireAuth>}></Route>
        <Route path='/manage-inventory' element={<RequireAuth><ManageInventory></ManageInventory></RequireAuth>}></Route>
        <Route path='/my-items' element={<RequireAuth><MyItems></MyItems></RequireAuth>}></Route>
        <Route path='/manage-inventory/:itemId' element={<ItemDetails></ItemDetails>}></Route>
        <Route path='/inventory/:itemId' element={<ItemDetails></ItemDetails>}></Route>


      </Routes>
    </div>
  );
}

export default App;
