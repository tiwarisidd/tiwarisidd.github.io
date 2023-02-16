import React from "react";
import "./Technologies.css";
import Technology from "../small/Technology";

const Technologies = () => {
  return <div>
    <h2 style={{textAlign:"center"}}>Technologies I Know</h2>
    <div className="technologies">
    <Technology img="js" title="JavaScript"/>
    <Technology img="nodejs" title="NodeJS"/>
    <Technology img="reactjs" height={120} title="ReactJS"/>
    <Technology img="flutter" height={115} title="Flutter"/>
    <Technology img="mongodb" height="160" title="MongoDB"/>
    <Technology img="postgres" title="PostgreSQL"/>
    <Technology img="mysql" height="150" title="MySQL"/>
    <Technology img="redis" height={90} title="Redis"/>
    </div>
  </div>;
};

export default Technologies;
