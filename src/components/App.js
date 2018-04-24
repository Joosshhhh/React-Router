import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// App components
import Header from './Header';
import Home from './Home';
import About from './About';
import Teachers from './Teachers';
import Courses from './Courses';
import NotFound from './NotFound'
import Featured from './Featured';

const App = () => (
    <BrowserRouter>
        <div className="container">
            <Header/>
            <Switch> {/*like a switch statement if doesn't match a route go to default*/}
                <Route exact path="/" component={Home}/>
                <Route path="/about" render={() => <About title='About'/>}/>
                <Route exact path="/teachers" component={Teachers}/>
                <Route path="/teachers/:topic/:name" component={Featured}/>
                <Route path="/courses" component={Courses}/>
                <Route component={NotFound}/> {/*default route since there's no path specified*/}
            </Switch>
        </div>
    </BrowserRouter>
);

export default App;




