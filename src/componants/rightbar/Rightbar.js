import React from "react";
import "./Rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>akshay</b> and <b>other friends</b> have a birthday today.
          </span>
        </div>
        <img className="rightbarAd" src="assets/post/2.jpeg" alt="" />
        <h4 className="rightbarTitle"> online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightbarTitle"> User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey"> City:</span>
            <span className="rightbarInfoValue"> Pune</span>
          </div>

          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey"> From:</span>
            <span className="rightbarInfoValue"> Lohegoan</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey"> Relationship</span>
            <span className="rightbarInfoValue"> Single</span>
          </div>
        </div>

        <h4 className="rightbarTitle"> User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg"/>
            <span className="rightbarFollowingName">John cartor</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/2.jpeg" alt=""className="rightbarFollowingImg"/>
            <span className="rightbarFollowingName">John cartor</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg"/>
            <span className="rightbarFollowingName">John cartor</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg"/>
            <span className="rightbarFollowingName">John cartor</span>
          </div>
          <div className="rightbarFollowing">
            <img src="assets/person/5.jpeg" alt="" className="rightbarFollowingImg"/>
            <span className="rightbarFollowingName">John cartor</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/6.jpeg" alt="" className="rightbarFollowingImg"/>
            <span className="rightbarFollowingName">John cartor</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <ProfileRightBar />
        {profile ? <ProfileRightBar/> : <HomeRightbar/>}
      </div>
    </div>
  );
}

export default Rightbar;
