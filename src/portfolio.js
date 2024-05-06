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
    "https://drive.google.com/file/d/1ek7D1pwdRu3MRbdoh2OQo85m1d4mtjeq/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: false // Set false to hide this section, defaults to true
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
      date: "Sep 2022 – Dec 2023",
      descBullets: [
        "Transformed website functionality by enhancing UI with JS(ReactJS), streamlining data manipulation using XSLT, XQuery, and XPath .",
         "Utilized machine learning models for OCR (Optical Character Recognition) recognition, developed in Python, to digitize Marianne Moore's works.",
         
      ]
    },
    {
      role: "Software Developer Intern",
      company: "Cybervigilance",
      companylogo: require("./assets/images/cybervigilancellc_logo.jpeg"),
      date: "May 2023 – Aug 2023",
      descBullets: [
            "Collaborated with a senior developer to meticulously optimize JavaScript, HTML, and CSS on the website front-end, which significantly contributed to a 25% increase in website traffic.",
            "Achieved a 10% reduction in page load times by optimizing front-end assets through image compression and code minification, improving user experience and SEO ranking"
      ]
    },
    {
      role: "Software Developer",
      company: "Optum",
      companylogo: require("./assets/images/Optum.png"),
      date: "May 2019 – June 2022",
      descBullets: [
        "Developed over 20 features for the Enhanced Payment Integrity Compass product.",
         "Upgraded the calculation engine to handle complex payer contracts and achieve 90% accuracy in calculating healthcare claims reimbursement.",
      ]
    },   
    {
      role: "Software Developer Intern",
      company: "Optum",
      companylogo: require("./assets/images/Optum.png"),
      date: "May 2018 – April 2019",
      descBullets: [
        "Involved in requirements gathering, analysis, design, development, and unit testing of applications.",
        "Proficient in deploying the application to AWS EBS, monitoring logs with AWS CloudWatch, testing application performance with JMeter, and ensuring 75% efficiency."
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
      image: require("./assets/images/crop logo.jpeg"),
      projectName: "Hallucination in Chat-bots",
      projectDesc: (
        <ul>
          <li><b>Skills/Technologies Used: </b> Python, NLTK, ML Models, NumPy, Pandas </li>
          <li><b>Brief Description: </b>Investigated and addressed the issue of hallucinations in chatbot responses, fine-tuned the model for reduced hallucination, resulting in responses up to 82% hallucination-free, contributing to heightened chat-bot reliability. Formulated a robust transformer model built in RoBERTa for hallucination detection and VRM classification in chat-bot responses and achieved accuracy of 87.4%</li>
        </ul>
      ),
      footerLink: [
        {
          name: "Visit Github Repo",
          url: "https://github.com/Gayeethri/O-my-natural.git"
        }
      ]
    },
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
      subtitle: (
           <div>
            <p>Proficient in managing and optimizing ServiceNow platforms, ensuring seamless workflow automation and effective IT service management. Skilled in configuring, customizing, and maintaining ServiceNow instances to meet organizational needs and enhance operational efficiency.</p> 
            <p><b><a href ="https://drive.google.com/file/d/1RSOtXyWgqLw5gcW2grDt3OYPxsixYM4F/view?usp=sharing" target="_blank" rel="noreferrer">View my Certificate</a></b></p>
          </div>
      ),
      image: require("./assets/images/servicenow.jpeg")
    },
    {
      title: "Introduction to MongoDB",
      subtitle: (
           <div>
            <p>Utilized MongoDB's data model for efficient data import, mastering CRUD operations and the Aggregation Framework. Employed Atlas and MongoDB Compass to visualize schemas and manage databases effectively. Leveraged real-world scenarios to enhance skills in data analytics and application development, ensuring practical solutions tailored to business requirements.</p> 
            <p><b><a href ="https://coursera.org/share/6aa0fd9873e56d7f932a03503a243ace" target="_blank" rel="noreferrer">View my Certificate</a></b></p>
          </div>
      ),
      image: require("./assets/images/mongodb logo.png")
    },
    {
      title: "Aviatrix Cloud Certified Engineer",
      subtitle: (
           <div>
            <p>Multi-Cloud Network Associate certification validates expertise in designing, implementing, and managing multi-cloud network architectures. Demonstrates proficiency in leveraging Aviatrix technologies for seamless connectivity and optimization across diverse cloud environments.</p> 
            <p><b><a href ="https://drive.google.com/file/d/1JLgvKby7c-LyOAhc_d9zApbMQOGnUati/view?usp=sharing" target="_blank" rel="noreferrer">View my Certificate</a></b></p>
          </div>
      ),
      image: require("./assets/images/aviatrix_logo.png")
    },
    {
      title: "AIBM Data Science",
      subtitle: (
           <div>
            <p>In this Professional Certificate learners developed and honed handson skills in Data Science and Machine Learning. Learners started with an orientation of Data Science and its Methodology, became familiar and used a variety of data science tools, learned Python and SQL, performed Data Visualization and Analysis, and created Machine Learning models. In the process they completed several labs and assignments on the cloud including a Capstone Project at the end to apply and demonstrate their knowledge and skills.</p> 
            <p><b><a href ="https://www.coursera.org/account/accomplishments/specialization/certificate/GBYETKVSKYZD" target="_blank" rel="noreferrer">View my Certificate</a></b></p>
          </div>
      ),
      image: require("./assets/images/IBM_logo_in .jpeg")
    },
    {
      title: "Google IT Support",
      subtitle: (
           <div>
            <p>Achieved proficiency through Google IT Support Professional Certificate, mastering essential skills in troubleshooting, networking, system administration, and security. Equipped with hands-on experience and practice-based assessments, I'm primed for entry-level IT support roles, bringing a blend of technical expertise and customer service acumen to the table.</p> 
            <p><b><a href ="https://www.coursera.org/account/accomplishments/certificate/XLG6BCRA82S7" target="_blank" rel="noreferrer">View my Certificate</a></b></p>
          </div>
      ),
      image: require("./assets/images/google logo.png")
    },
    {
      title: "Introduction to HTML5",
      subtitle: (
           <div>
            <p>Mastered the fundamentals of HTML5 through specialized training, gaining comprehensive knowledge of its syntax, structure, and features. Certified in HTML5, equipped with the skills to create dynamic and interactive web content, ensuring a solid foundation in modern web development.</p> 
            <p><b><a href ="https://www.coursera.org/account/accomplishments/certificate/46FRZ3FSMFY2" target="_blank" rel="noreferrer">View my Certificate</a></b></p>
          </div>
      ),
      image: require("./assets/images/MICHIGAN.png")
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
