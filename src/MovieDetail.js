import React from 'react'
import NetflixOriginals from './NetflixOriginals'
import Comedy from './Comedy'
import Trending from './Trending'
import TopRated from './TopRated'
import ActionMovies from './ActionMovies'
import Horro from './Horro'
import Romantic from './Romantic'
import Documentries from './Documentries'

function MovieDetail() {
  return (
    <div>
        <Trending/>
        <NetflixOriginals/>
        {/* <TopRated/> */}
        <Comedy/>
        <ActionMovies/>
        <Horro/>
        <Romantic/>
        <Documentries/>
    </div>
  )
}

export default MovieDetail