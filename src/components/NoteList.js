import PropTypes from 'prop-types';
import React from 'react';
import NoteItem from './NoteItem';

const NoteList = ({ notes }) => {
  return (
    <section className="notes-list">
      {notes.map((note) => {
        return (
          <NoteItem
            key={note.id}
            id={note.id}
            title={note.title}
            date={note.createdAt}
            body={note.body}
            archived={note.archived}
          />
        );
      })}
    </section>
  );
};

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NoteList;
