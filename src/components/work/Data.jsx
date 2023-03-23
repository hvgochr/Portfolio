import portfolioPhone from '../../assets/portfolio_phone.png';
import porfolioDesktop from '../../assets/portfolio_desktop.png';
import voteitDesktop from '../../assets/voteit_desktop.png';
import voteitPhone from '../../assets/voteit_phone.png';
import ticketToRideDesktop from '../../assets/tickettoride_desktop.png';

export const projectsData = [
    {
        id: 1,
        title: "Ticket to ride",
        category: "school",
        githubLink: "https://github.com/hvgochr/SAE-Aventuriers-Du-Rail",
        deploymentLink: "",
        description: "The project was to code the board game Ticket to Ride in Java, with a graphical interface created in JavaFX. This board game, which has won several awards, is a strategy game in which players build railways across Europe to connect cities and score points.",
        objectives: ["- Recreate faithfully the rules and mechanics of the board game Ticket to Ride", "- Create an intuitive graphical interface for users, which allows them to visualize the game board and players' actions in real-time", "- Use object-oriented programming to facilitate maintenance and addition of future functionalities."],
        creationProcess: "The creation process was divided into several stages. First, we created the base classes for players, cards, cities, and tracks. Then, we created the game mechanics, such as moving trains, drawing cards, building railways, and calculating points. Once the game mechanics were implemented, we started working on the user interface in JavaFX. We created views for the cards, players, and cities, and linked these views to our game code. Finally, we tested the game to ensure that it was functional and playable.",
        results: "The result is a Ticket to Ride board game in Java with a graphical interface created in JavaFX. The game works perfectly and allows players to play in real-time, with smooth animations and elegant transitions between different views. Users also have the option to choose the number of players. The game was well-received by the professors, who appreciated the fidelity of the original board game mechanics as well as the quality of the graphical interface and the features it offers.",
        phoneScreen: "",
        desktopScreen: ticketToRideDesktop,
    },
    {
        id: 2,
        title: "Vote It",
        category: "school",
        githubLink: "https://github.com/hvgochr/VoteIt",
        deploymentLink: "https://webinfo.iutmontp.univ-montp2.fr/~charradeh/VoteIt/web/frontController.php",
        description: "The Vote It project consisted in creating a web application which was able to manage a large set of questions, answers, and votes, with a user login and registration system. This application was supposed to be coded in HTML, CSS, PHP and JavaScript, and had to use a MySQL database.",
        objectives: ["- Create an intuitive user interface for users, with simple navigation and a clear layout", "- Allow users to create and respond to polls, with custom answer options", "- Allow users to vote for their preferred answers and see the results in real-time", "- Implement a login and registration system for users."],
        creationProcess: "The creation process was divided into several stages. First, we created the MySQL database to store users' questions, answers, and votes. Next, we worked on creating the HTML pages and CSS styles for the user interface. We used PHP to process user requests and retrieve data from the MySQL database. We also used JavaScript to add interactive features, such as real-time result charts. Finally, we tested the application to ensure that it was functional and user-friendly.",
        results: "The result is a web application, Vote It, which allows users to create and respond to polls, vote for their preferred answers, and see real-time results. The user interface is simple and intuitive, with clear navigation and an elegant layout. Users can also log in and register to access additional features, such as creating custom polls. The application was well-received by the teachers, who appreciated its clarity and ease of use.",
        phoneScreen: voteitPhone,
        desktopScreen: voteitDesktop,
    },
    {
        id: 3,
        title: "Riot Gamble",
        category: "personal",
        githubLink: "https://github.com/hvgochr/",
        deploymentLink: "",
        description: "The project consisted in creating a Discord bot using Node.js that uses the Discord API, Riot Games API, and the HTTP client axios. This bot allows users to bet on their League of Legends games, as well as their friends' games. The currency used for the bets is fictional and is stored in a MongoDB database.",
        objectives: ["- Create a Discord bot capable of communicating with users and supporting League of Legends betting", "- Begin learning JavaScript, and more specifically Node.js", "- Use Riot Games' API to retrieve match data and game results", "- Store user betting information on a MongoDB database", "- Allow users to view match results and betting winnings"],
        creationProcess: "The creation process was divided into several stages. First, I worked on creating the Discord bot and its user interface. I used the Discord API to handle interactions with users, allowing them to bet on League of Legends matches. Then, I used the Riot Games API to retrieve match data and results. I also used the axios HTTP client to make HTTP requests to retrieve match information. I then stored user betting information on a MongoDB database, which allowed me to effectively manage bets and provide accurate and quick results. Finally, I tested the Discord bot to ensure that it was functional and that users could easily place bets and see match results.",
        results: "The result is a Node.js Discord bot that allows users to bet on their League of Legends games. The bot uses the Riot Games API to retrieve match information and results, and stores user betting information on a MongoDB database. Users can easily place bets, track results, and see their winnings. I was the sole coder for this project, and my friends have welcomed and enjoyed the bot's ease of use and user-friendliness. There are still many features that I would like to add, such as the ability to bet on the number of deaths, eliminations, assists, being able to check a player's profile, or even implement the same principle on Valorant and even Teamfight Tactics.",
        phoneScreen: "",
        desktopScreen: "",
    },
    {
        id: 4,
        title: "Portfolio",
        category: "personal",
        githubLink: "https://github.com/hvgochr/portfolio",
        deploymentLink: "https://charradehugo.com",
        description: "The project consisted in creating an online portfolio to showcase my web development projects and skills. The website was built using ReactJS and utilizes various technologies such as CSS, HTML, and JavaScript. The main goal of this project was to learn ReactJS and improve my web development skills.",
        objectives: ["- Creating an online portfolio to showcase my web development projects and skills", "- Using ReactJS to code the website", "- Improving my skills in CSS, HTML, and JavaScript", "- Providing a user-friendly and easy-to-navigate interface", "- Highlighting my web development projects and skills"],
        creationProcess: "The creation process was divided into several stages. Firstly, I worked on designing the website using Figma to create a clear and user-friendly design. Next, I used ReactJS to code the website and utilized various technologies such as CSS, HTML, and JavaScript to enhance the user interface and functionality. I also worked on implementing an easy-to-use navigation so that visitors could easily browse through my portfolio and web development skills. Finally, I tested the website to ensure that it was functional and visitors could easily navigate and discover my projects and skills.",
        results: "The result is a professional website coded in ReactJS, which showcases my projects and skills as a Computer Science student. The website is easy to navigate and use, with a clear layout and contact features. I have received positive feedback from my close friends and family who appreciated the website's design and presentation of my projects, and I hope it will also appeal to its visitors.",
        phoneScreen: portfolioPhone,
        desktopScreen: porfolioDesktop,
    },
];

export const projectsNav = [
    {
        name: "all",
    },
    {
        name: "school",
    },
    {
        name: "personal",
    },
];
