
import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom' ;
import FileUpload from './pages/FileUpload';
import Error404 from './pages/Error404';
//import Login3 from './pages/Login3';
import Login from './pages/Login';
import Login3 from './pages/Login3';

function App() {
  return (
    <Router> 
      <Routes>
         <Route path="/" element={<Login3/>}/>
         <Route path="/FileUpload" element={<FileUpload/>}/>
         //<Route path="/Login" element={<Login/>}/>
         <Route path="*" element={<Error404/>}/>
      </Routes>
    </Router>
  );
}

export default App;
