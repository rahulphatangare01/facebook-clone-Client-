import React from 'react'
import Feed from '../../componants/feed/Feed'
import Rightbar from '../../componants/rightbar/Rightbar'
import Sidebar from '../../componants/sidebar/Sidebar'
import Topbar from '../../componants/topbar/Topbar'
import './Home.css'
function Home() {
  return (
    <div>
  
    <Topbar/>
    <div className="homeContainer">
    <Sidebar/>
<Feed/>
<Rightbar/>
    </div>
    </div>
  )
}

export default Home