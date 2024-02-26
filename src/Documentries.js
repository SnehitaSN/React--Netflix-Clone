import React, { useState } from 'react'
import { useEffect } from 'react'
import Axios from 'axios'
import { API_Key } from './Api'
import { imageUrl } from './Api'
import './App.css';


function Documentries() {

    const [originalsData,setOriginalsData]=useState([])
    useEffect(() => {
      Axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_Key}&with_genres=99`)
      .then(function(output){
        //console.log(output.data.results)
        setOriginalsData(output.data.results)
      })
      .catch(function(error){
        console.log(error)
      })
    
     
    }, [])
  return (
    <div>   
         <h2 className='h2'>Documentaries</h2>
        <div className='allImages'>
            {
            originalsData.map(function(info){
                //console.log(info)
                //console.log(imageUrl+info.poster_path)
               return <img width={150} height={150}  src={imageUrl +info.poster_path}/>

            })
        }
        </div>
        </div>
  )
}

export default Documentries