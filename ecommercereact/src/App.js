import './App.css';
import {Route,Routes} from 'react-router-dom';
import Homepage from './pages/home';
import NotFound from './pages/NotFound'
import NavbarPage from './pages/NavbarPage';
import InsertProductData from './pages/InsertProductData'
import Footer from './pages/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.bundle';
function App() {
  return (
    <div className="App">
<NavbarPage></NavbarPage>
<Routes>
  
  <Route path="/" element={<Homepage/>}/>
  <Route path="/home" element={<Homepage/>}/>
  <Route path="/insert" element={<InsertProductData/>}/>
  <Route path="*" element={<NotFound/>}/>

</Routes> 
<footer></footer>    
    </div>
  );
}

export default App;
