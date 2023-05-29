
import './App.css';
import SignUp from './component/SignUp.jsx';
import Login from './component/Login';



import Home from './component/Home';
import { BrowserRouter ,Routes ,Route } from 'react-router-dom';
import Profile from './component/Profile';
import Protect from './component/Protect';
import Bookbus from './component/Bookbus';
import Busdetail from './component/Busdetail';
function App() {
  return (
   <BrowserRouter>
   <div>
    <Routes>
      <Route path='/' element={<SignUp/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Protect Child={Home}/>}/>
      <Route path='/profile' element={<Protect Child={Profile}/>}/>
      <Route path='/bus' element={<Protect Child={Bookbus}/>}/>
      <Route path='/busdetail/:busid' element={<Protect Child={Busdetail}/>}/>
    </Routes>
   </div>
   </BrowserRouter>
  );
}

export default App;







