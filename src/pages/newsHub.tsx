import React from 'react';

// Define a type for our news items
type NewsItem = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

// Sample news data
const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Cybersecurity Workshop",
    description: "Join us for an intensive hands-on workshop on advanced cybersecurity techniques. as well as other cybersecurity related topics.",
    imageUrl: "/images/workshop.png"
  },
  {
    id: 2,
    title: " CTF Challenge Released",
    description: "Test your skills with our latest Capture The Flag challenge.Capture The Flag (CTF) is a cybersecurity competition where participants solve challenges to find hidden 'flags'. Our platform hosts a variety of challenges across categories like cryptography, web exploitation, reverse engineering, and more. Sharpen your skills, compete with others, and climb the leaderboard! Are you up for it?",
    imageUrl: "/images/background2.png"
  },
  {
    id: 3,
    title: "Community Engagement ",
    description: "We're have been part of several events hosted in Universities and have worked together with Computer Society of Kirinyaga to empower an educate students on several technologies.",
    imageUrl: "/images/community.jpg"
  },
  {
    id: 4,
    title: "Our Success Story",
    description: "Our founders are recognized leaders in cybersecurity and software development, earning prestigious awards for their groundbreaking contributions. Their vision and expertise drive our mission to deliver top-tier training programs.",
    imageUrl: "/images/award-winning-team.jpg"
  }
];

const NewsHub: React.FC = () => {
  return (
    <div className=" mx-auto px-4 bg-gray-900 text-white py-8">      
      <div className=" rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-4">News & Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsData.map((item) => (
            <div key={item.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-[400px] object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold mb-2 text-yellow-500">{item.title}</h3>
                <p className="text-gray-300 ">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsHub;