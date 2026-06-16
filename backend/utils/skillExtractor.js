const skillsDatabase = [

  // Programming Languages
  "Java",
  "Python",
  "JavaScript",
  "TypeScript",
  "C",
  "C++",
  "C#",
  "Go",
  "Rust",
  "PHP",
  "Kotlin",
  "Swift",
  "R",

  // Frontend
  "HTML",
  "CSS",
  "SASS",
  "Bootstrap",
  "Tailwind CSS",
  "React",
  "Next.js",
  "Angular",
  "Vue.js",
  "Redux",

  // Backend
  "Node.js",
  "Express",
  "Spring Boot",
  "Spring",
  "Hibernate",
  "Django",
  "Flask",
  "FastAPI",
  "ASP.NET",
  ".NET",

  // Databases
  "SQL",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "Oracle",
  "SQLite",
  "Redis",
  "Firebase",
  "Cassandra",

  // Cloud
  "AWS",
  "Amazon Web Services",
  "Azure",
  "Microsoft Azure",
  "Google Cloud",
  "GCP",
  "Cloud Computing",
  "Lambda",
  "EC2",
  "S3",

  // DevOps
  "Docker",
  "Kubernetes",
  "Jenkins",
  "GitHub Actions",
  "CI/CD",
  "Terraform",
  "Ansible",
  "Nginx",

  // Machine Learning
  "Machine Learning",
  "Deep Learning",
  "Artificial Intelligence",
  "Neural Networks",
  "Computer Vision",
  "NLP",
  "Natural Language Processing",
  "Generative AI",
  "LLM",
  "Prompt Engineering",

  // ML Frameworks
  "TensorFlow",
  "Keras",
  "PyTorch",
  "Scikit-learn",
  "XGBoost",
  "OpenCV",

  // Data Science
  "Data Science",
  "Data Mining",
  "Feature Engineering",
  "Model Deployment",
  "Statistics",
  "Probability",

  // Data Analysis
  "Data Analysis",
  "Data Analytics",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Seaborn",
  "Power BI",
  "Tableau",
  "Excel",
  "Google Sheets",
  "Business Intelligence",
  "ETL",

  // Networking
  "Computer Networks",
  "Networking",
  "TCP/IP",
  "UDP",
  "DNS",
  "HTTP",
  "HTTPS",
  "OSI Model",
  "Routing",
  "Switching",

  // Cyber Security
  "Cyber Security",
  "Ethical Hacking",
  "Penetration Testing",
  "Network Security",
  "Cryptography",
  "OWASP",
  "Kali Linux",

  // Mobile Development
  "Android",
  "Android Studio",
  "Flutter",
  "React Native",
  "iOS",

  // Tools
  "Git",
  "GitHub",
  "GitLab",
  "Postman",
  "VS Code",
  "JIRA",
  "Linux",

  // CS Fundamentals
  "DBMS",
  "Operating Systems",
  "Data Structures",
  "Algorithms",
  "OOP",
  "Object Oriented Programming",
  "System Design",

  // Soft Skills
  "Problem Solving",
  "Leadership",
  "Communication",
  "Teamwork",
  "Critical Thinking"
];

const extractSkills = (text) => {

  const lowerText = text.toLowerCase();

  const foundSkills = skillsDatabase.filter(
    skill => lowerText.includes(
      skill.toLowerCase()
    )
  );

  return [...new Set(foundSkills)];
};

module.exports = extractSkills;