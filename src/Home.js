import React from 'react';
import profileIcon from './man.svg';
import profileIcon1 from './women.svg';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom';
import data from './data/data.json';


let Home=()=>{
  let profiles=data.profiles;
  console.log(profiles);
  return(
     <div className="row justify-content-center ">
    {profiles.map((value,index)=>(
      <div className="col-lg-4 col-md-4 col-sm-10 mt-1" key={index}>
        <div className="card" style={{boxShadow:"0px 8px 8px -8px #000"}}>
          <div className="card-body text-center">
           {/* <img src={profileIcon} alt="Profile icon" style={{width:"30%"}}/>*/}
         {value.basics.gender==="male" ? <img src={profileIcon} alt="Profile icon"
             style={{width:"30%"}}/> : <img src={profileIcon1} alt="Profile icon"
             style={{width:"30%"}}/>}

            <h3>{value.basics.name}</h3>
            <h5 className="text-secondary" style={{fontStyle:"italic"}}>{value.basics.role}</h5><hr/>
            <a href={"mailto:"+value.basics.email}>{value.basics.email}</a><br></br>
            <a href={"tel:"+value.basics.mobile}>{value.basics.mobile}</a><br/>

            <Link to={{pathname:'/resume',data:{id:index}}} className="btn btn-secondary text-white btn-block btn-sm">
            View Profile
            </Link>
          </div>
        </div>
       </div>
    ))}
    </div>
  )
}

export default Home;
