import React, { useEffect, useState } from 'react'
import './Feed.css'
import { Link } from 'react-router-dom'
import { API_KEY } from '../../data'
import { value_convertor } from '../../data'
import moment from 'moment'

const Feed = ({category}) => {



    // storing the fetched data coming from fetchData func (array of obj)
    const [data , setData] = useState([])

    // fetching api for displaying videos by categories
     const fetchData = async () => {
        const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=1000&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
        // fetched data is an array of objects which have some properties like id / channel title / description ...
        await fetch(videoList_url).then(response=>response.json()).then(data=>setData(data.items))
    }

    // *** we need to update the list if category has changed , so each time the props category has been changed we fetch another list of videos through api
    useEffect(()=>{
        fetchData()
    },[category])





  return (
    // we know all these properties by testing the fetch code and observing the outcome , whether in console or in api site
    <div className="feed">
        {data.map((item , index)=>{
            return (
                // category id for relevant videos / id for playing the video
                <Link to={`video/${item.snippet.categoryId}/${item.id}`} className='card'>
                    <img src={item.snippet.thumbnails.medium.url} alt="" />
                    <h2>{item.snippet.title}</h2>
                    <h3>{item.snippet.channelTitle}</h3>
                    {/* a sign */}
                    {/* we have installed a package called moment to convert the published date of videos to '1 day ago' format */}
                    <p>{value_convertor(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()} </p>
                </Link>
            )
        })}
    </div>
  )
}

export default Feed
