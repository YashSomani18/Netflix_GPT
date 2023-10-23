import { BG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <>
      <div className="absolute inset-0">
        <img className="h-screen w-full object-cover" src={BG_URL} alt="logo" />
      </div>
      <div className="absolute inset-0">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};
export default GptSearch;
