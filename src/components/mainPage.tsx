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
        <div className="grid md:grid-cols-2 gap-8">
          <div className="program-card">
            <ProgramCard
              title="Ethical Hacking"
              description="Empowering the next generation of innovators through hands-on knowledge and experiences."
              imageUrl="/path-to-image1.jpg"
              buttonText="Explore Program"
            />
          </div>
          <div className="program-card">
            <ProgramCard
              title="Programs"
              description="Connecting aspiring STEM professionals with industry leaders for guidance and support."
              imageUrl="/path-to-image2.jpg"
              buttonText="Join Us"
            />
          </div>
          <div className="program-card">
            <ProgramCard
              title="Ethical Hacking"
              description="Empowering the next generation of innovators through hands-on knowledge and experiences."
              imageUrl="/path-to-image1.jpg"
              buttonText="Explore Program"
            />
          </div>
          <div className="program-card">
            <ProgramCard
              title="Programs"
              description="Connecting aspiring STEM professionals with industry leaders for guidance and support."
              imageUrl="/path-to-image2.jpg"
              buttonText="Join Us"
            />
          </div>
          <div className="program-card">
            <ProgramCard
              title="Ethical Hacking"
              description="Empowering the next generation of innovators through hands-on knowledge and experiences."
              imageUrl="/path-to-image1.jpg"
              buttonText="Explore Program"
            />
          </div>
          <div className="program-card">
            <ProgramCard
              title="Programs"
              description="Connecting aspiring STEM professionals with industry leaders for guidance and support."
              imageUrl="/path-to-image2.jpg"
              buttonText="Join Us"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;