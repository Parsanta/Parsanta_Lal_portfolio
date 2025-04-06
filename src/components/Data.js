import AI from "../assets/img/intro_AI.jpg";
import genAi from "../assets/img/genAi.jpg";
import MLWP from "../assets/img/MLWP.jpg";
import DB from "../assets/img/DBSQL.jpg";
import pyAI from "../assets/img/python_AI.jpg";
import AI_foundations from "../assets/img/AI_foundations.jpg";
import genAiIntro from "../assets/img/genAiIntro.jpg";
import notes_pro from "../assets/img/notes_pro.png";
import dispatch from "../assets/img/dispatch.jpg";
import feasibility from "../assets/img/Feasibility.jpg";
import review from "../assets/img/Review.png";
import Fashion from "../assets/img/Fashion.jpg";

export const certifications_data = [
  {
    image: MLWP,
    title: "Machine Learning with Python",
    date: "February 7, 2024",
    link: "https://coursera.org/share/ae8140bb7579715028f160ac0726fbf7",
  },
  {
    image: AI_foundations,
    title: "AI Foundations for Everyone",
    date: "December 28, 2023",
    link: "https://coursera.org/share/bc66d478bcae18bc4a0751b030109589",
  },
  {
    image: genAi,
    title: "Generative AI: Prompt Engineering Basics",
    date: "December 16, 2023",
    link: "https://coursera.org/share/7bf5016017f50e2f3fd5ef03cfe5d3d8",
  },
  {
    image: genAiIntro,
    title: "Generative AI: Introduction and Applications",
    date: "November 25, 2023",
    link: "https://coursera.org/share/67cfa76226c6eccffa0fbfad667fe395",
  },
  {
    image: AI,
    title: "Introduction to Artificial Intelligence (AI)",
    date: "November 23, 2023",
    link: "https://coursera.org/share/a68ab1949759613065a49e89fc3ab940",
  },
  {
    image: DB,
    title: "Databases and SQL for Data Science with Python",
    date: "September 19, 2023",
    link: "https://coursera.org/share/00b0f0834a873c553cee3c700119d7d0",
  },
  {
    image: pyAI,
    title: "Python for Data Science, AI & Development",
    date: "September 8, 2023",
    link: "https://coursera.org/share/0fc4aff4af0d8ffc9123f9608474a039",
  },
];
export const EXPERIENCES = [
  {
    year: "January 2025 - Present",
    role: "Junior AI Engineer",
    company: "ELITE IT TEAM",
    description: `Designing, building, and deploying AI solutions focusing on Generative AI RAG, and agentic AI. Experienced in training NLP and computer vision models, integrating external data sources, optimizing AI workflows, and collaborating with teams to implement AI-driven automation. Skilled in client communication and strategic AI development.`,
    technologies: ["Generative AI", "Fine Tuning", "Retrival-Augmented Generation","Natural Language Processing (NLP)","LLM","Computer Vision"]
  },
  {
    year: "September 2024 - January 2025",
    role: "AI intern",
    company: "ELITE IT TEAM",
    description: `Developed AI and ML solutions for client and internal projects, specializing in Retrieval-Augmented Generation with large language models. Conducted LLM fine-tuning for domain-specific tasks, and exploratory data analysis (EDA) for insights. Automated workflows to enhance efficiency, and deliver impactful tools supporting deliverables and processes.`,
    technologies: ["Exploratory Data Analysis", "Fine Tuning", "Data Annotation","Natural Language Processing (NLP)","Computer Vision"]
  },
  {
    year: "Apirl 2023 - Present",
    role: "Research Assistant",
    company: "Undergraduate Research ",
    description: `Physically Based Phase Function in Volume Rendering, objective of this research is to Enhance volumetric rendering quality for this purpose we are Proposing our own phase function, which is more physically accurate, showcasing applicability in various use cases,
    including medical CT scans, MRI, and animations.`,
    technologies: ["C++", "Exposure Render", "Pbrtv4"]
  },
  {
    year: "Jan 2024 - May 2024",
    role: "C++ Developer",
    company: "SUPARCO",
    description: `Develop, convert, and optimize algorithms.Collaborate with a team to enhance SAR image quality and contribute to software development`,
    technologies: ["C++", "Matlab"],
  }
  
];
export const PROJECTS = [
  {
    title: "AI-Powered Outfit Recommendation System",
    projectUrl: "https://www.linkedin.com/posts/parsanta-rajpal_artificialintelligence-ecommerce-fashiontech-activity-7277239925601714176-QiHl?utm_source=share&utm_medium=member_desktop",
    image: Fashion,
    description:
      "Developed an AI-powered recommendation system that suggests complementary clothing and accessories based on uploaded images, enhancing the shopping experience.Boosted e-commerce revenue by encouraging multi-item purchases and improving customer satisfaction with personalized, instant outfit suggestions.",
    technologies: ["LLMs", "RAG"]
  },
  {
    title: "AI Automated Feasibility Creator",
    image: feasibility,
    projectUrl: "https://www.linkedin.com/posts/parsanta-rajpal_automation-feasibilitytool-innovation-activity-7269634254806929410-ac1M?utm_source=share&utm_medium=member_desktop",
    description:
      "Developed a tool to automate initial feasibility reports, enabling the sales team to respond faster to client queries without relying on developers. This solution reduced response delays and streamlined workflows, enhancing team efficiency and collaboration.",
    technologies: ["LLMs"]
  },
  {
    title: "Review Analyzer",
    projectUrl: "https://www.linkedin.com/posts/parsanta-rajpal_machinelearning-productreviewanalyzer-ai-activity-7212124099739889664-AvIb?utm_source=share&utm_medium=member_desktop",
    image: review,
    description:
      "Designed and implemented a sentiment analysis model to predict review sentiment.Achieved 92% accuracy in classifying reviews. Implemented a system to generate complaints from negative reviews to the relevant departments for timely resolution. ",
    technologies: ["NLP","Python", "TensorFlow", "ReactJs"],
  },
  {
    title: "Dis-patch E-commerce Website",
    projectUrl: "https://dis-patch.vercel.app/",
    image: dispatch,
    description:
      "A fully functional and responsive e-commerce website with features like product listing, shopping cart, and user authentication. The Project includes an Admin Dashboard and User Dashboard empowering seamless capabilities to add, delete, and edit orders and products",
    technologies: ["ReactJS", "Firebase"],
  }
];

export const certifications = [
  {
    title: "Certification Title 1",
    organization: "Certification Organization 1",
    date: "January 2022",
    image: "https://via.placeholder.com/150",
    link: "#certification1",
  },
  {
    title: "Certification Title 2",
    organization: "Certification Organization 2",
    date: "March 2022",
    image: "https://via.placeholder.com/150",
    link: "#certification2",
  },
  {
    title: "Certification Title 1",
    organization: "Certification Organization 1",
    date: "January 2022",
    image: "https://via.placeholder.com/150",
    link: "#certification1",
  },
  {
    title: "Certification Title 2",
    organization: "Certification Organization 2",
    date: "March 2022",
    image: "https://via.placeholder.com/150",
    link: "#certification2",
  },
  {
    title: "Certification Title 1",
    organization: "Certification Organization 1",
    date: "January 2022",
    image: "https://via.placeholder.com/150",
    link: "#certification1",
  },
  {
    title: "Certification Title 2",
    organization: "Certification Organization 2",
    date: "March 2022",
    image: "https://via.placeholder.com/150",
    link: "#certification2",
  },
];
