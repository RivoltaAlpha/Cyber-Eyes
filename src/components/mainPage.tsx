import React, { useEffect } from 'react';

const ProgramsSection: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('translate-x-0', 'opacity-100');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.program-card').forEach((card) => {
      observer.observe(card);
      card.classList.add('-translate-x-full', 'opacity-0', 'transition', 'duration-1000');
    });

    return () => observer.disconnect();
  }, []);

  const programs = [
    {
      title: "Networking",
      description: "Empowering the next generation of innovators through hands-on knowledge and experiences.",
      imageUrl: "/images/Server-bro.png",
      buttonText: "Explore Program"
    },
    {
      title: "Cyber Security",
      description: "Providing a safe and secure technological environment for all members of the community.",
      imageUrl: "/images/cyber.jpg",
      buttonText: "Join Us"
    },
    {
      title: "Software Engineering",
      description: "Enhancing technical skills and knowledge for job readiness.",
      imageUrl: "/images/software.jpg",
      buttonText: "Explore Program"
    },
    {
      title: "Learning and Development",
      description: "Acquire skills through our learning and development materials.",
      imageUrl: "/images/innovation.png",
      buttonText: "Join Us"
    }
  ];

  return (
    <section className="py-28 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Programs</h1>
        <p className="text-xl mb-12 text-center">
          Cyber Eyes programs are designed to empower young people with the skills and knowledge necessary to excel in Tech careers and realize their full potential.
        </p>
        {programs.map((program, index) => (
          <div key={index} className={`flex flex-col mx-auto md:flex-row${index % 2 !== 0 ? '-reverse' : ''} items-center my-12`}>
            <div className="md:w-1/2">
              <img src={program.imageUrl} alt={program.title} className="w-full h-[600px]" />
            </div>
            <div className="md:w-1/2 p-8">
              <h2 className="text-4xl font-bold mb-4">{program.title}</h2>
              <p className='text-lg'>{program.description}</p>
              <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                {program.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgramsSection;