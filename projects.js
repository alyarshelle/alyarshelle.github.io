// Array of project data

const projects = [
    {
        title: "SummitView",
        progress: "IN PROGRESS",
        description: "My movie watchlist site allowing you to register and save your favorite\n" +
                     "or wanting to watch movies so that you have them all in one place!",
        languages: "Programming Languages: HTML, CSS, Python, Flask",                     
        image: "/images/SummitView.png", // Replace with your image path
        link: "https://github.com/alyarshelle/MovieWatchlist",
        videoLink: "/videos/SummitView_Demo.mp4" // Use a relative path for the video
    },
    {
        title: "IMBD-Replica: Movie Database UI",
        description: "This project develops a simple user interface (UI) to interact\n" +
                     "with a movie database. The UI allows users to execute and\n" +
                     "display results for various queries, providing an intuitive\n" +
                     "and user-friendly experience.",
        languages: "Programming Languages: HTML, CSS, Javascript, PHP",                     
        image: "/images/IMDB.png", // Replace with your image path
        link: "https://github.com/alyarshelle/IMBD-Replica",
        videoLink: "/videos/IMDB_Demo.mp4" // Use a relative path for the video
    },
    {
        title: "Recipe Website",
        progress: "IN PROGRESS",
        description: "My Recipe Website provides a user-friendly interface where users\n"+
                     "can explore a diverse range of recipes. Each recipe page includes\n"+
                     "detailed information such as ingredients, instructions, and nutritional\n"+
                     "facts, ensuring that users have all the information they need to create\n"+
                     "delicious meals",
        languages: "Programming Languages: HTML, CSS, Javascript, React, Node.js, Express.js",                     
        image: "/images/RecipeSite.png", // Replace with your image path
        link: "https://github.com/alyarshelle/RecipeSite",
        videoLink: "/videos/RecipeSite.mp4" // Use a relative path for the videos
    },
    {
        title: "Wordly",
        description: "This project replicates the popular word-guessing game, Wordle,\n"+
                     "with some custom features and a clean interface. Test your vocabulary\n"+
                     "and enjoy the challenge of guessing a 5-letter word within 6 attempts.",
        languages: "Programming Languages: HTML, CSS, Javascript",                     
        image: "/images/Wordly.png", // Replace with your image path
        link: "https://github.com/alyarshelle/Alya-Portfolio/tree/main/Wordle-Clone",
        playLink: "wordlePage.html" // Use a relative path for the video
    },
    {
        title: "Bloggy",
        description: "A simple blog website allowing users to post anything they like with\n" +
                     "persistant storage",
        languages: "Programming Languages: HTML, CSS, Python, Flask",                     
        image: "/images/Bloggy.png", // Replace with your image path
        link: "https://github.com/alyarshelle/BlogWebsite",
        videoLink: "/videos/Bloggy_Demo.mp4" // Use a relative path for the video
    },
    {
        title: "To Do App",
        progress: "IN PROGRESS",
        description: "A take on the to do app allowing users to create tasks, date them,\n"+
                     "set reminders, and more!",
        languages: "Programming Languages: HTML, CSS, Javascript",                     
        image: "/images/ToDo.png", // Replace with your image path
        link: "https://github.com/alyarshelle/Alya-Portfolio/tree/main/ToDoApp",
        visitLink: "toDoApp.html" // Use a relative path for the video
    },
    {
        title: "Snake Game",
        description: "A classic rendition of the Snake Game.",
        languages: "Programming Languages: Python, Pygame",                     
        image: "/images/SnakeGame.png", // Replace with your image path
        link: "https://github.com/alyarshelle/Alya-Portfolio/blob/main/snakeGame%2Cpy",
        videoLink: "/videos/snakeGame_Demo.mp4" // Use a relative path for the video
    },
    {
        title: "Pengu",
        description: "My adorable penguin you were greeted to on my Welcome Page. You\n" +
                     "can check out the full scene here!",
        languages: "Programming Languages: HTML, CSS",                     
        image: "/images/Pengu.png", // Replace with your image path
        link: "https://github.com/alyarshelle/Alya-Portfolio/tree/main/Pengu",
        visitLink: "penguin.html" // Use a relative path for the video
    },
];

// Component to display each project card
const ProjectCard = ({ title, progress, description, languages, image, link, videoLink, playLink, visitLink }) => (
    <div className="card">
        <img src={image} alt={title} className="card-image"/>
        <div className="card-content">
            <h3>{title}</h3>
            <p id="progress">{progress}</p>
            <b>{languages}</b>
            <p>{description}</p>
            <div className="button-container">
                <a href={link} className="card-button github-button" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                {videoLink && (
                    <a href="#" onClick={(e) => { e.preventDefault(); openModal(videoLink); }} className="card-button video-button">Video Demo</a>
                )}
                {playLink && (
                    <a href={playLink} className="card-button play-button" target="_blank" rel="noopener noreferrer">Play Now</a>
                )}
                {visitLink && (
                    <a href={visitLink} className="card-button visit-button" target="_blank" rel="noopener noreferrer">Check It Out!</a>
                )}
            </div>
        </div>
    </div>
);

// Function to open the video modal
const openModal = (videoSrc) => {
    const modal = document.getElementById('videoModal');
    console.log('openModal called with:', videoSrc);
    const videoElement = document.getElementById('modalVideo');
    videoElement.src = videoSrc;
    modal.style.display = 'flex'; // Use 'flex' for centering
    document.body.style.overflow = 'hidden'; // Disable body scroll
};

// Function to close the video modal
const closeModal = () => {
    const modal = document.getElementById('videoModal');
    const videoElement = document.getElementById('modalVideo');
    videoElement.src = ''; // Stop video playback
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable body scroll
};


// Main Projects component
const Projects = () => (
    <div className="projects-container">
        <h1>Projects</h1>
        <div id="info">
            <p>Welcome to my project showcase! Here, you'll find a selection of my work
               that reflects my journey as a developer as each project represents a step 
               in my growth. Dive in and explore how I've brought ideas to life through 
               code! Feel free to check out all my projects on my GitHub!</p>
        </div>

        <div className="card-grid">
            {projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    title={project.title}
                    progress={project.progress}
                    description={project.description}
                    image={project.image}
                    languages={project.languages}
                    link={project.link}
                    videoLink={project.videoLink}
                    playLink={project.playLink}
                    visitLink={project.visitLink}
                />
            ))}
        </div>
        {/* Video Modal */}
        <div id="videoModal" className=" location modal">
            <span className="close" onClick={closeModal}>&times;</span>
            <video id="modalVideo" width="80%" controls></video>
        </div>
    </div>
);

// Render the Projects component to the #root element
ReactDOM.render(<Projects />, document.getElementById('root'));
