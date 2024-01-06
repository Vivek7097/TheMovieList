import React from 'react'
import Card from '../components/Card';
import Spinner from '../components/Spinner';
import { useEffect, useState } from 'react'

const Popular = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(2);

    const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTYzOTJiMGFkN2UyMmYwZDI3YTc0OGQyNDY5YTY0MiIsInN1YiI6IjY0NDNiMDA5ZDM1ZGVhMDRhZGZiOTdiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pe6RCUQssJb4JRPEBVDJ9Zzdspabem9UqvkgdSPBc9c'
        }
    };

    useEffect(() => {
        setLoading(true);
    
        fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`, options)
        .then(response => response.json())
        .then(response => {
            setData(response.results);
            setTotalPages(response.total_pages);
            setLoading(false);
        })
        .catch(err => {
            console.error(err);
            setLoading(false);
        });
    }, [page]);

  
    if(loading){
        return <Spinner/>;
    }
    return (
        <div>
              <h1 className='font-bold  my-3 text-white text-[1.8rem] ml-14 uppercase'>Popular</h1>
              <div className='grid  grid-cols-3 sm:grid-cols-5 md:grid-cols-6  gap-1  w-10/12 mx-auto '>
                  
                  {
                      // trendingMovies.map( (movie,id) => (
                      //     <div>
                      //         <Card key={id} movie={movie}  />
                          // </div> 
                          data.map( (movie,id) => (
                          <div>
                              <Card key={id} movie={movie}  />
                          </div>
  
                      ))
                  }
              </div>
              <div className='text-white flex gap-2 justify-center items-center py-2 font-semibold text-xl'>
                <button
                  onClick={() => setPage(page - 1)}
                  disabled={page === 1}
                  className='hover:text-green-500'
                >Previous</button>
                <p>{page}</p>
                <button
                  onClick={() => setPage(page + 1)}
                  disabled={page === totalPages}
                  className='hover:text-green-500'
                >Next</button>
               </div>
          </div>
    )
  }

export default Popular