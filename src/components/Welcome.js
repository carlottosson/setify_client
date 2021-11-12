import React from 'react'

const Welcome = () => {
  return (
    <section className="welcome">
      <h1 className="h1 welcome__heading">  Setify</h1>
      <p className="welcome__subheading">Playlist -› Setlist converter</p>
      <a className="btn welcome__login" href="http://localhost:8080/login">Login</a>
    </section>
  )
}

export default Welcome
