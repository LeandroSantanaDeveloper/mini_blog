import { NavLink } from "react-router-dom";

import styles from './Navbar.module.css';

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink className={styles.brand} to="/">
        Mini <span>blog</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li ><NavLink className={({ isActive }) => (isActive ? styles.active : "")} to="/">Home</NavLink></li>
        <li><NavLink className={({ isActive }) => (isActive ? styles.active : "")} to="/login">Entrar</NavLink></li>
        <li><NavLink className={({ isActive }) => (isActive ? styles.active : "")} to="/register">Cadastrar</NavLink></li>
        <li><NavLink className={({ isActive }) => (isActive ? styles.active : "")} to="/about">Sobre</NavLink></li>
      </ul>
    </nav>

  )
}
