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
                            <spam>Home</spam> 
                        </NavLink>
                    </li>
                    <li> 
                        <NavLink exact to='/knowledge' activeClassName='navActive' >
                            <i class="fas fa-mountain"></i>
                            <spam>knowledge</spam> 
                        </NavLink>
                    </li>
                    <li> 
                        <NavLink exact to='/portfolio' activeClassName='navActive' >
                            <i class="fas fa-images"></i>
                            <spam>Portfolio</spam> 
                        </NavLink>
                    </li>
                    <li> 
                        <NavLink exact to='/contact' activeClassName='navActive' >
                            <i class="fab fa-address-book"></i>
                            <spam>Contact</spam> 
                        </NavLink>
                    </li>
                    
                    
                    
                    
                                        
                </ul>
            </div>
        </div>
    );
};

export default Navigation;