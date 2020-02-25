import React from 'react';
import {Breadcrumb} from 'react-bootstrap'

function Features() {
    return (
      <div 
         style={{margin :'20px'}}
             >
         <Breadcrumb>
            <Breadcrumb.Item href="#">Biography</Breadcrumb.Item>
            <Breadcrumb.Item href="http://localhost:3000/">
              Cirriculum Vitie
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#">Form contact</Breadcrumb.Item>
        </Breadcrumb>
      </div>  
    )
    }
  
  export default Features;