import { useParams } from 'react-router-dom';
import useFetch from './../componets/useFetch';

const BlogCharacter = () => {
    const params = useParams();
    const url = useFetch(`https://rickandmortyapi.com/api/character/${params.id}`);
    const { data, error, loading } = useFetch(
        url
    );

    if (loading) return (<h1>Buscando el Morty adecuado...</h1>)
    if (error) return (<h1>La pistola de portales no funciona...</h1>)

    // console.log(data);
    return (
        <div className='card'>
            <img src={data.image} className='card-img-top' alt="..." />
            <div className='card-body'>
                <h5 className='card-title'>{data.name}</h5>
                <p className='card-text'>{data.species}</p>
            </div>
        </div>
    );
};

export default BlogCharacter;