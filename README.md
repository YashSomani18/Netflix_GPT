# Netflix GPT

NetflixGPT is an innovative movie recommendation and search platform that leverages the power of The Movie Database (TMDB) and OpenAI's GPT-3 to deliver a user-centric film discovery experience. This project is the culmination of advanced API integrations, responsive front-end development, and state-of-the-art AI capabilities, wrapped up in a seamless user interface designed with ReactJS and Tailwind CSS.

- Create React App
- Configured TailwindCSS 
- Header
- Routing of App
- Login Form
- Sign up Form
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying our app to production
- Create a SignUp User Account
- Implement Sign In user Api
- Created Redux Store with userSlice
- Implemented Sign out 
- Update Profile
- BugFix: Sign up user displayName and profile picture update
- BugFix: if the user is not logged in Redirect /browse to the Login Page and vice-versa
- Unsubscribed to the onAuthStateChanged callback
- Add hardcoded values to the constants file
- Register TMDB API & create an app & get access token
- Get Data from TMDB now playing movies list API
- Custom Hook for Now Playing Movies
- Create movieSlice
- Update Store with movies Data
- Planning for MainContauiner & secondary container
- Fetch Data for Trailer Video
- Update Store with Trailer Video Data
- Embedded the YouTube video and made it autoplay and mute
- Tailwind Classes to make Main Container look awesome
- Build Secondary Component
- Build Movie List
- build Movie Card
- TMDB Image CDN URL
- Made the Browsre page amazing with Tailwind CSS
- usePopularMovies Custom hook
- GPT Search Page
- GPT Search Bar
- (BONUS) Multi-language Feature in our App)
- Get Open AI API Key 
- Gpt Search API Call
- fetched gptMoviesSuggestions from TMDB
- created gptSlice and added data
- Reused Movie List component to make a movie suggestion container
- Memoization
- Added .env file
- Adding .env file to gitignore
- Made our Site Responsive

Features
Real-time Movie Data: Integration with TMDB API to fetch the latest movie information, ensuring users have access to the most current films and data.
Advanced Search: Incorporation of OpenAI's GPT-3 to provide intuitive movie suggestions based on natural language queries, offering a smarter search experience.
Multi-language Support: Catering to a global audience with the ability to interact with the platform in multiple languages.
Responsive Design: A mobile-first, responsive design approach ensuring a consistent and engaging user experience across all devices.
Secure Authentication: Implementation of Firebase for robust user authentication, protecting user data and personalizing the experience.
State Management: Utilization of Redux for efficient state management across the application, enhancing performance and maintainability.



Technologies Used
ReactJs
Redux
Tailwind CSS
TMDB API
OpenAI GPT API
Firebase
Project Setup
To get started with NetflixGPT, ensure you have Node.js installed on your system. Then, follow these steps:

Clone the repository to your local machine.
Navigate to the project directory and install dependencies with npm install.
Create a .env file in the root of the project and add your TMDB and OpenAI API keys as follows:
REACT_APP_TMDB_API_KEY='your_tmdb_api_key'
REACT_APP_OPENAI_API_KEY='your_openai_api_key'
Start the development server with npm start. The application will launch in your default web browser.


Acknowledgments
TMDB for providing a comprehensive API for movie data.
OpenAI for their cutting-edge language processing API.
Firebase for secure and straightforward user authentication.
The React and Redux communities for continuous support and inspiration.
