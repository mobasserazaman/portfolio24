export const aboutMe = `I am a diligent and well ordered graduate with a Software Engineering (Faculty of Science) degree from McGill University.

    In the past couple of years, I have invested a consistent amount of time and effort in picking up new technical skills, enhancing leadership and teamwork skills and meeting deadlines.
   
    During my time in McGill I had the opportunity to work on several individual and group projects. Through these projects I gained exposure to some of the most widely used programming languages such as C++, Java, Python and JavaScript. I have developed strong communication skills through working with a diverse group of people and teams throughout my programme duration. As a team, we had to handle unanticipated hurdles, communicate and coordinate to avoid clutter, schedule tasks and come up with an end product before the deadline. The aforementioned tasks, efforts and skills have prepared us to perform in an office environment. During my years at McGill, I have invested a great deal of my time in brainstorming ideas and solutions to coding and designing projects from scratch and managing a group of designers towards a successful completion.

    I have worked as a Front End Software Engineer at HubSpot from April to November 2022 where I got the opportunity to learn about React and its different libraries. I worked in a team of 4 which worked on the HubSpot Chrome and Edge extensions. Together we developed new features, maintained existing codebase and worked on client issues.
    
    I am a fast learner who is always keen on picking up new skills and gaining knowledge. I believe I would be a useful addition to any company where I can participate, share knowledge and contribute to the growth of my team.

    `

export const myprojects = [
    {
        title: "McGill School of Computer Science Website",
        description: 
`Developed a complete website with over 70% of the code base built from scratch
Designed a responsive and interactive front-end using HTML5, CSS and JS as a minimum
Set up a working back-end using PHP to support the dynamic update of contents and MySQL to build an on-server database, and later to connect to it
Utilized XAMPP to create a local web server on the computer to fast-track development and make local testing of the codes feasible. Used SSH to transfer files to the McGill SOCS web server
Collaborated with teammates to choose technology stack, divide tasks, design, and document the project`,
        year: "Fall 2020"
    },
    {
        title: "Simplified Link State Routing Protocol with Java Socket Programming",
        description: 
`Designed a pure user-space program which simulates the major functionalities of a routing device running a simplified Link State Routing protocol.
Implemented a router class and mapped the ‘Process IP’ and ‘Process Port’ of each program instance to a ‘simulated IP address’ attribute used to identify the router in the simulated network space.
Added a Link State Database which is a map from the router's IP address to the link state description which is originated by the corresponding router and Link State Advertisement structures that summarize the latest link state information of the router.
Developed a command line-based terminal interface for the router to allow the user to input the following commands: attach, start, connect, disconnect, detect, neighbours, quit. Some of these commands trigger Link, State Database synchronization and update.
Built a weighted graph representing the topology of the network and used Dijkstra’s algorithm to find the shortest path between routers.
Implemented a message class that defines the message format transmission among routers.`,
        year: "Winter 2020"
    },
    {
        title: "Operating System using C",
        description:
`prog3, run SCRIPT.TXT etcetera.
Implemented the following data structures: CPU, PCB, ready queue, and RAM and the following algorithms:scheduler, task switch, and basic memory management.
Added OS Boot Sequence (Prepare the Backing Store and Prepare RAM for paging) to create necessary OS structures.
Added Memory Manager (Launcher, PCB modifications, Page Fault, Task Switch) to handle memory allocation for processes.
Implemented Partition Table, File Allocation Table, Block buffer along with functions such as partition, mount, read/writeBlock etcetera to add some of the functionalities of a File System to the OS.
Wrote a public IOScheduler function to handle up to 10 requests from exec programs.`,
        year: "Winter 2019"
    },
    {
        title: "Portfolio using React",
        description:
`Developed a complete portfolio using ReactJS, JSX and Bootstrap.
Designed a responsive and interactive front-end using HTML5, CSS and JS as a minimum.
Added form feature and email option.
Hosted the site using Netlify.`,
        year: "Fall 2021"
    },
    {
        title:"Logistic Regression and Naive Bayes",
        description:
`Implemented two classification techniques in Python —logistic regression and naive Bayes from scratch on four distinct datasets and compared the accuracy of both classification techniques on the four datasets.
Cleaned the datasets by removing any data with missing or malformed features and used one-hot encoding for categorical variables.
Computed basic statistics such as distributions of the positive vs. negative classes, distributions of some of the numerical features, correlations between the features etcetera to get a better understanding of the data.
Implemented a script to run k-fold cross validation.
Compared the accuracy of naive Bayes and logistic regression on the four datasets.
Compared the accuracy of the two models as a function of the size of the dataset (by controlling the training size).`,
        year: "Winter 2020"
    }
]