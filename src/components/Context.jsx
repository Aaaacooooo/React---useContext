import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Paso 1: Crear el contexto
const DataContext = createContext();

export const CharactersContext = ({ children }) => {
    const [data, setData] = useData([]);

    useEffect(() => {
        // Simulación de una consulta Fetch para obtener datos
        const fetchData = async () => {
            try {
                const response = await fetch('https://rickandmortyapi.com/api/character');
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <CharactersContext.Provider value={{ data, setData }}>
            {children}
        </CharactersContext.Provider>
    );
};

CharactersContext.propTypes = {
    children: PropTypes.node.isRequired
}


export const useData = () => {
    // Hook personalizado para utilizar el contexto más fácilmente
    return useContext(DataContext);
};
