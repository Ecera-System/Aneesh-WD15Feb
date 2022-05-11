import './App.css';
import Login from './Components/Login';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Dashborad from './Components/Dashborad';
import Registration from './Components/Registration'
import Home from './Components/Home';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/dashboard" element={<Dashborad/>}/>
        <Route path="/register" element={<Registration />}/>
        <Route path="/" element={<Home/>}/>


      </Routes>
    </Router>
  );
}

export default App;
