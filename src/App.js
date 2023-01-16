import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Archives from './pages/Archives';
import DetailNote from './pages/DetailNote';
import Home from './pages/Home';
import NewNote from './pages/NewNote';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/archives" element={<Archives />} />
          <Route path="/notes/new" element={<NewNote />} />
          <Route path="/notes/:id" element={<DetailNote />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
