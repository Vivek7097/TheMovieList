import React, { useContext} from 'react'
import { Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext'

const NavBar = () => {
  const{movieName, setMovieName } = useContext(AppContext)
  const navigate = useNavigate();

  return (
    <div className='w-[90%] mx-auto'>
        {/* search box */}
        <div className='flex flex-col gap-4 md:flex-row justify-between py-5 '>
            <Link to={"/"}>
                <h1 className='text-4xl text-white font-extrabold'>TheMovieList</h1>
            </Link>
            <form 
              className='md:flex justify-center items-center'
              onSubmit={(e) => {
                e.preventDefault();
                // Navigate to the search list page
                navigate("/movie/searchlist");
              }}
            >
              <input 
                type='text' 
                value={movieName} 
                onChange={(e) => {setMovieName(e.target.value)}} 
                placeholder='Search' 
                className='bg-gray-800 text-white rounded-full px-2 md:px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent'
              />
              <button 
                type='submit' 
                className='bg-green-500 text-white rounded-full px-4 py-2 ml-2 hover:bg-green-600 transition-all duration-200 ease-linear'
              >
                Search
              </button>  
            </form>
        </div>
        
    </div>
  )
}

export default NavBar