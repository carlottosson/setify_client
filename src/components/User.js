import React, { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';

const User = () => {
  const [isUser, setIsUser] = useState(false)
  const [user, setUser] = useState({});
  const [isPlaylists, setIsPlaylists] = useState(false);
  const [playlists, setPlaylists] = useState({});
  const [isSongs, setIsSongs] = useState(false);
  const [songs, setSongs] = useState({});

  const fetchSongs = (id) => {
    const options = {
      method: 'post',
      body: JSON.stringify({
        id: id
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }
    fetch('http://localhost:8080/getsongs', options)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setSongs(data);
        setIsSongs(true);
      })
  }

  useEffect(() => {
    fetch('http://127.0.0.1:8080/getuser')
    .then(res => res.json())
    .then(data => {
      setUser(data);
      setIsUser(true);
    })
  }, []);

  useEffect(() => {
    if(isUser) {
      fetch('http://localhost:8080/getuserplaylist')
        .then(res => res.json())
        .then(data => {
          setPlaylists(data);
          setIsPlaylists(true);
          console.log(data)
        })
    }
  }, [isUser])

  return (
    <div className="ui-wrap">
      <Sidebar playlists={playlists} fetchSongs={fetchSongs} isPlaylists={isPlaylists}/>
      <Header user={user} isUser={isUser}/>
      <Main songs={songs} setSongs={setSongs} isSongs={isSongs} />
    </div>
  )
}

export default User
