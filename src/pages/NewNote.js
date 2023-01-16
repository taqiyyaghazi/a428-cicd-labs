import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { addNote } from '../utils/local-data';

const NewNote = () => {
  const [inputTitle, setInputTitle] = useState('');
  const [inputBodyNote, setInputBodyNote] = useState('');
  const navigate = useNavigate();

  const onTitleInputChangeEventHandler = (event) => {
    setInputTitle(event.target.value);
  };

  const onBodyNoteInputChangeEventHandler = (event) => {
    setInputBodyNote(event.target.innerHTML);
  };

  const onAddNoteHandler = () => {
    addNote({
      title: inputTitle,
      body: inputBodyNote,
    });
    navigate('/');
  };

  return (
    <section className="add-new-page">
      <div className="add-new-page__input">
        <input
          className="add-new-page__input__title"
          placeholder="Judul catatan"
          value={inputTitle}
          onChange={onTitleInputChangeEventHandler}
        />
        <div
          className="add-new-page__input__body"
          contentEditable="true"
          data-placeholder="Tulis catatan anda disini...."
          onInput={onBodyNoteInputChangeEventHandler}
        ></div>
      </div>
      <div className="add-new-page__action">
        <Button type="save" onClick={onAddNoteHandler} />
      </div>
    </section>
  );
};

export default NewNote;
