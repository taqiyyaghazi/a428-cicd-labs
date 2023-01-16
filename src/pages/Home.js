/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import { getActiveNotes } from '../utils/local-data';

const Home = () => {
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setNotes(getActiveNotes());
  }, []);

  const onSearchNote = (event) => {
    const inputSearch = event.target.value;
    const newNote = notes.filter((note) =>
      note.title.toLowerCase().includes(inputSearch.toLowerCase())
    );
    if (inputSearch === '') {
      setNotes(getActiveNotes());
    } else {
      setNotes(newNote);
    }
  };

  return (
    <section className="homepage">
      <h2>Catatan Aktif</h2>
      <SearchBar onSearch={onSearchNote} />
      {notes.length === 0 ? (
        <section className="notes-list-empty">
          <p className="notes-list__empty">Tidak ada catatan</p>
        </section>
      ) : (
        <NoteList notes={notes} />
      )}

      <div className="homepage__action">
        <Button type="add" onClick={() => navigate('/notes/new')} />
      </div>
    </section>
  );
};

export default Home;
