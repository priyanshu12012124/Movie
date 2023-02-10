import React, {useEffect,useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'
function SearchResult() {
    const {movie}=useParams();
    const [data, setdata] = useState();

    const url=`https://imdb-api.com/en/API/Search/k_gg0u5gev/${movie}`
    
    useEffect(() => {
    async function fun(){
        const result = await axios.get(url)
        setdata(result.data.results)
     }
     fun();
    }, [url])
    
    console.log(data)


  return (
    <div className="movieCards">
      {
         data?.map((movie)=>
         {
         return(
        <div className="movieCard">
          
             <Link classNmae="searchLink" to={`/movie/${movie.id}`}>
                <img alt="img" src={movie.image}className="searchImg"/>
                <h2 className="searchTitle">{movie.title}</h2>
             </Link>
        </div>
)
         }) }
    </div>
  )
}

export default SearchResult