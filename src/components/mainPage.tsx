import React, { useEffect } from 'react';
import ProgramCard from './cards';

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

  return (
    <section className="py-28 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Our Programs</h1>
        <p className="text-xl mb-12">
          Cyber Eyes programs are designed to empower young people with the skills and knowledge necessary to excel in Tech careers and realize their full potential.
        </p>
        <div className="grid md:grid-cols-1 gap-8">
          <div className="program-card1">
            <ProgramCard
              title="Networking"
              description="Empowering the next generation of innovators through hands-on knowledge and experiences."
              imageUrl="/images/Server-bro.png"
              buttonText="Explore Program"
            />
          </div>
          <div className="program-card2">
            <ProgramCard
              title="Cyber Security"
              description=" Providing a safe and secure technological environment for all members of the community."
              imageUrl="/images/cyber.jpg"
              buttonText="Join Us"
            />
          </div>
          <div className="program-card3">
            <ProgramCard
              title="Software Engineering"
              description="Enhancing technical skills and knowledge for job readiness."
              imageUrl="/images/software.jpg"
              buttonText="Explore Program"
            />
          </div>
          <div className="program-card4">
            <ProgramCard
              title="Learning and Development"
              description="Aquire skills through our learning and development materials."
              imageUrl="/images/learn.png"
              buttonText="Join Us"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;