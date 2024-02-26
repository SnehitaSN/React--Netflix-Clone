import React, { useState } from 'react'
import { useEffect } from 'react'
import Axios from 'axios'
import { API_Key } from './Api'
import { imageUrl } from './Api'
import './App.css';


import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'


function NetflixOriginals() {
    const [originalsData,setOriginalsData]=useState([])

    const [myId,setMyId] = useState("")
    useEffect(() => {
      Axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=${API_Key}&with_network=123`)
      .then(function(output){
        //console.log(output.data.results)
        setOriginalsData(output.data.results)
      })
      .catch(function(error){
        console.log(error)
      })
    }, [])

    function handleClick(movieData){
      //console.log(movieData)

      const movieName=movieData.name

      movieTrailer(movieName)

      .then(function(i){
        //console.log(output)
      //  setMyId(new URLSearchParams(new URL(output).search).get("v"))
      const id = new URLSearchParams(new URL(i).search).get("v")
      console.log(i)
      setMyId(id)

      })
      .catch(function(error){
        console.log(error)
      })
    }
    
  return (
    <div>   
         <h2 className='h2'>Netflix Originals</h2>
        <div className='allImages'>
            {
            originalsData.map(function(info){
                //console.log(info)
                //console.log(imageUrl+info.poster_path)
               return <img width={150} height={150}  src={imageUrl +info.poster_path}
                onClick={()=>handleClick(info)}/>

            })
        }
        </div>
        {myId ?<YouTube videoId={myId}/> :null}
        </div>
 
  )
}

export default NetflixOriginals