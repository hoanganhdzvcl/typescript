import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { CartIcon, Logo, SearchIcon, UserIcon, WishlistIcon } from './icons';


const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-inner">
                    <a href="" className="header__logo">
                        <Link className='link_to' to='/'></Link>
                        <img src={Logo} alt="" />
                    </a>
                    <div className="button-mobile"><button>=</button></div>
                    <nav className="main-menu">
                        <ul className="main-menu__list">
                            <li className="main-menu__item">
                                <a href="" className="main-menu__link"><NavLink className='link_to' to='/'>Home</NavLink></a>
                            </li>
                            <li className="main-menu__item">
                                <a href='' className="main-menu__link"><NavLink className='link_to' to='/shop'>Shop</NavLink></a>
                            </li>
                            <li className="main-menu__item">
                                <a href="" className="main-menu__link"><NavLink className='link_to' to='/'>About</NavLink></a>
                            </li>
                            <li className="main-menu__item">
                                <a href="" className="main-menu__link"><NavLink className='link_to' to='/'>Contact</NavLink></a>
                            </li>
                        </ul>
                    </nav>
                    <div className="header-items">
                        <div className="header-item-user">
                            <span><img src={UserIcon} /></span>
                        </div>
                        <div className="header-item-user">
                            <span><img src={SearchIcon} /></span>
                        </div>
                        <div className="header-item-user">
                            <span><img src={WishlistIcon} /></span>
                        </div>
                        <div className="header-item-user">
                            <span><img src={CartIcon} /></span>
                        </div>
                    </div>
                </div>
            </div>
        </header >
    );
};

export default Header