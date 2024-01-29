import { useState } from 'react'
import { createContext } from 'react';
import { Routes, Route, Router } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Layout from './layouts/Layout';
import Inicio from './pages/Inicio';
import Contacto from './pages/Contacto';
import Blog from './pages/Blog';
import BlogCharacter from './pages/BlogCharacter';
import NotFound from './pages/NotFound';
export const CharactersContext = createContext();

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

            <Route element={<Layout />} path="/">
              <Route element={<Inicio />} path="/" />
              <Route element={<Contacto />} path="/contacto" />
              <Route element={<Blog />} path="/blog" />
              <Route element={<BlogCharacter />} path="/blog/:id" />
              <Route element={<NotFound />} path="*" />
            </Route>

          </Routes>
        </CharactersContext.Provider>F
    </>
  )
}


export default App;