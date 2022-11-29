import '../../styles/layout.css'
import { NavLink } from 'react-router-dom';


const Nav = (props) => {
    return (
      <div class="container">
        <nav class="nav-main">
        <img src="img/FINAL.png" alt="Galga joyas LOGO" class="nav-brand" />
        <ul class="nav-menu">
          <li>
            <NavLink to="/" className={({isActive}) => isActive ? "activo" : undefined} >Home</NavLink>
          </li>
          <li>
          <NavLink to="/galga" className={({isActive}) => isActive ? "activo" : undefined} >Galga</NavLink>
          </li>
          <li>
          <NavLink to="/joyas" className={({isActive}) => isActive ? "activo" : undefined} >Joyas</NavLink>
          </li>
          <li>
          <NavLink to="/proyectos" className={({isActive}) => isActive ? "activo" : undefined} >Proyectos</NavLink>
          </li>
          <li>
          <NavLink to="/contacto" className={({isActive}) => isActive ? "activo" : undefined} >Contacto</NavLink>
          </li>
        </ul>



        <ul class="nav-lupa">
          <li>
            <a href="joyas">
              <i class="fas fa-search"></i>
            </a>
            <a href="contacto"><i class="fa-solid fa-user"></i> </a>
          </li>
        </ul>

        
      </nav>
      </div>
    );
}
export default Nav;