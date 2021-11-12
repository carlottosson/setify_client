import React from 'react';
import Song from './Song';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Main = ({ songs, setSongs, isSongs }) => {

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
                <div className="song-list__heading">NAME</div>
                <div className="song-list__heading">KEY</div>
                <div className="song-list__heading">TEMPO</div>
                <div className="song-list__heading">TIME</div>
                <div className="song-list__heading">MODE</div>
                <div className="song-list__heading"></div>
              </li>
              {isSongs && songs.map((song, index) => {
                return (
                <Draggable key={song.id} draggableId={song.id} index={index}>
                  {(provided) => (
                    <Song provided={provided} song={song} index={index + 1} />
                  )}
                </Draggable>
              )}
              )}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default Main
