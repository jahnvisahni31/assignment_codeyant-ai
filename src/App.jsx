import SignIn from './components/SignIn'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MainDash from './components/MainDash';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/dashboard" element={<MainDash/>} />
      </Routes>
    </Router>
  )
}

export default App
