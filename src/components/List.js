import React, {useContext} from 'react';
import Single from './Single';
import {MovieQueriesContext} from '../MovieQueriesContext';
import './list.css';

const List = ({content, byPerson, personInput, personResults}) => {
    console.log(content);
    console.log(byPerson)
    // let {search, filters} = useContext(MovieQueriesContext);
    if (byPerson===false) { 
        console.log('byPerson: ', byPerson)
        return (
        <div className='list'>
            {content.map( (movie)=>{
                return (
                    <div className="list2" key={movie.id}>
                    <Single title={movie.title || movie.name} type={movie.media_type} 
                    poster={movie.poster_path} />
                    <div className="btn btn-primary tooltip">Hover Me For More Info
                        <div className="top">
                            <h3>{movie.original_title}</h3>
                            <p>{movie.overview}</p>
                            <i></i>
                        </div>
                    </div>
                    </div>
                    ) } )
            }
        </div>
    ) } else {
        console.log('personResults: ',personResults)
        return (
            <div className='list'>
            {personResults.map( (movie)=>{
                return (
                    <div className="list2" key={movie.id}>
                    <Single title={movie.title || movie.name} key={movie.id} type={movie.media_type} 
                    poster={movie.profile_path} />
                    <div className="btn btn-primary tooltip">Hover Me For More Info
                        <div className="top">
                            <h2>Some of their famous filmings:</h2>
                            {movie.known_for.map(film => {
                                return (
                                    <div>
                                    <h3>{film.original_title}</h3>
                                    <p>{movie.overview}</p>
                                    </div>
                                )
                            })}
                            <i></i>
                        </div>
                    </div>
                    </div>
                ) } )
            }
            </div>
        )
    }
}

export default List;
