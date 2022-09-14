import "./post-view.css"
import icone from "./assets/logo.png"
import camera  from "./assets/camera.png"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import moreIcon from "./assets/more_icon.png"
import heart from "./assets/heart.png"
import share from "./assets/share.png"
const Postview=()=>{
  const [result,setData]=useState([])
  useEffect(()=>{
    fetch("https://instaclone-server-deploy.herokuapp.com/posts").then((data)=>data.json()).then((result)=>{
      setData(result)
    })
},[])
const [like,SetLike]=useState(0)
const HandleLike=()=>{
  SetLike(like+1)
}
  return(
  <>
  <div className="body">
  <div className="nav">
    <img className="logo" src={icone} alt="logo" />
   <Link to="/form"><img className="camera" src={camera} alt="camera" /></Link>
    
  </div>
  {
  result.map((user)=>{
      return (
        <div className="mainData">
        <div className="autor">{user.author}</div>
        <div className="dots"><img src={moreIcon} alt="Moreicon"/></div>
        <div className="locate">{user.location}</div>
        <img className="selfie" src={`https://instaclone-server-deploy.herokuapp.com/${user.path}`} alt="swetha" />
        <div className="heart"><img className="hea" src={heart} onClick={HandleLike} alt="heart"/>
        <img className="share" src={share} alt="heart"/>
        <div className="date">{user.date}</div>
        <p>{like} likes</p>
        </div>
        <div className="disc" >{user.description}</div>
        
        </div>
      )
    })
  }
  </div>
  </>
  )
}
export default Postview
