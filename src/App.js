import React from 'react';
 import data from './data/data.json';
 import profileIcon from './man.svg';
 import profileIcon1 from './women.svg';
 import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';
 import Resume from './Resume';
import Home from './Home';

//import SC from './StatesConcept'
 let App=()=>{

   return(

        <BrowserRouter>
        <Switch>
           <Route exact path='/home' component={Home} />
           <Route exact path='/resume' component={Resume} />
        </Switch>
        </BrowserRouter>

   )
 }

 // let Example=()=>{
 //   return(
 //     <div>
 //         <h2>Example Component</h2>
 //     </div>
 //   )
 // }






 export default App;
