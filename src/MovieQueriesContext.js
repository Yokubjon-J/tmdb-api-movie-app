import React, {useContext, createContext, useState} from 'react';

export const MovieQueriesContext = createContext();

const MovieQueriesContextProvider = (props) => {
    const [region, setRegion] = useState('LU');
    const [language, setLanguage] = useState('en');
    const [monetizationType, setMonetizationType] = useState('flatrate');
    const [page, setPage] = useState(1);
    // let region = "LU", language = 'en', monetizationType = 'flatrate', page = 1;
    let search = false; let filters = true;
    return (
        <MovieQueriesContext.Provider value={{region, setRegion, language, setLanguage, monetizationType, setMonetizationType,
            page, setPage, search, filters}}>
            {props.children}
        </MovieQueriesContext.Provider>
    )
}

export default MovieQueriesContextProvider;
