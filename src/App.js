import './App.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';

function App () {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element=''></Route>
        <Route path='/signup' element=''></Route>
        <Route path='/*' element=''></Route>
        {/* <Route path='/manage' element=''></Route>
        <Route path='' element=''></Route>
        <Route path='' element=''></Route> */}
      </Routes>
    </div>
  );
}

export default App;
