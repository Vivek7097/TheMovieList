import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import { useContext,useState} from 'react';
import { AppContext } from './context/AppContext';
import Spinner from './components/Spinner';
import CardPage from './pages/CardPage';
import TopRated from './pages/TopRated';
import UpComing from './pages/UpComing';
import Popular from './pages/Popular';
import useFetch from './useFetch';
import { baseUrl } from './baseUrl';
import SideBar from './components/SideBar';
import SearchList from './components/SearchList'
import Footer from './components/Footer';

function App() {
  const {movieName } = useContext(AppContext)
  let url = `${baseUrl}popular?api_key=d96392b0ad7e22f0d27a748d2469a642`
  const {data, loading, error} = useFetch(url);
  const [data2, setData] = useState([]);

    const options = {
      method: 'GET',
      headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTYzOTJiMGFkN2UyMmYwZDI3YTc0OGQyNDY5YTY0MiIsInN1YiI6IjY0NDNiMDA5ZDM1ZGVhMDRhZGZiOTdiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pe6RCUQssJb4JRPEBVDJ9Zzdspabem9UqvkgdSPBc9c'
      }
    };
  fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`, options)
        .then(response => response.json())
        .then(response => {
            setData(response.results);
        })
        .catch(err => {
            console.error(err);
        });
  // setPath(`movie/${movieid}`);
  // useEffect( ()=>{
  //   // setCategory('popular');
  //   fetchPageData();
  // },[category])
  return (
    <div className='bg-black relative'>
      <NavBar/>
      <SideBar/>
      <Routes>
        <Route path="/" element={loading ? <Spinner/> : <Home data={data} data2={data2}/>}/>
        <Route path="movie/cardPage" element={<CardPage />}/>
        <Route path= "movie/top_rated" element={loading ? <Spinner/> :<TopRated/>}/>
        <Route path="movie/top_rated/movie/cardPage" element={<CardPage />}/>
        <Route path= "movie/upcoming" element={loading ? <Spinner/> :<UpComing/>}/>
        <Route path="movie/upcoming/movie/cardPage" element={<CardPage />}/>
        <Route path= "movie/popular" element={loading ? <Spinner/> :<Popular/>}/>
        <Route path="movie/popular/movie/cardPage" element={<CardPage />}/>
        <Route path="movie/searchlist" element={<SearchList movieName ={movieName}/>}/>
        <Route path="/*" element={<h1>Error page</h1>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
