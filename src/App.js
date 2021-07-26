import './App.css';
import List from "./components/List";
import {useState, useEffect, useContext} from 'react';
import ComplexAppBar from "./components/ComplexAppBar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import {MovieQueriesContext} from './MovieQueriesContext';
import MovieQueriesContextProvider from './MovieQueriesContext';
function App() {

  // let { region, setRegion, language, setLanguage, monetizationType, setMonetizationType,
  //   page, setPage} = useContext(MovieQueriesContext);
  // let {search, filters} = useContext(MovieQueriesContext);
  let [content, setContent] = useState([]);
  let [byPerson, setByPerson] = useState(false);
  let [personInput, setPersonInput] = useState('Benedict');
  let [personResults, setPersonResults] = useState([]);
  const [region, setRegion] = useState('LU');
  const [language, setLanguage] = useState('en');
  const [monetizationType, setMonetizationType] = useState('flatrate');
  const [page, setPage] = useState(1);
  
  const fetchMovies = async () => {
    let data = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=${language}&region=${region}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=${monetizationType}`);
    console.log(data); //just to inspect the url
    setContent(data.data.results) //contains only 20 movies
  }

  const fetchByPerson = async () => {
    let dataa = await axios.get(`https://api.themoviedb.org/3/search/person?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${personInput}&language=en-US&page=1&include_adult=false`);
    console.log(dataa); //just to inspect the url
    setPersonResults(dataa.data.results);
    console.log(personResults);
  }

  // useEffect(() => {
  //   fetchMovies()
  //   console.log('initial content: ', content);
  // }, []);

  // useEffect(() => {
  //     fetchByPerson();
  //     fetchMovies();
  //     console.log('initial content: ', content);
  // }, []);
 
  // useEffect(() => {
  //   fetchMovies();
  //   console.log('later content: ', content);
  // }, [region, language, monetizationType, page, byPerson]);

  useEffect(() => {
    fetchByPerson(); fetchMovies();
    console.log('later content: ', content);
  }, [region, language, monetizationType, page, byPerson, personInput]);
  
  if (byPerson===false) {return (
    // <MovieQueriesContextProvider>
      <div className="App">
        <ComplexAppBar region={region} language={language} monetizationType={monetizationType} page={page}
          setRegion={setRegion} setLanguage={setLanguage} setMonetizationType={setMonetizationType} setPage={setPage} 
          personInput={personInput} setPersonInput={setPersonInput} byPerson={byPerson} setByPerson={setByPerson}/>
        <List content={content} personInput={personInput} byPerson={byPerson} personResults={personResults}/>
      </div>
    // </MovieQueriesContextProvider>
  )} else {
    return (
      <div>
        <ComplexAppBar region={region} language={language} monetizationType={monetizationType} page={page}
          setRegion={setRegion} setLanguage={setLanguage} setMonetizationType={setMonetizationType} setPage={setPage} 
          personInput={personInput} setPersonInput={setPersonInput} byPerson={byPerson} setByPerson={setByPerson}/>
        <List content={content} personInput={personInput} byPerson={byPerson} personResults={personResults} />
      </div>
    )
  }
}

export default App;
