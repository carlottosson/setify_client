import React from 'react';
import Song from './Song';

const Main = ({ songs, isSongs }) => {
  return (
    <div className="main">
      <ol className="song-list">
        <li className="song-list__item song-list__info">
          <div className="song-list__heading">#</div>
          <div className="song-list__heading"></div>
          <div className="song-list__heading">NAME</div>
          <div className="song-list__heading">KEY</div>
          <div className="song-list__heading">TEMPO</div>
          <div className="song-list__heading">TIME</div>
          <div className="song-list__heading">MODE</div>
          <div className="song-list__heading"></div>
        </li>
        {isSongs && songs.map((song, index) => {
          return <Song key={song.id} song={song} index={index + 1} />}
        )}
      </ol>
    </div>
  )
}

export default Main
