import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Card from './components/Card';
import './components/style.css'

function App() {
  return (
    <>      
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/info" element={<Card />} />
      </Routes>
    </>
  );
}

export default App;
