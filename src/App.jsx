import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/header/header'
import Home from './components/home_page/home';
import Backstory from './components/backstory_page/backstory';
import Analysis from './components/analysis_page/analysis';
import Credits from './components/credits_page/credits';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/play' element={<h1>PLAY</h1>}/>
        <Route path='/story' element={<Backstory/>}/>
        <Route path='/rules' element={<h1>RULES</h1>}/>
        <Route path='/analysis' element={<Analysis/>}/>
        <Route path='/meeting-minutes' element={<h1>MEETING MINUTES</h1>}/>
        <Route path='/credits' element={<Credits/>}/>
      </Routes>
    </Router>
  )
}

export default App
