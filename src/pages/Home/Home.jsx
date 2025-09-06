import React, { useState } from 'react'
import './Home.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from '../../components/Feed/Feed'

const Home = (props) => {

  // storing the data coming from youtube data api in states


  // if category's value equals 0 that means none of the categories on sidebar
  // has been selected and we will show videos in every categories in Feeds section ,
  // but by passing the setter function to sidebar component we are able to change the category
  // each catgory has an id property like 2 or 3
  const [category , setCategory] = useState(0)



  return (
    <>
      <Sidebar sidebar={props.sidebar} category={category} setCategory={setCategory} />
      {/* the size of container (not size or count of videos) changes with sidebar , not in media queries */}
      <div className={`container ${props.sidebar ? '' : 'large-container' }`}>
        <Feed category={category} />
      </div>
    </>
  )
}

export default Home
