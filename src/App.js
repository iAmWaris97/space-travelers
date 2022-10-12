import { Route, Routes } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Navigation/Header';
import Rockets from './components/Rockets/Rockets';
import Missions from './components/Missions/Missions';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container-fluid">
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
