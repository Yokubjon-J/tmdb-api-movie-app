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
                return (<Single title={movie.title || movie.name} key={movie.id} type={movie.media_type} 
                    poster={movie.poster_path} />) } )
            }
        </div>
    ) } else {
        console.log('personResults: ',personResults)
        return (
            <div className='list'>
            {personResults.map( (movie)=>{
                return (<Single title={movie.title || movie.name} key={movie.id} type={movie.media_type} 
                    poster={movie.profile_path} />) } )
            }
        </div>
        )
    }
}

export default List;
