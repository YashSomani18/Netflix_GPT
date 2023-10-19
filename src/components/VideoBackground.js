import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";


const VideoBackground = ({ movieId }) => {
  
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);

    useMovieTrailer(movieId);
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?si=CEQ9Ko0QsHF1muRr`}
        title="YouTube video player"
        allow="accelerometer; 
            autoplay; clipboard-write; encrypted-media; gyroscope; 
            picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
