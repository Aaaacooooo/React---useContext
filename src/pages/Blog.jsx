import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useFetch from '../components/useFetch';
import { useSearchParams } from 'react-router-dom';
import { CharactersContext } from '../App';

const Blog = () => {
    const { data, error, loading } = useFetch('https://rickandmortyapi.com/api/character');
    //con serchParams.get(nombre accedemos al valor de la url que queremos
    //con el setSearchParams establecemos el valor
    // let [searchParams, setSerchParams] = useSearchParams();
    // const handleChange = (e) => {
    //     setSerchParams({ [e.target.name]: e.target.value })
    // }
    // Obtener el contexto y desestructurar la función setCharactersList
    const [setCharactersList] = useContext(CharactersContext);

    // Obtener y establecer parámetros de búsqueda de la URL
    const [searchParams] = useSearchParams();
    const filter = searchParams.get('filter') || '';

    // Estado local para el campo de búsqueda
    const [searchInput, setSearchInput] = useState(filter);

    // Hook para manejar la navegación entre rutas
    const navigate = useNavigate();

    // Manejador para el cambio en el campo de búsqueda
    const handleChange = (e) => {
        setSearchInput(e.target.value);
    };

    // Manejador de la acción de búsqueda
    const handleSearch = () => {
        // Actualizar el parámetro 'filter' en la URL y navegar a la nueva URL
        navigate(`/blog?filter=${encodeURIComponent(searchInput)}`);
    };

    // Filtrar los personajes en función del parámetro de búsqueda
    const filteredCharacters = data
        ? data.results.filter((character) =>
            character.name.toLowerCase().includes(filter.toLowerCase())
        )
        : [];

    // Efecto secundario para actualizar el contexto cuando los datos cambian
    useEffect(() => {
        if (data) {
            setCharactersList(data.results);
        }
    }, [data, setCharactersList]);

    // Manejo de casos de carga y errores
    if (loading) return (<h1>Buscando el Morty adecuado...</h1>);
    if (error) return (<h1>La pistola de portales no funciona... Detalles del error: {error.message}</h1>);

    // Renderizado de la interfaz de usuario
    return (
        <div>
            <h2>Blog - Elige tu personaje favorito</h2>

            {/* Campo de búsqueda */}
            <input type="text" value={searchInput} onChange={handleChange} />
            <button onClick={handleSearch}>Buscar</button>

            {/* Lista de personajes filtrados */}
            {filteredCharacters.map(item => (
                <div key={item.id}>
                    <Link to={`/blog/${item.id}`}>
                        <h3>{item.name}</h3>
                    </Link>
                </div>
            ))}


            {/* <input
                type="text"
                name='filter'
                onChange={handleChange}
                className='form-control my-3'
                alt='Buscador'
                value={searchParams.get('filter') || ''}
            />

            <ul className='list-group'>
                {
                    data.results.map(item => {
                        return (
                            <Link className='list-group-item'
                                key={item.id}
                                to={`/blog/${item.id}`}>
                                {item.name}</Link>)
                    })
                }
            </ul> */}
        </div>
    );
};

export default Blog;