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
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../styles/generateAIScreen.css'; 
// import { useNavigate } from 'react-router-dom';
// import Footer from '../components/Footer';
// import HeaderTasks from '../components/HeaderTasks';

// function GenerateAIScreen() {
//   const [aiCategory, setAiCategory] = useState(null);
//   const navigate = useNavigate();

//   const handleGenerateAICategory = () => {
//     axios.post('http://localhost:5001/generate-ai')
//   .then(response => {
//     const generatedText = response.data.generatedText;

//     // Parse the generated text into a structured category object
//     const category = parseGeneratedText(generatedText);
//     setAiCategory(category);
//   })
//   .catch(error => {
//     console.error('Error fetching AI generated category:', error);

//     if (error.response && error.response.status === 403) {
//       alert('You have exceeded your current quota. Please check your plan and billing details.');
//     } else {
//       alert('An error occurred while generating AI content. Please try again later.');
//     }
//   });


//   const handleSaveAICategory = () => {
//     if (!aiCategory) return;

//     axios.post('/categories', aiCategory)
//       .then(response => {
//         console.log('Category saved:', response.data);
//         navigate('/');
//       })
//       .catch(error => console.error('Error saving AI generated category:', error));
//   };

//   const parseGeneratedText = (text) => {
//     // Implement the logic to parse the generated text into a structured object
//     const lines = text.split('\n').filter(line => line.trim() !== '');
//     const category = {
//       title: lines[0] || "Default Title",
//       description: lines[1] || "Default Description",
//       subcategories: lines.slice(2).map((line, index) => {
//         const parts = line.split(':');
//         return {
//           title: parts[0] || `Subcategory ${index + 1}`,
//           description: parts[1] || "Default Subcategory Description"
//         };
//       })
//     };
//     return category;
//   };

//   useEffect(() => {
//     handleGenerateAICategory();
//   }, []);

//   return (
//     <div className="generate-ai-container">
//       <HeaderTasks />
//       {aiCategory && (
//         <div className="ai-category-card">
//           <h2 className="ai-category-title">{aiCategory.title}</h2>
//           <p className="ai-category-description">{aiCategory.description}</p>
//           {aiCategory.subcategories && aiCategory.subcategories.length > 0 && (
//             <div className="ai-subcategories">
//               <h3>Subcategories:</h3>
//               <ul>
//                 {aiCategory.subcategories.map((sub, index) => (
//                   <li key={index}>
//                     <h4>{sub.title}</h4>
//                     <p>{sub.description}</p>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//           <button className="save-button" onClick={handleSaveAICategory}>Save AI Category</button>
//         </div>
//       )}
//       <button className="generate-button" onClick={handleGenerateAICategory}>Generate New</button>
//       <Footer />
//     </div>
//   );
// }}

// export default GenerateAIScreen;

