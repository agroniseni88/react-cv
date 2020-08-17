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
                    <NavLink exact to='/' activeClassName='navActive' >
                            <i class="fas fa-home"></i>
                             <spam>Home</spam> 
                    </NavLink>
                                        
                                        </ul>
            </div>
        </div>
    );
};

export default Navigation;