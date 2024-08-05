import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/generateAIScreen.css'; 
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import HeaderTasks from '../components/HeaderTasks';
import { format } from 'date-fns';

function GenerateAIScreen() {
  const [aiCategory, setAiCategory] = useState(null);
  const navigate = useNavigate();

  const handleGenerateAICategory = () => {
    axios.get('/generateAI')
      .then(response => {
        const randomCategory = response.data[Math.floor(Math.random() * response.data.length)];
        setAiCategory(randomCategory);
      })
      .catch(error => console.error('Error fetching AI generated category:', error));
  };
  const handleSaveAICategory = () => {
    if (!aiCategory) return;
    var categoryType = 'task';
    const createdAt = format(new Date(), 'dd MMM yyyy HH:mm aa');
    const categoryData = { ...aiCategory, createdAt, categoryType };

    axios.post('/categories', categoryData)
      .then(response => {
        console.log('Category saved:', response.data);
        navigate('/mytasks');
      })
      .catch(error => console.error('Error saving AI generated category:', error));
  };

  useEffect(() => {
    handleGenerateAICategory();
  }, []);
  
  return (
    <div className="generate-ai-container">
      <HeaderTasks/>
      <button className="generate-button" onClick={handleGenerateAICategory}>Generate New</button>

      {aiCategory && (
        <div className="ai-category-card">
          <h2 className="ai-category-title">{aiCategory.title}</h2>
          <p className="ai-category-description">{aiCategory.description}</p>
          {aiCategory.subcategories && aiCategory.subcategories.length > 0 && (
            <div className="ai-subcategories">
              <ul>
                {aiCategory.subcategories.map((sub, index) => (
                  <li key={index}>
                    <h4>{sub.title}</h4>
                    <p>{sub.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <button className="save-button" onClick={handleSaveAICategory}>Save AI Category</button>

        </div>
      )}
      <Footer/>
    </div>
  );
}

export default GenerateAIScreen;
