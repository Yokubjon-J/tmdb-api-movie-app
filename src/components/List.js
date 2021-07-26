import React, {useContext} from 'react';
import Single from './Single';
import {MovieQueriesContext} from '../MovieQueriesContext';
import './list.css';

const List = ({content}) => {
    console.log(content);
    // let {search, filters} = useContext(MovieQueriesContext);
    return (
        <div className='list'>
            {content.map( (movie)=>{
                return (<Single title={movie.title || movie.name} key={movie.id} type={movie.media_type} 
                    poster={movie.poster_path} />) } )
            }
        </div>
    )
}

export default List;
