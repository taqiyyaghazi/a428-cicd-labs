/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import { getArchivedNotes } from '../utils/local-data';

const Archives = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    setNotes(getArchivedNotes());
  }, []);

  const onSearchNote = (event) => {
    const inputSearch = event.target.value;
    const newNote = notes.filter((note) =>
      note.title.toLowerCase().includes(inputSearch.toLowerCase())
    );
    if (inputSearch === '') {
      setNotes(getArchivedNotes());
    } else {
      setNotes(newNote);
    }
  };

  return (
    <section className="archives-page">
      <h2>Catatan Arsip</h2>
      <SearchBar onSearch={onSearchNote} />
      {notes.length === 0 ? (
        <section className="notes-list-empty">
          <p className="notes-list__empty">Tidak ada catatan</p>
        </section>
      ) : (
        <NoteList notes={notes} />
      )}
    </section>
  );
};

export default Archives;
