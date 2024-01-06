import React, { useContext, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import NavBar from './NavBar';
import Card from './Card';
import useFetch from '../useFetch';
import Spinner from './Spinner';

const SearchList = ({movieName}) => {
  let dataName = movieName.replace(/\s/g, '+');
  const name = movieName;
  const url = `https://api.themoviedb.org/3/search/movie?query=${dataName}&api_key=d96392b0ad7e22f0d27a748d2469a642`;
  const{data, loading, error} = useFetch(url);
  // if(loading){
  //   return <Spinner/>;
  // }
  return (
    <div>
      {/* { error ? <div>{error}</div> : */}
      <div>
            <h1 className='font-bold  my-3 text-white text-[1.8rem] ml-14 uppercase'>{movieName}</h1>
            <div className='grid  grid-cols-3 sm:grid-cols-5 md:grid-cols-6 h-[1100px] gap-1  w-10/12 mx-auto '>
                
                {
                  // console.log(data)
                    // trendingMovies.map( (movie,id) => (
                    //     <div>
                    //         <Card key={id} movie={movie}  />
                    //     </div> 
                        data.map( (movie,id) => (
                        <div>
                            <Card key={id} movie={movie}  />
                        </div>

                    ))
                }
            </div>
        </div>

      {/* } */}
    </div>
  )
}

export default SearchList