import Welcome from './components/Welcome';
import User from './components/User';
import { Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={ <Welcome /> } />
        <Route path="/" element={ <User /> } />
      </Routes>
    </div>
  );
}

export default App;
