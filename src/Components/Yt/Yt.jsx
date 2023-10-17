import React from 'react'

import './yt.css'

const Yt = () => {
  return (
    <div className="youtube_main">
      <h1 className="youtube_title ">Our Youtube Page</h1>
      {/* <div className="youtube_details">
        <p>Savita Devi Academy is also on Youtube. Join us and stay connected</p>
      </div> */}
      <div className="youtube_frame">
        <iframe className="yt_frame_inner w-250 h-64 rounded-lg md:h-80" src="https://www.youtube.com/embed/77EvzZw3LqA?si=VvFefesUa2YfQtD4" title="YouTube video player" frameBorder="10%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>    
        <iframe className="yt_frame_inner w-250 h-64 rounded-lg md:h-80" src="https://www.youtube.com/embed/SDk0K-b6JzU?si=0lHVKLY9fA0uSqlc" title="YouTube video player" frameBorder="10%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>    
      </div>
    </div>
  )
}

export default Yt

