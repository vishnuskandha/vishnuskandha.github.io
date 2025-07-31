const logotext = "Vishnuzmoto";

const meta = {
    title: "Vishnu Skandha",
    description: "Vishnu Skandha — Computer Science student, aspiring Full Stack Developer & Data Analyst, passionate about cybersecurity and smart tech solutions.",
};

const introdata = {
    title: "I’m Vishnu Skandha",
    animated: {
        first: "I explore Cybersecurity",
        second: "I build with React",
        third: "I innovate with code & ideas",
    },
    description: "CS student & tech enthusiast passionate about embedded systems, electronics, and building smart, secure web solutions.",
    your_img_url: `${process.env.PUBLIC_URL}/images/hero.png`,
};

const dataabout = {
    title: "a bit about myself",
    aboutme: "I'm a Computer Science student at SRM University with a passion for full stack development, cybersecurity, and Embedded Systems. I have hands-on experience working on web apps, Jupyter notebooks, and exploring areas like automation and cloud computing. I love learning by building and collaborating.",
};

const worktimeline = [
    {
        jobtitle: "Analyst Trainee",
        where: "Eagle HiTech, Chennai",
        date: "Jan 2025",
    },
    {
        jobtitle: "Trainee Web Developer",
        where: "TalentTakeaways Infotech Pvt Ltd, Chennai",
        date: "Nov - Dec 2024",
    },
    {
        jobtitle: "Cyber Security Intern (TCS iON)",
        where: "Cyber Suraksha Program",
        date: "Jul - Aug 2024",
    },
];

const skills = [
    { name: "Python", value: 85 },
    { name: "JavaScript", value: 80 },
    { name: "React.js", value: 70 },
    { name: "C/C++", value: 75 },
    { name: "MySQL", value: 80 },
    { name: "Linux & Networking", value: 65 },
];

const services = [
    {
        title: "Web Development",
        description: "Building responsive, user-centric web apps using React, PHP, and modern frameworks.",
    },
    {
        title: "Data Analysis",
        description: "Exploring data using Jupyter Notebooks, Python libraries, and querying with SQL.",
    },
    {
        title: "Cybersecurity Practice",
        description: "Experienced in VAPT, packet analysis, and vulnerability detection through TCS iON program.",
    },
];

const dataportfolio = [
    {
        img: "images/React.png",
        description: "Clicker Game — A fun web app built with React.js",
        link: "#", // Replace with real project URL
    },
    {
        img: "images/Arduino-Motion-Detector.png",
        description: "IoT Motion-Activated LED — Built with Arduino, PIR motion sensor, and LED automation. Detects motion and lights up intelligently, ideal for smart room setups.",
        link: "#", // Replace with real project URL
    },
    {
        img: "images/Atlas.png",
        description: "Smart Military Assistant — My India Project using AI + Neural Concept",
        link: "#", // Replace with real project URL
    },
];

const contactConfig = {
    YOUR_EMAIL: "vishnu.skandha@gmail.com",
    YOUR_FONE: "98420 99110",
    description: "Feel free to reach out for collaboration, internships, or tech discussions. I'm open to exciting opportunities in full stack development, cybersecurity, and data analysis.",
    YOUR_SERVICE_ID: "vishnu.skandha@gmail.com",
    YOUR_TEMPLATE_ID: "your_emailjs_template_id",
    YOUR_USER_ID: "VishnuSkandha",
};

const socialprofils = {
    github: "https://github.com/vishnuskandha",
    linkedin: "https://www.linkedin.com/in/vishnuskandha",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};
