import React, { useState } from 'react'

const Modal = ({ song, setIsModal, saveItem }) => {
  const [inputValues, setInputValues] = useState({ title: song.songName, tempo: song.tempo });

  const handleChange = e => {
    setInputValues({
      ...inputValues,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = {...song};
    item.songName = inputValues.title;
    item.tempo = inputValues.tempo;
    saveItem(item);
    setIsModal(false);
  }

  const closeModal = (e) => {
    if (e.target.matches('.modal__inner')) {
      setIsModal(false);
    }
  }
  return (
    <div className="modal">
      <div onClick={closeModal} className="modal__inner">
        <form className="modal__form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="song-name">TITLE</label>
            <input onChange={handleChange} id="title" type="text" value={inputValues.title} />
          </div>
          <div>
            <label htmlFor="song-tempo">TEMPO</label>
            <input onChange={handleChange} id="tempo" type="text" value={inputValues.tempo}/>
          </div>
          <button className="song-list__btn">Save</button>
        </form>
      </div>
    </div>
  )
}

export default Modal
