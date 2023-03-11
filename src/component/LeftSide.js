import React from "react";
import edvironLogo from "./image/x.png";
import dott from "./image/dott.png"
import user from "./image/user.png"
const LeftSide = () => {
  return (
    <>
      <div className="leftSide container d-flex flex-wrap ">
        <div className="logodiv container">
          <div>
            <img src={edvironLogo} alt="Edviron Logo " />
          </div>

          <div className="middle container">
            <img className="image" src={dott}/>
            <img className="image1" src={dott}/>
            <img className="image2" src={dott}/>
            <img className="image3" src={dott}/>
            <span style={{fontFamily:'Manrope' ,marginLeft:'20%'}}>Dashbord</span>
          </div>
          <div className="user">
            <img src={user} className="userimg"/>
            <span className="users">Users</span>
          </div>
          <div className="user">
            <img src='https://www.pngall.com/wp-content/uploads/7/Gallery-PNG-File.png' className="userimg"/>
            <span className="users">Projects</span>
          </div>
          <div className="user">
            <img src='https://cdn-icons-png.flaticon.com/128/2660/2660366.png' className="userimg"/>
            <span className="users">Sales</span>
          </div>
          <div className="lower">
          <div className="user">
            <img src='https://www.iconpacks.net/icons/2/free-settings-icon-3110-thumb.png' className="userimg"/>
            <span className="users">Setting</span>
          </div>
          <div className="user">
            <img src='https://www.freeiconspng.com/thumbs/sign-out-icon/sign-out-logout-icon-0.png' className="userimg"/>
            <span className="users" style={{color:'red'}}>Logout</span>
          </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default LeftSide;
