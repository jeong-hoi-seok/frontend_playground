// import logo from './logo.svg';
import './App.css';
   
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/home';
import SubPage from './components/subpage';

const App = ()=>{
  return(
    <div>
      <Router>
        <ul className='tab'>
          <Link to='/home'><li>home</li></Link>
          <Link to='/subpage'><li>SubPage</li></Link>
        </ul>
        <div className='contents'>
          <Routes>
            <Route path='/home' element={<Home/>} />
            <Route path='/subpage' element={<SubPage/>} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App;
