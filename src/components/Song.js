import React from 'react'

const Song = ({ provided, song, index, handleModal }) => {
  const handleClick = (e) => {
    const id = e.target.closest('.song-list__item').id;
    handleModal(id);
  }
  return (
    <li id={song.id} {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} className="song-list__item">
      <div className="song-list__index">
        {index}
      </div>
      <div className="song-list__img">
        <img src={song.image} alt="Album artwork"/>
      </div>
      <div className="song-list__name">
        {song.songName}
      </div>
      <div className="song-list__key">
        {song.key} {song.mode}
      </div>
      <div className="song-list__tempo">
        {song.tempo}
      </div>
      <div className="song-list__duration">
        {song.duration_nice}
      </div>
      <div className="song-list__happy">
        {song.happy_emoji}
      </div>
      <button onClick={handleClick} className="song-list__btn">
        {/* <span className="song-list__btn-span"></spa n> */}
        Edit
      </button>
    </li>
  )
}

export default Song;
