import React from 'react';
import Navigation from '../components/Navigation'
import Languages from '../components/knowledges/Languages';
import Experience from '../components/knowledges/Experience';
import Otherskills from '../components/knowledges/Otherskills';
import Hobbies from '../components/knowledges/Hobbies';


const Knowledge = () => {
    return (
        <div className='knowledges'>
            <Navigation/>
            <div className="knowledgesContent">
                <Languages />
                
                <Experience />
                <Otherskills />
                <Hobbies/>

            </div>
           
        </div>
    );
};

export default Knowledge;