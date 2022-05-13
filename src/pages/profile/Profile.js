import React from "react";
import Feed from "../../componants/feed/Feed";
import Rightbar from "../../componants/rightbar/Rightbar";
import Sidebar from "../../componants/sidebar/Sidebar";
import Topbar from "../../componants/topbar/Topbar";
import "./Profile.css";
function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src="assets/post/3.jpeg" alt="" srcset="" />
              <img className="profileUserImg" src="assets/person/1.jpeg" alt="" srcset="" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Safak KOcaoglu</h4>
              <span className="profileInfoDesc"> Hello My Friends !!!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar Profile />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
