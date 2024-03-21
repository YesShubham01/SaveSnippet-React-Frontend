import { useState } from 'react'
import './App.css'
import HomePage from './pages/homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResultPage from './pages/ResultPage';


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
