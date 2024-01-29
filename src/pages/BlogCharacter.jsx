import { useParams, Link } from 'react-router-dom';
import useFetch from './../components/useFetch';
import { useContext } from 'react';
import { CharactersContext } from '../App';


const BlogCharacter = () => {
    const params = useParams();
    const url = useFetch(`https://rickandmortyapi.com/api/character/${params.id}`);
    const {error, loading } = useFetch(
        url
    );
    const [CharactersList] = useContext(CharactersContext);

    if (loading) return (<h1>Buscando el Morty adecuado...</h1>)
    if (error) return (<h1>La pistola de portales no funciona...</h1>)

    // console.log(data);
    return (
        <div className='card'>
            <img src={CharactersList[params.id].image} className='card-img-top' alt="..." />
            <div className='card-body'>
                <h5 className='card-title'>{CharactersList[params.id].name}</h5>
                <p className='card-text'>{CharactersList[params.id].species}</p>
                <Link to={`/blog`} className="btn btn-outline-primary">Vuelve</Link>
            </div>
        </div>
    );
};

export default BlogCharacter;