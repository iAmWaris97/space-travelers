import { Route, Routes } from 'react-router';
import './App.css';
import Header from './components/Navigation/Header';
import Rockets from './components/Rockets/Rockets';
import Missions from './components/Missions/Missions';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
