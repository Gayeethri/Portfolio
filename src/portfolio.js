/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Gayeethri Polamreddy",
  title: "Hi all, I'm Gayeethri",
  subTitle: emoji(
    "Passionate Computer Science Master's graduate, I'm diving into the world of coding and algorithms, eager to shape the future through technology."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Gayeethri",
  linkedin: "https://www.linkedin.com/in/polamreddy-gayeethri/",
  gmail: "gayeethripolamreddy10@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Experienced software developer with 2+ years of hands-on expertise in creating innovative solutions. Skilled in application design, testing, and using data visualization tools. Proficient in Agile methodologies and various coding languages, dedicated to delivering effective solutions that meet business needs.",
  skills: [
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fas fa-terminal"
    },
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "OOPs",
      fontAwesomeClassname: "far fa-user"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University at Buffalo",
      logo: require("./assets/images/ub logo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2022 - December 2023",
      desc: "CourseWork.",
      descBullets: [
        "Data Model Query language, Analysis of Algorithms, Data Intensive Computing, Machine learning, Natural language Processing",
        "Modern Network Concepts, Statistical Data Mining"
      ]
    },
    {
      schoolName: "K L University",
      logo: require("./assets/images/kl logo.jpeg"),
      subHeader: "Bachelor of Science in Computer Science",
      desc: "Took courses about Software Engineering, Object Oriented Programming, Operating Systems, ...",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Student Assistant",
      company: "University at Buffalo",
      companylogo: require("./assets/images/bulls.jpeg"),
      date: "Jan 2023 – Dec 2023",
      descBullets: [
        "Utilized HTML, CSS, and JS to enhance the website's UI, including the Notebook Viewer for easy access to Poet Marianne Moore's works.",
         "Employed XSLT, XQuery, and XPath for data manipulation and organization of Marianne Moore's works.",
         "Streamlined data organization, resulting in a 20% reduction in processing time and improved data accessibility.",
        "Applied Python for backend development and automation, Implemented OCR tools for digitization of Moore's works.",
         "Utilized Timeline JS for creating interactive timelines on the website."
      ]
    },
    {
      role: "Software Developer Intern",
      company: "Cybervigilance",
      companylogo: require("./assets/images/cybervigilancellc_logo.jpeg"),
      date: "May 2023 – Aug 2023",
      descBullets: [
            "Led end-to-end SDLC for three applications, using Java, Selenium, JMeter, and TestNG to revamp automation framework, reducing regression testing time by 50%, enhancing team productivity.",
            "Enhanced UX by designing SPA using ReactJS, ES6, and React-Router, creating seamless navigation and improving user interaction.",
            "Spearheaded performance testing initiatives with JMeter and Selenium, achieving 80% code coverage, implementing Docker and Kubernetes for deployment, and optimizing CI/CD pipelines with Jenkins.",
            "Innovated API testing by adopting JMeter, automating post-testing tasks with Python, and integrating AWS DynamoDB and Document DB for MongoDB, quadrupling testing efficiency."
      ]
    },
    {
      role: "Software Developer",
      company: "Optum",
      companylogo: require("./assets/images/Artha net logo.jpeg"),
      date: "June 2019 – June 2022",
      descBullets: [
        "Spearheaded the design and implementation of 10+ complex systems and projects, collaborating seamlessly with IT and business teams, resulting in a 30% increase in operational efficiency.",
         "Facilitated cross-divisional collaboration by actively engaging with 5+ enterprise architects in design and code reviews, leading to a 25% reduction in time-to-resolution for critical issues.",
        "Developed and deployed 15+ API, database programming, and micro-services solutions, integrating telemetry solutions and establishing CI/CD pipelines, enhancing system reliability by 40%.",
        "Ensured software quality by conducting rigorous validation processes, identifying, and rectifying defects pre-deployment, achieving a 95% defect-free deployment rate.",
        "Coordinated with business and IT stakeholders to deliver 20+ product features, aligning closely with business objectives and fostering a culture of innovation and continuous improvement. Created and updated non-technical and technical documentation for evolving products to ensure regulatory compliance."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const projects = {
  title: "Academic Projects",
  projects: [
    {
      image: require("./assets/images/airport l.jpeg"),
    projectName: "Airport Mangement System",
    projectDesc: (
      <ul>
        <li><b>Skills/Technologies Used: </b> React.js, Node.js, Bootstrap, MongoDB, Express.js </li>
        <li><b>Brief Description: </b>The Airport Management System optimizes operations through React.js and Node.js, deployed on AWS EC2, leveraging Kafka for real-time communication and Redis for peak performance, ensuring seamless scalability and reliability..</li>
      </ul>
),
    footerLink: [
      {
        name: "Visit Github Repo",
        url: "https://github.com/Gayeethri/air_port_management_system.git"
      }
      //  you can add extra buttons here.
    ]
    },
    {
      image: require("./assets/images/stackoverflow logo.png"),
    projectName: "Stack Overflow",
    projectDesc: (
      <ul>
        <li><b>Skills/Technologies Used: </b> React.js, Node.js, MongoDB, Express.js, Redux, Kafka, MySQL, Redis, AWS, MOCHA </li>
        <li><b>Brief Description: </b>Revolutionizing with a Stack Overflow-inspired model,This project leverages a state-of-the-art 3-tier architecture featuring React.js, Redux, Kafka, Node.js, MySQL, MongoDB, and Cloudinary, ensuring unparalleled scalability and performance validated through exhaustive testing..</li>
      </ul>
    ),
    footerLink: [
      {
        name: "Visit Github Repo",
        url: "https://github.com/Gayeethri/Stackoverflow.git"
      }
    ]
    },
    {
      image: require("./assets/images/crop logo.jpeg"),
      projectName: "O-my-natural",
      projectDesc: (
        <ul>
          <li><b>Skills/Technologies Used: </b> Python, HTML, CSS, Javascript, git, NumPy, Pandas, matplotlib, PyTorch </li>
          <li><b>Brief Description: </b>Developed a website that utilizes machine learning models to recommend the best crops for a given soil type, provide fertilizer recommendations based on soil data and the type of crop being grown, and identify and treat plant diseases.</li>
        </ul>
      ),
      footerLink: [
        {
          name: "Visit Github Repo",
          url: "https://github.com/Gayeethri/O-my-natural.git"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const personalProjects = {
  title: "Personal Projects",
  projects: [
    {
      image: require("./assets/images/online food.jpeg"),
      projectName: "Online Food Ordering System",
      projectDesc: (
          <ul>
            <li><b>Skills/Technologies Used:</b> React.js, Node.js, Express.js, MongoDB, Redux </li>
            <li><b>Brief Description: </b>Designed and implemented an online food ordering system using React.js for the frontend and Node.js with Express.js for the backend. Utilized MongoDB for database management and Redux for state management, ensuring efficient order processing and seamless user experience.</li>
          </ul>
       ),
    },
    {
      image: require("./assets/images/inventory-management-system.png"),
      projectName: "Inventory Management System",
      projectDesc: (
          <ul>
            <li><b>Skills/Technologies Used:</b>Java, OOPs, JSP, MySQL, Tomcat </li>
            <li><b>Brief Description: </b> Developed an inventory management system to track and optimize stock levels, streamline procurement processes, and manage warehouse operations. Implemented using Java, OOPs principles, JSP for dynamic web pages, MySQL for database management, and Tomcat for server deployment.</li>
          </ul>
       ),
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji(" Certifications 🏆 "),
  subtitle:"",

  achievementsCards: [
    {
      title: "ServiceNow System Administrator",
      subtitle:
        "Proficient in managing and optimizing ServiceNow platforms, ensuring seamless workflow automation and effective IT service management. Skilled in configuring, customizing, and maintaining ServiceNow instances to meet organizational needs and enhance operational efficiency.",
      image: require("./assets/images/servicenow.jpeg"),
      footerLink: [
        {
          name: "View my Certification",
          url: "https://drive.google.com/file/d/1RSOtXyWgqLw5gcW2grDt3OYPxsixYM4F/view?usp=sharing"
        }
      ]
    },
    {
      title: "Introduction to MongoDB",
      subtitle:
        "Utilized MongoDB's data model for efficient data import, mastering CRUD operations and the Aggregation Framework. Employed Atlas and MongoDB Compass to visualize schemas and manage databases effectively. Leveraged real-world scenarios to enhance skills in data analytics and application development, ensuring practical solutions tailored to business requirements.",
      image: require("./assets/images/mongodb logo.png"),
      footerLink: [
        {
          name: "View my Certification",
          url: "https://coursera.org/share/6aa0fd9873e56d7f932a03503a243ace" 
        }
      ]
    },
    {
      title: "Aviatrix Cloud Certified Engineer",
      subtitle: "Multi-Cloud Network Associate certification validates expertise in designing, implementing, and managing multi-cloud network architectures. Demonstrates proficiency in leveraging Aviatrix technologies for seamless connectivity and optimization across diverse cloud environments.",
      image: require("./assets/images/aviatrix_logo.png"),
      footerLink: [
        {name: "View my Certification", url: "https://drive.google.com/file/d/1JLgvKby7c-LyOAhc_d9zApbMQOGnUati/view?usp=sharing"},
      ]
    },
    {
      title: "IBM Data Science",
      subtitle: "In this Professional Certificate learners developed and honed handson skills in Data Science and Machine Learning. Learners started with an orientation of Data Science and its Methodology, became familiar and used a variety of data science tools, learned Python and SQL, performed Data Visualization and Analysis, and created Machine Learning models. In the process they completed several labs and assignments on the cloud including a Capstone Project at the end to apply and demonstrate their knowledge and skills.",
      image: require("./assets/images/IBM_logo_in .jpeg"),
      footerLink: [
        {name: "View my Certification", url:"https://www.coursera.org/account/accomplishments/specialization/certificate/GBYETKVSKYZD"},
      ]
    },
    {
      title: "Google IT Support",
      subtitle:
        "Achieved proficiency through Google IT Support Professional Certificate, mastering essential skills in troubleshooting, networking, system administration, and security. Equipped with hands-on experience and practice-based assessments, I'm primed for entry-level IT support roles, bringing a blend of technical expertise and customer service acumen to the table.",
      image: require("./assets/images/google logo.png"),
      footerLink: [
        {
          name: "View my Certification",
          url: "https://coursera.org/share/6aa0fd9873e56d7f932a03503a243ace" 
        }
      ]
    },
    {
      title: "Introduction to HTML5",
      subtitle:
        "Mastered the fundamentals of HTML5 through specialized training, gaining comprehensive knowledge of its syntax, structure, and features. Certified in HTML5, equipped with the skills to create dynamic and interactive web content, ensuring a solid foundation in modern web development.",
      image: require("./assets/images/MICHIGAN.png"),
      footerLink: [
        {
          name: "View my Certification",
          url: "https://www.coursera.org/account/accomplishments/certificate/46FRZ3FSMFY2" 
        }
      ]
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Thank you for exploring my portfolio. If my work has captured your interest and you'd like to connect, please feel free to reach out to me on LinkedIn or via email at gayeethripolamreddy10@gmail.com. I'm enthusiastic about exploring new opportunities, collaborating on exciting projects, and fostering meaningful connections. I eagerly anticipate hearing from you!",
    number: "+1 7164648105",
  email_address: "gayeethripolamreddy10@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  projects,
  personalProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
