// // src/pages/HomeScreen.js
// import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import '../styles/homeScreen.css'; // Import your CSS file
// import HeaderTasks from '../components/HeaderTasks';
// import Footer from '../components/Footer';
// import '../styles/tasksScreen.css';

// function TaskScreen() {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     axios.get('/categories')
//       .then(response => {
//         setCategories(response.data);
//       })
//       .catch(error => console.error('Error fetching categories:', error));
//   }, []);

//   //DELETE A CATEGORY IF PRESSED 

//   const handleDeleteCategory = (id) => {
//     axios.delete(`/categories/${id}`)
//       .then(() => {
//         setCategories(categories.filter(category => category.id !== id));
//       })
//       .catch(error => console.error('Error deleting category:', error));
//   };

//   //DRAG & DROP FUNCTION 

//   const onDragEnd = (result) => {
//     if (!result.destination) return;

//     const items = Array.from(categories);
//     const [reorderedItem] = items.splice(result.source.index, 1);
//     items.splice(result.destination.index, 0, reorderedItem);

//     setCategories(items);
//   };

//   //WHEN PRESS THE DOTS OPENS THE MENU

//   const [activeMenuId, setActiveMenuId] = useState(null);

//   const toggleMenu = (id) => {
//     setActiveMenuId(prevId => (prevId === id ? null : id));
//   };

//   // WHEN CLICK OUTSIDE THE MENU MAKE THE MENU DISAPEAR

//   const menuRef = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setActiveMenuId(null);
//       }
//     };
  
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   return (
//     <div className="task-container">
//       {/* HEADER */}
//       <HeaderTasks />
      
//       <Link to="/generate-ai">
//             <button className='main-button'>Generate a task with AI</button>
//       </Link>          
//       <Footer/>     
            
//       <DragDropContext onDragEnd={onDragEnd}>
//         <Droppable droppableId="categories">
//           {(provided) => (
//             <div {...provided.droppableProps} ref={provided.innerRef}>
//               {categories.map((category, index) => (
//                 <Draggable key={category.id} draggableId={category.id.toString()} index={index}>
//                   {(provided) => (
                    
//                     <div
//                       ref={provided.innerRef}
//                       {...provided.draggableProps}
//                       className="category-card"
//                     >
//                           <div className="blueline"></div>
//                           <div
//                               {...provided.dragHandleProps}
//                               className="drag-handle"
//                             >
//                               <div className="dot-grid">
//                                 <span className="dot"></span>
//                                 <span className="dot"></span>
//                                 <span className="dot"></span>
//                                 <span className="dot"></span>
//                                 <span className="dot"></span>
//                                 <span className="dot"></span>
//                                 <span className="dot"></span>
//                                 <span className="dot"></span>
//                                 <span className="dot"></span>
//                               </div>
//                             </div>
//                    <Link to={`/category/${category.id}`} style={{ textDecoration: 'none' }}>
//                       <div className="category-content">
//                         <h2 className="category-title">{category.title}</h2>
//                         <p className="category-description">{category.description}</p>
                       
//                       </div>
//                     </Link>

//                       {/* NOTIFICATION CIRCLE SHOWS HOW MANY SUBCATEGORIES A CATEGORY HAVE */}
//                       <div className="notification-circle">{category.subcategories.length}</div>

//                       {/* TWO DOTS OPENS THE MENU FOR DELETING EDITING AND PIN */}
//                       <div className="twodots" onClick={() => toggleMenu(category.id)}>
//                         <div className="graydot"></div>
//                         <div className="graydot"></div>
//                         {activeMenuId === category.id && (
//                           <div className="menu" ref={menuRef}>
//                             <div className="menu-item" onClick={() => handleDeleteCategory(category.id)}>Delete</div>
//                             <div className="menu-item">Pin</div>
//                             <Link to={`/category/${category.id}`} style={{ textDecoration: 'none' }}>
//                                   <div className="menu-item">Edit</div>
//                             </Link>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   )}
//                 </Draggable>
//               ))}
//               {provided.placeholder}
//             </div>
//           )}
//         </Droppable>
//       </DragDropContext>
//     </div>
//   );
// }

// export default TaskScreen;
// src/pages/HomeScreen.js

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/homeScreen.css'; // Import your CSS file
import HeaderTasks from '../components/HeaderTasks';
import Footer from '../components/Footer';
import '../styles/tasksScreen.css';

function TaskScreen() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('/categories')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  // DELETE A CATEGORY IF PRESSED 
  const handleDeleteCategory = (id) => {
    axios.delete(`/categories/${id}`)
      .then(() => {
        setCategories(categories.filter(category => category.id !== id));
      })
      .catch(error => console.error('Error deleting category:', error));
  };

  // WHEN PRESS THE DOTS OPENS THE MENU
  const [activeMenuId, setActiveMenuId] = useState(null);

  const toggleMenu = (id) => {
    setActiveMenuId(prevId => (prevId === id ? null : id));
  };

  // WHEN CLICK OUTSIDE THE MENU MAKE THE MENU DISAPPEAR
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenuId(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="task-container">
      {/* HEADER */}
      <HeaderTasks />
      
      <Link to="/generate-ai">
        <button className='main-button'>Generate a task with AI</button>
      </Link>          
      <Footer/>

      {/* Categories List */}
      <div className="categories-list">
        {categories.map((category) => (
          <div key={category.id} className="category-card">
            <div className="blueline"></div>
            <div className="dot-grid">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
            <Link to={`/category/${category.id}`} style={{ textDecoration: 'none' }}>
              <div className="category-content">
                <h2 className="category-title">{category.title}</h2>
                <p className="category-description">{category.description}</p>
              </div>
            </Link>

            {/* NOTIFICATION CIRCLE SHOWS HOW MANY SUBCATEGORIES A CATEGORY HAS */}
            <div className="notification-circle">{category.subcategories.length}</div>

            {/* TWO DOTS OPENS THE MENU FOR DELETING, EDITING AND PIN */}
            <div className="twodots" onClick={() => toggleMenu(category.id)}>
              <div className="graydot"></div>
              <div className="graydot"></div>
              {activeMenuId === category.id && (
                <div className="menu" ref={menuRef}>
                  <div className="menu-item" onClick={() => handleDeleteCategory(category.id)}>Delete</div>
                  <div className="menu-item">Pin</div>
                  <Link to={`/category/${category.id}`} style={{ textDecoration: 'none' }}>
                    <div className="menu-item">Edit</div>
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskScreen;
