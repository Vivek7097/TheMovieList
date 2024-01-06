import React from 'react'
import HeroSection from '../components/HeroSection'
import Card from '../components/Card'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../App.css'
import useFetch from '../useFetch';
import Spinner from '../components/Spinner';
import { AppContext } from '../context/AppContext'
import { useContext } from 'react';
import { Link} from 'react-router-dom'


const Home = (props) => {
    const{setCategory} = useContext(AppContext)
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 6,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

      const url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=d96392b0ad7e22f0d27a748d2469a642';
      const{data, loading, error} = useFetch(url);
      if(loading){
        return <Spinner/>;
      }

      // const { trendingMovies} = useContext(AppContext);
      // const url1 = 'https://api.themoviedb.org/3/movie/upcoming?api_key=d96392b0ad7e22f0d27a748d2469a642';
      // const{data2, loading1, error1} = useFetch(url1);

  return (
    <div className='bg-black'>
        <HeroSection/>
        {/* popular section */}
        <div>
            <div className='flex justify-between items-center w-10/12 mx-auto'>
                <h1 
                className='font-bold  my-3 text-white text-[1.8rem] uppercase'>
                    Popular</h1>
                <Link to={"/movie/popular"} onClick={()=>{
                  setCategory("popular");
                  // fetchPageData()
            }}
                className='text-white font-semibold mr-2'    >More</Link>
            </div>
            <Carousel
                className='w-10/12 mx-auto flex pb-10'
                itemClass="my-carousel-item"
                arrows={true}
                swipeable={true}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                keyBoardControl={true}
                customTransition="all .2"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={[ "mobile"]}
                // itemClass="carousel-item-padding-80-px"
                
                >
                {
                    props.data.map( (movie,index) => (
                        <div key={index}>
                            <Card movie={movie}  />
                        </div>

                    ))
                }
            </Carousel>
        </div>
        {/* UpComing */}

        <div>
            <div className='flex justify-between items-center w-10/12 mx-auto'>
                <h1 
                className='font-bold  my-3 text-white text-[1.8rem] uppercase'>
                    upcoming</h1>
                    <Link to={"/movie/upcoming"} onClick={()=>{
                  setCategory("upcoming");
                  // fetchPageData();
                   }}
                   className='text-white font-semibold mr-2'>
                   More</Link>
            </div>
            <Carousel
                className='w-10/12 mx-auto flex pb-10'
                itemClass="my-carousel-item"
                arrows={true}
                swipeable={true}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                keyBoardControl={true}
                customTransition="all .2"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={[ "mobile"]}
                // itemClass="carousel-item-padding-80-px"
                
                >
                {
                    props.data2.map( (movie,index) => (
                        <div key={index}>
                            <Card movie={movie}  />
                        </div>

                    ))
                }
            </Carousel>
        </div>
        
        {/* Top rated section */}
        <div>
            <div className='flex justify-between items-center w-10/12 mx-auto'>
                    <h1 
                    className='font-bold  my-3 text-white text-[1.8rem] uppercase'>
                        Top Rated</h1>
                        <Link  to={"/movie/top_rated" } onClick={()=>{
                        setCategory("top_rated");
                    }}
                    className='text-white font-semibold mr-2'>
                   More</Link>
            </div>
            <Carousel
                className='w-10/12 mx-auto flex pb-10'
                itemClass="my-carousel-item"
                arrows={true}
                swipeable={true}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                keyBoardControl={true}
                customTransition="all .2"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={[ "mobile"]}
                // itemClass="carousel-item-padding-80-px"
                
                >
                {
                    data.map( (movie,index) => (
                        <div key={index}>
                            <Card movie={movie}  />
                        </div>

                    ))
                }
            </Carousel>
        </div>
    </div>
  )
}

export default Home