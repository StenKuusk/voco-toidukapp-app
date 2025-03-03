import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Homepage_kopli';


function App() {
  const [foods, setFoods] = useState([]);
  const [showAddFood, setShowAddFood] = useState(false);

  const handleAddFood = (food) => {
    setFoods([...foods, food]);
  };

  const handleMenuClick = () => {
    // Menu click handler
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;