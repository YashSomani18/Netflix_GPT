import { useSelector } from "react-redux";
import VideoBackground from "../components/VideoBackground";
import VideoTitle from "../components/VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies === null) return;

  const mainMovie = movies[0];
  // console.log(movies);

  const { original_title, overview ,id} = mainMovie;

  return (
    <div>
      <VideoTitle title = {original_title} overview={overview}/>
      <VideoBackground movieId={id}/>
    </div>
  );
};

export default MainContainer;
