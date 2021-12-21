import React from 'react';
import {BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Navbar  from './components/Navbar';
import Home from './pages/home';
import FoodList from './components/foodList';
import Error from './components/Error';
const App =  () => {

    return (
       <Router>
           <Navbar/>
           <Switch>
               <Route exact path='/'>
                   <Home/>
               </Route>
               <Route path='/menu'>
                   <FoodList/>
               </Route>
               <Route path='*'>
                   <Error/>
               </Route>
           </Switch>
       </Router>
    )
}


export default App

