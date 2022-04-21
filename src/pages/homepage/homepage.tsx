import React from "react";
import Header from "../../components/header/header";
import './homepage.scss'
import FirstView from "../../components/first-view/first-view";
import SecondView from "../../components/second-view/second-view";


const Homepage=()=>{
  return(
    <div className="homepage">
    <Header/>
    <FirstView/>
    <SecondView/>
    </div>
  )
}
export default Homepage