import Home from './component/Home.js'
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SearchResult from './component/SearchResult.js';
import Movie from './component/Movie.js';
import Actor from './component/Actor.js';




function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path:'/search/:movie',
      element:<SearchResult/>,
    },
    {
      path:'/movie/:movieId',
      element:<Movie/>,
    },
    {
      path:'/actor/:actorId',
      element:<Actor/>,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
