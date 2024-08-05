import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import CategoryScreen from './pages/CategoryScreen';
import AddCategoryScreen from './pages/AddCategoryScreen';
import EditSubcategoryScreen from './pages/EditSubcategoryScreen';
import GenerateAIScreen from './pages/GenerateAIScreen';
import Settings from './pages/Settings';
import TaskScreen from './pages/TaskScreen';
import './styles/styles.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/mytasks" element={<TaskScreen />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/category/:id" element={<CategoryScreen />} />
        <Route path="/add-category" element={<AddCategoryScreen />} />
        <Route path="/edit-subcategory/:id/:subcategoryIndex" element={<EditSubcategoryScreen />} />
        <Route path="/generate-ai" element={<GenerateAIScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
