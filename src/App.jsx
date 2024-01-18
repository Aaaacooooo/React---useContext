import { useState } from 'react'
import { createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Layaut from './layouts/Layaut';
import Inicio from './components/Inicio';
import Contacto from './components/Contacto';
import Blog from './pages/Blog';
import BlogCharacter from './pages/BlogCharacter';
import NotFound from './pages/NotFound';

function App() {
  //declaramos una varible de estaddo para que esta pueda cambiar desde los hijos
  //Le pasamos un único objeto con la variable de estado y la función para modificalos
  const [charactersList, setCharactersList] = useState(null)

  console.log(charactersList);
  return (
    <>
      <CharactersContext.Provider values={{ charactersList, setCharactersList }}>

        <Navbar></Navbar>
        <Routes>
          <Route element={<Layaut />} path="/">
            <Route element={<Inicio />} path="/" />
            <Route element={<Contacto />} path="/contacto" />
            <Route element={<Blog />} path="/blog" />
            <Route element={<BlogCharacter />} path="/blog/:id" />
            <Route element={<NotFound />} path="*" />
          </Route>
        </Routes>

      </CharactersContext.Provider>
    </>
  )
}

export const CharactersContext = createContext();
export default App;