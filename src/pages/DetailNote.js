import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../components/Button';
import { showFormattedDate } from '../utils';
import {
    archiveNote,
    deleteNote,
    getNote,
    unarchiveNote
} from '../utils/local-data';

const DetailNote = () => {
  const { id } = useParams();
  const [note, setNote] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const note = getNote(id);
    note ? setNote(note) : navigate('/not-found');
  }, [id, navigate]);

  const onDeleteNoteHandler = () => {
    deleteNote(id);
    navigate('/');
  };

  const onArchiveNoteHandler = () => {
    archiveNote(id);
    navigate('/');
  };

  const onUnarchiveNoteHandler = () => {
    unarchiveNote(id);
    navigate('/');
  };

  return (
    <section className="detail-page">
      <h3 className="detail-page__title">{note.title}</h3>
      <p className="detail-page__createdAt">
        {showFormattedDate(note.createdAt)}
      </p>
      <div className="detail-page__body">{note.body}</div>
      <div className="detail-page__action">
        {note.archived ? (
          <Button type="unarchive" onClick={onUnarchiveNoteHandler} />
        ) : (
          <Button type="archive" onClick={onArchiveNoteHandler} />
        )}
        <Button type="delete" onClick={onDeleteNoteHandler} />
      </div>
    </section>
  );
};

export default DetailNote;
