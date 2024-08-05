import React from "react";
import { NavLink ,useLocation} from "react-router-dom";
import '../styles/footer.css';

function Footer() {
  const location = useLocation();
  const isHomeActive = location.pathname === '/';
  
  return (<>
    <div className={`footer ${isHomeActive ? 'footer-home-active' : ''}`}>
        <NavLink to="/" exact className="home" activeClassName="active"></NavLink>
        <NavLink to="/mytasks" className="mytasks" activeClassName="active"></NavLink>
        <NavLink to="/settings" className="settings" activeClassName="active"></NavLink>
        <NavLink to="/generate-ai" className="aipage" activeClassName="active"></NavLink>
      </div>
          <NavLink to="/add-category" className="add-button"></NavLink>
  </>
    

  );
}

export default Footer;
