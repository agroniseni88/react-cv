import React from 'react';

// /we have three elements of router dom /
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Knowledge from './pages/Knowledge'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Portfolio from './pages/Portfolio'

const App = () => {
    return (

    <>
     
     <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/knowledge" component={Knowledge} />
            <Route path="/contact" component={Contact} />
            <Route path="/portfolio" component={Portfolio} />
            <Route  component={NotFound} />
        </Switch>
     </BrowserRouter>
    </>
    );
};

export default App;