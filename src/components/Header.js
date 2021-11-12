import React from 'react'

function Header({ user, isUser }) {
  return (
    <div className="header">
      <div className="header__left">
        <div className="header__logo">Setify</div>
      </div>
      <div className="header__right">
        <div className="header__img">
          {isUser &&
            <a href={user.external_urls.spotify} title={`${user.display_name} on Spotify`}>
              <img src={user.images[0].url} alt={`User ${user.display_name}`} />
            </a>
          }
        </div>
        <div className="header__name">
          {user.display_name}
        </div>
      </div>
    </div>
  )
}

export default Header;
