import React from 'react'
import './Sidebar.css'
import{RssFeed, Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,} from "@mui/icons-material"
  import {Users} from '../../dummyData';
import CloseFriend from '../closeFriend/CloseFriend';
function Sidebar() {
  return (
    <div className='sidebar'>
    <div className="sidebarWrapper">
    <ul className='sidebarList'>
        <li className="sidebarListIteam">
<RssFeed className="sidebarIcon"/>
<span className="slidebarListIteamText">Feed</span>
        </li>
        <li className="sidebarListIteam">
<Chat className="sidebarIcon"/>
<span className="slidebarListIteamText">Chat</span>
        </li>
        <li className="sidebarListIteam">
<PlayCircleFilledOutlined className="sidebarIcon"/>
<span className="slidebarListIteamText">Videos</span>
        </li>
        <li className="sidebarListIteam">
<Group className="sidebarIcon"/>
<span className="slidebarListIteamText">Groups</span>
        </li>
        <li className="sidebarListIteam">
<Bookmark className="sidebarIcon"/>
<span className="slidebarListIteamText">Bookmark</span>
        </li>
        <li className="sidebarListIteam">
<HelpOutline className="sidebarIcon"/>
<span className="slidebarListIteamText">HelpOutline</span>
        </li> <li className="sidebarListIteam">
<WorkOutline className="sidebarIcon"/>
<span className="slidebarListIteamText">WorkOutline</span>
        </li>
        <li className="sidebarListIteam">
<Event className="sidebarIcon"/>
<span className="slidebarListIteamText">Event</span>
        </li>
        <li className="sidebarListIteam">
< School className="sidebarIcon"/>
<span className="slidebarListIteamText"> Cources </span>
        </li>
        
    </ul>
    <button className='sidebarButton'> Show more</button>
    <hr  className='sidebarHr'/>
    <ul className="sidebarFriendList">
      { Users.map (u=>(
          <CloseFriend key={u.id} user={u}/>
      ))}
       
    </ul>
    </div>
    </div>
  )
}

export default Sidebar