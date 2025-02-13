import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

import logo2 from './image/тесэкспресс 1.png';         // Ваш логотип
import iconDashboard from './util/dashroad.png';
import iconMarket from './util/market.png';
import iconLogistics from './util/logistic.png';
import iconCars from './util/cars.png';
import iconNews from './util/carts.png';
import iconReviews from './util/carts.png';
import iconContests from './util/carts.png';
import iconArrowDown from './util/carts.png';

function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Верхняя часть: логотип + меню */}
      <div className="sidebar-top">
        {/* Логотип */}
        <div className="logo">
          <img src={logo2} alt="Express Logo" />
        </div>

        {/* Меню */}
        <nav className="navBar">
          <ul>
            <li>
              <NavLink 
                to="/dashboard"
                className={({ isActive }) => 
                  'menu_button menu-bold ' + (isActive ? 'active_menu' : '')
                }
              >
                <img 
                  src={iconDashboard} 
                  alt="Dashboard Icon" 
                  className="menu_icon"
                />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/market"
                className={({ isActive }) => 
                  'menu_button ' + (isActive ? 'active_menu' : '')
                }
              >
                <img 
                  src={iconMarket} 
                  alt="Market Icon" 
                  className="menu_icon"
                />
                Маркет
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/logistics"
                className={({ isActive }) => 
                  'menu_button ' + (isActive ? 'active_menu' : '')
                }
              >
                <img 
                  src={iconLogistics} 
                  alt="Логистика+Клиенты Icon" 
                  className="menu_icon"
                />
                Логистика+Клиенты
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/cars"
                className={({ isActive }) => 
                  'menu_button ' + (isActive ? 'active_menu' : '')
                }
              >
                <img 
                  src={iconCars} 
                  alt="Машины Icon" 
                  className="menu_icon"
                />
                Машины
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/news"
                className={({ isActive }) => 
                  'menu_button ' + (isActive ? 'active_menu' : '')
                }
              >
                <img 
                  src={iconNews} 
                  alt="Новости Icon" 
                  className="menu_icon"
                />
                Новости
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/reviews"
                className={({ isActive }) => 
                  'menu_button ' + (isActive ? 'active_menu' : '')
                }
              >
                <img 
                  src={iconReviews} 
                  alt="Отзывы Icon" 
                  className="menu_icon"
                />
                Отзывы
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contests"
                className={({ isActive }) => 
                  'menu_button ' + (isActive ? 'active_menu' : '')
                }
              >
                <img 
                  src={iconContests} 
                  alt="Конкурсы Icon" 
                  className="menu_icon"
                />
                Конкурсы
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* Нижняя часть: карточка пользователя */}
      <div className="sidebar-user">
        <button className="user-button">
          <span>Элдияр Б.</span>
          <img src={iconArrowDown} alt="Arrow Down" className="arrow_icon" />
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
