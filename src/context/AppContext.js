import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";



export const AppContext = createContext();
const API_KEY = "d96392b0ad7e22f0d27a748d2469a642";
export default function AppContextProvider({children}){
    const [loading, setLoading] = useState(false);
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [movie, setMovies] = useState([]);
    const [category, setCategory] = useState("popular");
    const [movieid, setMovieId] = useState("700391")
    const [path, setPath] = useState("")

    const [movieName, setMovieName] = useState("");
    // console.log(category);

    // function movieHandler(id){
    //     setMovies(id)
    //     // console.log(id)
    // }


    
    const value = {
        loading,
        setLoading,
        trendingMovies,
        setCategory,
        category,
        movieid,
        setMovieId,
        setMovies,
        movie,
        path,
        setPath,
        movieName,
        setMovieName
    };
    
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}