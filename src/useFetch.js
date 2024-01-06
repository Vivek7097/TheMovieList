import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useFetch = (url) => {
    const[data, setData] = useState([]);
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios
          .get(url)
          .then((response) => {
            console.log(response.data.results);
            setData(response.data.results);
          })
          .catch((err) => {
            setError(err);
          })
          .finally(() => {setLoading(false);})
    },[url]);


  return {data, loading, error};
}

export default useFetch