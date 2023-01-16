import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { showFormattedDate } from '../utils';

const NoteItem = ({ id, title, date, body }) => {
  return (
    <div className="note-item">
      <Link to={`/notes/${id}`}>
        <h4 className="note-item__title">{title}</h4>
      </Link>
      <p className="note-item__createdAt">{showFormattedDate(date)}</p>
      <p className="note-item__body">{body}</p>
    </div>
  );
};

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

export default NoteItem;
