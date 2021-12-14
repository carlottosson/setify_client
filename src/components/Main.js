import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Song from './Song';
import Modal from './Modal';

const Main = ({ songs, setSongs, isSongs }) => {
  const [modalInfo, setModalInfo] = useState({});
  const [isModal, setIsModal] = useState(false);

  const handleModal = (id) => {
    const item = songs.find(i => i.id === id);
    setModalInfo(item);
    setIsModal(true);
  }

  const saveItem = (item) => {
    const itemIndex = songs.indexOf(item);
    const newSongsArr = Array.from(songs);
    const [hoho] = newSongsArr.splice(itemIndex);
    newSongsArr.splice(itemIndex, 0, hoho);
    setSongs(newSongsArr);
  }

  const handleOnDragEnd = (result) => {
    if (!result.destination ) return;
    const items = Array.from(songs);
    const [draggedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, draggedItem);

    setSongs(items);
  }
  return (
    <div className="main">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="song-list">
          {(provided) => (
            <ul className="song-list" {...provided.droppableProps} ref={provided.innerRef}>
              <li className="song-list__item song-list__info">
                <div className="song-list__heading">#</div>
                <div className="song-list__heading"></div>
                <div className="song-list__heading">TITLE</div>
                <div className="song-list__heading">KEY</div>
                <div className="song-list__heading">TEMPO</div>
                <div className="song-list__heading">TIME</div>
                <div className="song-list__heading">MOOD</div>
                <div className="song-list__heading"></div>
              </li>
              {isSongs && songs.map((song, index) => {
                return (
                <Draggable key={song.id} draggableId={song.id} index={index}>
                  {(provided) => (
                    <Song provided={provided} song={song} index={index + 1} handleModal={handleModal} />
                  )}
                </Draggable>
              )}
              )}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      {isModal && <Modal song={modalInfo} setIsModal={setIsModal} saveItem={saveItem}/>}
    </div>
  )
}

export default Main
