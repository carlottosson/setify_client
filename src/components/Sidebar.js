import React from 'react'
import PlaylistItem from './PlaylistItem'

const Sidebar = ({ playlists, fetchSongs, isPlaylists }) => {
  return (
    <div className="sidebar">
      {isPlaylists &&
        playlists.items.map(item => {
          return (
            <PlaylistItem key={item.id} list={item} fetchSongs={fetchSongs}/>
          ) 
        })
      }
    </div>
  )
}

export default Sidebar
