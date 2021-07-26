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
  const [region, setRegion] = useState('LU');
  const [language, setLanguage] = useState('en');
  const [monetizationType, setMonetizationType] = useState('flatrate');
  const [page, setPage] = useState(1);
  // let region = "LU", language = 'en', monetizationType = 'flatrate', page = 1;
  let search = false; let filters = true;

  const fetchMovies = async () => {
    let data = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}&language=${language}&region=${region}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=${monetizationType}`);
    console.log(data); //just to inspect the url
    // return data;
    setContent(data.data.results) //contains only 20 movies
  }

  useEffect(() => {
    fetchMovies()
    console.log('initial content: ', content);
  }, []);
 
  useEffect(() => {
    fetchMovies();
    console.log('later content: ', content);
  }, [region, language, monetizationType, page]);
  
  return (
    // <p>bbbbb. {content && content[0].title}</p> 
    <MovieQueriesContextProvider>
      <div className="App">
        <ComplexAppBar region={region} language={language} monetizationType={monetizationType} page={page}
          setRegion={setRegion} setLanguage={setLanguage} setMonetizationType={setMonetizationType} setPage={setPage} />
        <List content={content} />
        {/* <List content={content }/> */}
      </div>
    </MovieQueriesContextProvider>
  );
}

export default App;
