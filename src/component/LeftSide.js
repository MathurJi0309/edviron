import React from "react";
import logo from './image/x.png'
import dott from './image/4dott.svg'
import user from './image/profile.svg'
import sale from './image/receipt-2.svg'
import setting from './image/setting-2.svg'
import logout from './image/logout.svg'
import project from './image/gallery.svg'
const LeftSide = () => {
  return (
    <>
    <div className="left-side">
      <div className="logo">
        <img src={logo}/>

      </div>
      <div className="dashboard item">
        <img src={dott}/>
        <span>Dashboard</span>

      </div>
      <div className="Users item">
        <img src={user}/>
        <span>Users</span>

      </div>
      <div className="projects item">
        <img src={project}/>
        <span>Projects</span>

      </div>
      <div className="Sales item">
        <img src={sale}/>
        <span>Sales</span>

      </div>
      <div className="settings">
        <img src={setting}/>
        <span>Setings</span>

      </div>
      <div className="logout">
        <img src={logout}/>
        <span>Logout</span>

      </div>

    </div>
    </>
  );
};

export default LeftSide;
