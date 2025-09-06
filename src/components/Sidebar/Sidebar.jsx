import React from 'react'
import './Sidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'




const Sidebar = (props) => {
  return (
    // we provide a dynamic class name using sidebar state instead of checking the sidebar state each time when we want to render a p tag besides images , so we prefer not displaying via css to not rendering in jsx
    <div className={`sidebar ${props.sidebar?'':'small-sidebar'}`}>
      <div className="shortcut-links">

        {/* we activate these side links only if the active cat id equals to one of them , we do not activate them by clicking on them */}
        <div onClick={()=>{props.setCategory(0)}} className={`side-link ${props.category===0 ? 'active' : ''}`}>
          <img src={home} alt="" /> <p>Home</p>
        </div>
        <div onClick={()=>{props.setCategory(20)}} className={`side-link ${props.category===20 ? 'active' : ''}`}>
          <img src={game_icon} alt="" /> <p>Gaming</p>
        </div>
        <div onClick={()=>{props.setCategory(2)}} className={`side-link ${props.category===2 ? 'active' : ''}`}>
          <img src={automobiles} alt="" /> <p>Automobiles</p>
        </div>
        <div onClick={()=>{props.setCategory(17)}} className={`side-link ${props.category===17 ? 'active' : ''}`}>
          <img src={sports} alt="" /> <p>Sports</p>
        </div>
        <div onClick={()=>{props.setCategory(24)}} className={`side-link ${props.category===24 ? 'active' : ''}`}>
          <img src={entertainment} alt="" /> <p>Entertainment</p>
        </div>
        <div onClick={()=>{props.setCategory(28)}} className={`side-link ${props.category===28 ? 'active' : ''}`}>
          <img src={tech} alt="" /> <p>Sci/Tech</p>
        </div>
        <div onClick={()=>{props.setCategory(10)}} className={`side-link ${props.category===10 ? 'active' : ''}`}>
          <img src={music} alt="" /> <p>Music</p>
        </div>
        <div onClick={()=>{props.setCategory(22)}} className={`side-link ${props.category===22 ? 'active' : ''}`}>
          <img src={blogs} alt="" /> <p>Blogs</p>
        </div>
        <div onClick={()=>{props.setCategory(25)}} className={`side-link ${props.category===25 ? 'active' : ''}`}>
          <img src={news} alt="" /> <p>News</p>
        </div>
        <div onClick={()=>{props.setCategory(1)}} className={`side-link ${props.category===1 ? 'active' : ''}`}>
          <img src={news} alt="" /> <p>Film</p>
        </div>
        <div onClick={()=>{props.setCategory(15)}} className={`side-link ${props.category===15 ? 'active' : ''}`}>
          <img src={news} alt="" /> <p>Animals</p>
        </div>
        <div onClick={()=>{props.setCategory(19)}} className={`side-link ${props.category===19 ? 'active' : ''}`}>
          <img src={news} alt="" /> <p>Travel</p>
        </div>
        <div onClick={()=>{props.setCategory(21)}} className={`side-link ${props.category===21 ? 'active' : ''}`}>
          <img src={news} alt="" /> <p>Video Blog</p>
        </div>
        <div onClick={()=>{props.setCategory(23)}} className={`side-link ${props.category===23 ? 'active' : ''}`}>
          <img src={news} alt="" /> <p>Comedy</p>
        </div>
        <div onClick={()=>{props.setCategory(25)}} className={`side-link ${props.category===25 ? 'active' : ''}`}>
          <img src={news} alt="" /> <p>Howto/Style</p>
        </div>
        <div onClick={()=>{props.setCategory(27)}} className={`side-link ${props.category===27 ? 'active' : ''}`}>
          <img src={news} alt="" /> <p>Education</p>
        </div>
        <div onClick={()=>{props.setCategory(29)}} className={`side-link ${props.category===29 ? 'active' : ''}`}>
          <img src={news} alt="" /> <p>Nonprofits</p>
        </div>
        <div onClick={()=>{props.setCategory(30)}} className={`side-link ${props.category===30 ? 'active' : ''}`}>
          <img src={news} alt="" /> <p>Movies</p>
        </div>
        <div onClick={()=>{props.setCategory(32)}} className={`side-link ${props.category===32 ? 'active' : ''}`}>
          <img src={news} alt="" /> <p>Action/Adv</p>
        </div>
        <div onClick={()=>{props.setCategory(33)}} className={`side-link ${props.category===33 ? 'active' : ''}`}>
          <img src={news} alt="" /> <p>Classics</p>
        </div>
        <div onClick={()=>{props.setCategory(35)}} className={`side-link ${props.category===35 ? 'active' : ''}`}>
          <img src={news} alt="" /> <p>Documentary</p>
        </div>
        <div onClick={()=>{props.setCategory(36)}} className={`side-link ${props.category===36 ? 'active' : ''}`}>
          <img src={news} alt="" /> <p>Drama</p>
        </div>
        <div onClick={()=>{props.setCategory(37)}} className={`side-link ${props.category===37 ? 'active' : ''}`}>
          <img src={news} alt="" /> <p>Family</p>
        </div>
        <div onClick={()=>{props.setCategory(38)}} className={`side-link ${props.category===38 ? 'active' : ''}`}>
          <img src={news} alt="" /> <p>Foreign</p>
        </div>
        <div onClick={()=>{props.setCategory(39)}} className={`side-link ${props.category===39 ? 'active' : ''}`}>
          <img src={news} alt="" /> <p>Horror</p>
        </div>
        <div onClick={()=>{props.setCategory(40)}} className={`side-link ${props.category===40 ? 'active' : ''}`}>
          <img src={news} alt="" /> <p>Sci-Fi</p>
        </div>
        <div onClick={()=>{props.setCategory(41)}} className={`side-link ${props.category===41 ? 'active' : ''}`}>
          <img src={news} alt="" /> <p>Thriller</p>
        </div>
        <div onClick={()=>{props.setCategory(43)}} className={`side-link ${props.category===43 ? 'active' : ''}`}>
          <img src={news} alt="" /> <p>Shows</p>
        </div>
        <div onClick={()=>{props.setCategory(44)}} className={`side-link ${props.category===44 ? 'active' : ''}`}>
          <img src={news} alt="" /> <p>Trailers</p>
        </div>
        {/* instead of using border bottom for dividing the sidebar */}
        <hr></hr>
      </div>
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        {/* same classname as divs above */}
        <div className='side-link'>
          <img src={jack} alt="" /> <p>PewDiePie</p>
        </div>
        <div className='side-link'>
          <img src={simon} alt="" /> <p>Mrbeast</p>
        </div>
        <div className='side-link'>
          <img src={tom} alt="" /> <p>Justin Bieber</p>
        </div>
        <div className='side-link'>
          <img src={megan} alt="" /> <p>5-Minute Crafts</p>
        </div>
        <div className='side-link'>
          <img src={cameron} alt="" /> <p>Nas daily</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
