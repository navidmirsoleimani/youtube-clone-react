import React, { useEffect, useState } from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY, value_convertor } from '../../data'
import moment from 'moment'
import { useParams } from 'react-router-dom'

// id coming from video page parameter
const PlayVideo = () => {

  // we get the video id from parameter (so when we click on recomended videos the video details will change)
  const {videoId} = useParams()


  const [apiData , setApiData] = useState(null)
  const [channelData , setChannelData] = useState(null)
  const [commentData , setCommentData] = useState([])



  // getting video details like title
  const fetchVideoData = async ()=>{
    // fetching videos data using videoId
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
    // we are getting an array of objects in here
    await fetch(videoDetails_url).then(response=>response.json()).then(data => setApiData(data.items[0]))
  }

  // getting channel details like subscriber's count
  const fetchOtherlData = async ()=>{
    // fetching channel data (channel id comes from video details)
    const channelDetails_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData?.snippet.channelId}&key=${API_KEY}`
    await fetch(channelDetails_url).then(response=>response.json()).then(data=> setChannelData(data.items[0]))

    
    // fetching comment data
    const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`
    await fetch(comment_url).then(response=>response.json()).then(data=>{setCommentData(data.items) , console.log(data.items)})
  }





  // we should fetch the data everytime videoId changes (like by clicking on recomended videos)
  useEffect(()=>{
    fetchVideoData()
  },[videoId])

  // we want to fetch other data after we have fetched video data , because to fetch the first we need to have te latter
  useEffect(()=>{
    fetchOtherlData()
  },[apiData])



  return (
    <div className='play-video'>
      {/* <video controls autoPlay muted src={video1}></video> */}
      <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} title="React Projects For Beginners | Master React.js In One Video | React Projects for Resume" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      <h3>{apiData ? apiData.snippet.title : 'Loading'}</h3>


      <div className='play-video-info'>
        <p>
          {apiData ? value_convertor(apiData.statistics.viewCount) : 'Loading'} views &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ''}
        </p>
        <div>
          <span><img src={like} alt="" />{apiData ? value_convertor(apiData.statistics.likeCount) : "" }</span>
          <span><img src={dislike} alt="" /></span>
          <span><img src={share} alt="" />Share</span>
          <span><img src={save} alt="" />Save</span>
        </div>
      </div>
      <hr />


      <div className="publisher">
        <img src={channelData ? channelData.snippet.thumbnails.default.url : null} alt="loading" />
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : ''}</p>
          <span>{channelData ? value_convertor(channelData.statistics.subscriberCount) : ''}</span>
        </div>
        <button>Subscribe</button>
      </div>


      <div className="vid-description">
        {/* 700 charachters maximum */}
        <p>{apiData ? apiData.snippet.description.slice(0.700) : '' }</p>
        <hr />
        <h4>{apiData ? value_convertor(apiData.statistics.commentCount) : ''} comments</h4>
       
       { commentData.map((comment , index)=>{
          return (
            <div key={index} className="comment">
              <img src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
              <div>
                <h3> {comment.snippet.topLevelComment.snippet.authorDisplayName} <span>{moment(comment.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span></h3>
                <p>{comment.snippet.topLevelComment.snippet.textDisplay}</p>
               <div className='comment-action'>
                  <img src={like} alt="" />
                  <span>{value_convertor(comment.snippet.topLevelComment.snippet.likeCount)}</span>
                  <img src={dislike} alt="" />
                </div>
             </div>
          </div>
          )
        }) }
      </div>
    </div>
  )
}

export default PlayVideo
