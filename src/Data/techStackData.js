import { FiCode,FiLayers,FiSmartphone,FiDatabase,FiCpu,FiCloud } from "react-icons/fi";

const TECHS = [
  { cat: "Frontend", icon: FiCode, items: ["React.js", "Next.js", "HTML5", "CSS3", "TypeScript", "JavaScript"] },
  { cat: "Backend", icon: FiLayers, items: ["Node.js", "Express.js", "REST APIs", "WebSocket Architecture"] },
  { cat: "Mobile", icon: FiSmartphone, items: ["React Native", "Android Development", "Cross-platform"] },
  { cat: "Databases", icon: FiDatabase, items: ["MySQL", "MongoDB", "PostgreSQL"] },
  { cat: "AI & Automation", icon: FiCpu, items: ["AI/ML Integrations", "Chatbot Development", "AI Calling", "WhatsApp Automation"] },
  { cat: "Cloud", icon: FiCloud, items: ["Scalable Deployment", "Server Management", "API Integrations", "Real-time Systems"] }
];

export default TECHS;