import React from 'react';

const NotFound = ({ message }) => {
  return (
    <section className="not-found-page">
      <img
        src="https://img.icons8.com/pastel-glyph/180/FFFFFF/page-not-found--v1.png"
        alt="404"
      />
      <h2>Not Found Error!</h2>
    </section>
  );
};

export default NotFound;
