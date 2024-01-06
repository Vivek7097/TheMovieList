import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';


const Card = ({movie, key}) => {
  const {setMovieId, setMovies} = useContext(AppContext);
  const id = movie.id;

  return (
    <Link  to='/movie/cardPage' key={key} onClick={() => {
      console.log(movie)
      setMovies(movie)
       setMovieId(id)}}
    className='inline-block relative sm:hover:scale-[1.2] md:hover:scale-[1.2] hover:z-10 hover:shadow-black border border-gray-700 rounded-lg transition-all duration-300 ease-out' >
                        <div className='rounded-md border border-gray-700' >
                            <img src={`https://image.tmdb.org/t/p/original/${movie && movie.poster_path}`} 
                               loading='lazy' className=' object-contain'/>
                        </div>
                        <div className=' flex-col item-center text-white font-semibold  hidden hover:block absolute bottom-0  '>
                            <h1 className='text-lg font-extrabold ml-0 pt-[150px] items-center px-3 '>{movie.title}</h1>
                            <span className='ml-0 items-center text-sm flex justify-between px-3'>
                                <p>{`${movie.release_date}`}</p>
                                <p>{` ${movie.vote_average}`}</p>
                            </span>
                            <p className='w-full mb-0 overflow-y-hidden item-center text-sm px-3 pb-3'>{
                            movie.overview.length > 40 ? (movie.overview.substr(0,40))+"..." :(movie.overview)}</p>
                        </div>

    </Link>
  )
};

export default Card