import logo from './images/logo.png';
import './App.css';
import Sidebar from './Components/Sidebar';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Dashboard from './Components/Dashboard';
import Schedule from './Components/Schedule';
import Memo from './Components/Memo';
import List from './Components/List';
import Settings from './Components/Settings';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/memo" element={<Memo />} />
          <Route path="/list" element={<List />} />
          <Route path="/settings" element={<Settings />}/>
          </Routes>
          </Sidebar>
      </BrowserRouter>
    </div>
  );
}

export default App;
