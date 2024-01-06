import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState } from 'react'
import Spinner from './Spinner';
const HeroSection = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTYzOTJiMGFkN2UyMmYwZDI3YTc0OGQyNDY5YTY0MiIsInN1YiI6IjY0NDNiMDA5ZDM1ZGVhMDRhZGZiOTdiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pe6RCUQssJb4JRPEBVDJ9Zzdspabem9UqvkgdSPBc9c'
        }
    };

    useEffect(() => {
        setLoading(true);
    
        fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`, options)
        .then(response => response.json())
        .then(response => {
            setData(response.results);
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
    <div className='mx-auto w-[90%]'>
        <Carousel
            showThumbs={false}
            autoPlay={true}
            transitionTime={3}
            infiniteLoop={true}
            showStatus={false}
        >
            {
                data.map((movie) => (
                       <div key={movie.id}>
                            <div className='w-full h-[220px] md:h-[600px] relative shadow-xl'>
                                <div className='absolute top-0 ' >
                                    <img src={`https://image.tmdb.org/t/p/original/${movie && movie.backdrop_path}`} 
                                    className=' z-10  object-contain'/>
                                </div>
                                <div className=' flex-row  text-white font-semibold  z-50 absolute top-[50%] md:top-[75%] '>
                                    <h1 className='text-3xl font-extrabold text-start ml-14 '>{movie.title}</h1>
                                    <span className='flex justify-start my-2 ml-14 gap-4'>
                                        <p>{`Realse Date ${movie.release_date}`}</p>
                                        <p>{` ${movie.vote_average}`}</p>
                                    </span>
                                    {/* <p className='w-[50%] mb-0 text-sm ml-14 text-left'>{movie.overview.length > 100 ? (movie.overview.substr(0,100)): (movie.overview)}</p> */}
                                </div>
                            </div>
                       </div>
                ))
            }
        </Carousel>
    </div>
  )
}

export default HeroSection