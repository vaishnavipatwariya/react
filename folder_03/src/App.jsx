import React from 'react';
import Card from './components/card.jsx';

const App = () => {
  const users = [
    {
      id: 1,
      name: "Vaishnavi Patwariya",
      role: "Full Stack Developer",
      location: "Indore, India",
      bio: "Builds fast, clean web apps with the MERN stack and enjoys turning messy requirements into simple interfaces.",
      img: "https://images.unsplash.com/photo-1791237835066-f79fb8af9ff7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      skills: ["React", "Node.js", "MongoDB", "Express"],
      stats: [
        { label: "Projects", value: "8" },
        { label: "Experience", value: "1+ yr" },
        { label: "Rating", value: "4.8" }
      ]
    },
    {
      id: 2,
      name: "Ananya Sharma",
      age: 26,
      role: "UI/UX Designer",
      location: "Bengaluru, India",
      bio: "Designs mobile-first products people actually enjoy using. Loves user research, design systems and tiny micro-interactions.",
      img: "https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      skills: ["Figma", "Prototyping", "Research"],
      stats: [
        { label: "Projects", value: "34" },
        { label: "Experience", value: "4 yrs" },
        { label: "Rating", value: "4.9" }
      ]
    },
    {
      id: 3,
      name: "Riya Mehta",
      age: 24,
      role: "Content Creator",
      location: "Delhi, India",
      bio: "Creates fashion and lifestyle content with a clean, colourful style. Works with brands on reels, shoots and campaigns.",
      img: "https://plus.unsplash.com/premium_photo-1675200124904-dfadce24119f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      skills: ["Reels", "Branding", "Styling"],
      stats: [
        { label: "Campaigns", value: "52" },
        { label: "Experience", value: "3 yrs" },
        { label: "Followers", value: "120K" }
      ]
    },
    {
      id: 4,
      name: "Meera Iyer",
      age: 31,
      role: "Travel Photographer",
      location: "Goa, India",
      bio: "Chases golden-hour light across old streets and coastlines. Her work has been featured in several travel magazines.",
      img: "https://images.unsplash.com/photo-1560087637-bf797bc7796a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      skills: ["Photography", "Lightroom", "Storytelling"],
      stats: [
        { label: "Shoots", value: "210" },
        { label: "Experience", value: "9 yrs" },
        { label: "Rating", value: "4.9" }
      ]
    },
    {
      id: 5,
      name: "Arjun Kapoor",
      age: 29,
      role: "Data Scientist",
      location: "Hyderabad, India",
      bio: "Turns large, noisy datasets into clear decisions. Focused on forecasting models and dashboards that teams really use.",
      img: "https://images.unsplash.com/photo-1690444963408-9573a17a8058?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      skills: ["Python", "SQL", "Machine Learning"],
      stats: [
        { label: "Projects", value: "21" },
        { label: "Experience", value: "5 yrs" },
        { label: "Rating", value: "4.7" }
      ]
    },
    {
      id: 6,
      name: "Rohan Desai",
      age: 33,
      role: "Product Manager",
      location: "Pune, India",
      bio: "Leads cross-functional teams from idea to launch. Believes the best roadmaps are short, clear and based on real feedback.",
      img: "https://images.unsplash.com/photo-1602442787305-decbd65be507?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
      skills: ["Roadmaps", "Agile", "Analytics"],
      stats: [
        { label: "Launches", value: "15" },
        { label: "Experience", value: "8 yrs" },
        { label: "Rating", value: "4.8" }
      ]
    }
  ];

  return (
    <div className="parent">
      {users.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </div>
  );
};

export default App;