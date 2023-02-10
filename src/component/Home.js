import React, { useState } from 'react'
import {Link} from 'react-router-dom'
function Home() {
    const [search, setSearch]=useState();
    console.log(search);

  return (
    <div className="homeBg">
            <div className="home">
                <h1>Search your favourite movie and TV show!.</h1>
                <input  value={search} onChange={(event)=>setSearch(event.target.value)}  type="text" placeholder='Search Movies, Tv shows and more..'/>
                <button type='submit'>
                <Link to={`/search/${search}`}>Search</Link>
               </button>
            </div>
              
    </div>
  )
}

export default Home