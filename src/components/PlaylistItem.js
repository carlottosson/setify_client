import React from 'react'

const PlaylistItem = ({ list, fetchSongs }) => {

  const handleItemClick = () => {
    fetchSongs(list.id);
  }
  return (
      <button className="sidebar__btn" id={list.id} onClick={handleItemClick}>{list.name}</button>
  )
}

export default PlaylistItem
