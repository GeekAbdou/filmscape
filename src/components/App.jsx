import React from 'react';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Actors, MovieInformation, Profile, Movies, NavBar } from '.';

function App() {
  return (
    <Router>
      <CssBaseline />
      <NavBar />
      <main>
        <Routes>
          <Route exact path="/" element={<Movies />} />
          <Route exact path="/movie/:id" element={<MovieInformation />} />
          <Route exact path="/actors/:id" element={<Actors />} />
          <Route exact path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
