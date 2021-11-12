import React from 'react'

const Song = ({ provided, song, index }) => {
  console.log(song);
  return (
    <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} className="song-list__item">
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
        <span>{song.key}</span> <span>{song.mode}</span>
      </div>
      <div className="song-list__tempo">
        <span>{song.tempo}</span> bpm
      </div>
      <div className="song-list__duration">
        <span>{song.duration_nice}</span>
      </div>
      <div className="song-list__happy">
        <span>{song.happy_emoji}</span>
      </div>
      <button className="song-list__btn">
        <span className="song-list__btn-span"></span>
      </button>
    </li>
  )
}

export default Song;
