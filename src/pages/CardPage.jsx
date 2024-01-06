import React, { useContext, useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import { AppContext } from '../context/AppContext'
import { useLocation } from 'react-router-dom'
import Spinner from '../components/Spinner'

const CardPage = () => {
  const{ movie, setLoading, loading} = useContext(AppContext);
  const[movieDetail, setMovieDetail] = useState([]);
  const[movieRev, setMovieRev] = useState([]);

    const fetchPageData = async () => {
        setLoading(true);
        // console.log(category);
        // let url = `https://api.themoviedb.org/3/movie/popular?api_key=d96392b0ad7e22f0d27a748d2469a642`;
        let url = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=d96392b0ad7e22f0d27a748d2469a642`
        let url2 = `https://api.themoviedb.org/3/movie/${movie.id}/reviews?api_key=d96392b0ad7e22f0d27a748d2469a642`
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTYzOTJiMGFkN2UyMmYwZDI3YTc0OGQyNDY5YTY0MiIsInN1YiI6IjY0NDNiMDA5ZDM1ZGVhMDRhZGZiOTdiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pe6RCUQssJb4JRPEBVDJ9Zzdspabem9UqvkgdSPBc9c'
            }
        };
        // let url
        try{ 
            const res = await fetch(url);
            const data = await res.json();
            const resRev = await fetch(url2, options)
            const dataRev = await resRev.json();
            console.log("dataRev");   
            console.log(dataRev);
            setMovieRev(dataRev.results);
            setMovieDetail(data);

            // console.log(movieDetail);
        }
        catch(error){
            console.log("Error in Fetching data", error)
            setMovieDetail([]);
        }
        setLoading(false);
    }
    useEffect( () => {
        console.log('call');
        fetchPageData();
        console.log(movieDetail);
    },[])
    if(loading){
        return <Spinner/>;
    }
  return (
    <div className='w-full relative' >
        <div className=' max-w-5xl h-[25rem] mx-auto  box-content hidden sm:block md:block'>
            <img src={`https://image.tmdb.org/t/p/original/${movieDetail && movieDetail.backdrop_path}`}
             className=' object-cover h-[23rem] min-w-full rounded-md'/>
        </div>
        <div className=' flex-row-reverse justify-center items-center hover:shadow-black border border-gray-700 rounded-lg ' >
            <div className='rounded-md border border-gray-700 sm:absolute md:absolute z-10  w-44 h-44 top-[14rem] left-[10rem] mx-auto  mt-10' >
                <img src={`https://image.tmdb.org/t/p/original/${movieDetail && movieDetail.poster_path}`} 
                    loading='lazy' className=' object-contain'/>
            </div>
            <div className=' flex-col item-center text-white font-semibold sm:absolute md:absolute sm:w-2/4 md:w-2/4 w-10/12 top-[4rem] left-[24rem] mx-auto -mt-3'>
                            {/* <h1 className='text-lg font-extrabold ml-0 pt-[150px] items-center px-3 '>{movieDetail.title}</h1> */}
                            <h1 className=' font-extrabold ml-0 pt-[150px] items-center text-3xl px-3 '>{movieDetail.original_title}</h1>
                            <span className='ml-0 items-center text-sm flex justify-between px-3'>
                                <div className='flex justify-between  gap-[5rem]'>
                                    <p>Release Date-</p>
                                    <p>{`${movieDetail.release_date}`}</p>
                                </div>
                            </span>
                            <div className='flex ml-3 gap-[7rem]'>
                                <p>Rating-</p>
                                <p>{` ${movieDetail.vote_average}`}</p>
                            </div>
                            <p className='w-full mb-0 overflow-y-hidden item-center text-lg px-3 pt-3 text-gray-200 outline-purple-400'>{
                            movieDetail.tagline}</p>
                            <div className=' flex gap-3 ml-3 flex-wrap outline-purple-400'>
                                { movieDetail.genres?.map((genra) => (<button 
                                className='border  rounded-3xl px-2 py-1 '>
                                    {genra.name}</button>))}
                            </div >
            </div>  
        </div>
              <div className=' flex-col  md:w-10/12 mx-auto sm:mt-24 md:ml-20 md:mt-32 sm:ml-20 '>
                <h2 className='font-bold text-3xl  text-white py-6 pl-10'>Story Line</h2>            
                <p className='w-full mb-0  item-center text-white text-md pl-16 '>{movieDetail.overview}</p>
              </div>

              <div className=' flex-col  md:w-10/12 mx-auto sm:mt-24 md:ml-20 md:mt-24 sm:ml-20 '>
                <h2 className='font-bold text-3xl  text-white py-6 pl-10'>Reviews</h2>            
                <div className='flex flex-col gap-5'>
                    {movieRev?.map((rev) => (
                        <div className='flex flex-col gap-3'>
                            <div className='flex justify-start items-center ml-14 '>
                            <img src={`https://image.tmdb.org/t/p/original/${rev.author_details.avatar_path}`}
                                className='rounded-full w-[2rem] h-[2rem]' 
                                alt='Auther Picture'/>
                            <h3 className='font-bold text-xl  text-white  pl-5'>{rev.author}</h3>
                            </div>
                            <p className='w-full item-center text-white text-md pl-28  mb-4'>
                                {rev.content.length > 300 ? rev.content.slice(0, 300)+"..." : rev.content}
                            </p>
                        </div>
                    ))}
                </div>
              </div>    


    </div>
  )
}

export default CardPage