import React from 'react';
import {NavLink} from 'react-router-dom'

const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                    <img src="./media/agron.jpg"  width='180' height='290' alt="profil-pic"/>
                    
                    <h3>Agron Iseni</h3>
                </div>

            </div>
            <div className='navigation'>
                <ul>
                    <li> 
                        <NavLink exact to='/' activeClassName='navActive' >
                            <i class="fas fa-home"></i>
                            <span>Home</span> 
                        </NavLink>
                    </li>
                    <li> 
                        <NavLink exact to='/knowledge' activeClassName='navActive' >
                            <i className="fas fa-mountain"></i>
                            <span>knowledge</span> 
                        </NavLink>
                    </li>
                    <li> 
                        <NavLink exact to='/portfolio' activeClassName='navActive' >
                            <i className="fas fa-images"></i>
                            <span>Portfolio</span> 
                        </NavLink>
                    </li>
                    <li> 
                        <NavLink exact to='/contact' activeClassName='navActive' >
                            <i className="fas fa-address-book"></i>
                            <span>Contact</span> 
                        </NavLink>
                    </li>           
                </ul>
            </div>

            <div className="socialNetwork">
                <ul>
                    <li>
                        <a  href="https://www.google.com"
                            target="_blank" 
                            rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </li>
                    <li>
                        <a  href="https://www.google.com"
                            target="_blank" 
                            rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a  href="https://www.google.com"
                            target="_blank" 
                            rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a  href="https://www.google.com"
                            target="_blank" 
                            rel="noopener noreferrer">
                            <i className="fab fa-codepen"></i>
                        </a>
                    </li>
                </ul>

                <div className="signature">
                    <p>fromscratch - 2020</p>

                </div>
                
            </div>
        </div>
    );
};

export default Navigation;