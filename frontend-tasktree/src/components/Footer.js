// import React from "react";
// import { NavLink ,useLocation} from "react-router-dom";
// import '../styles/footer.css';

// function Footer() {
//   const location = useLocation();
//   const isHomeActive = location.pathname === '/';
  
//   return (<>
//     <div className={`footer ${isHomeActive ? 'footer-home-active' : ''}`}>
//         <NavLink to="/" exact className="home" activeClassName="active"></NavLink>
//         <NavLink to="/mytasks" exact className="mytasks" activeClassName="active"></NavLink>
//         <NavLink to="/settings" exact className="settings" activeClassName="active"></NavLink>
//         <NavLink to="/generate-ai" exact className="aipage" activeClassName="active"></NavLink>
//       </div>
//           <NavLink to="/add-category" className="add-button"></NavLink>
//   </>
    

//   );
// }

// export default Footer;

import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import '../styles/footer.css';

function Footer() {
  const location = useLocation();
  const isHomeActive = location.pathname === '/';

  return (
    <>
      <div className={`footer ${isHomeActive ? 'footer-home-active' : ''}`}>
        <NavLink to="/" className={({ isActive }) => isActive ? 'home active' : 'home'}></NavLink>
        <NavLink to="/mytasks" className={({ isActive }) => isActive ? 'mytasks active' : 'mytasks'}></NavLink>
        <NavLink to="/settings" className={({ isActive }) => isActive ? 'settings active' : 'settings'}></NavLink>
        <NavLink to="/generate-ai" className={({ isActive }) => isActive ? 'aipage active' : 'aipage'}></NavLink>
      </div>
      <NavLink to="/add-category" className="add-button"></NavLink>
    </>
  );
}

export default Footer;
