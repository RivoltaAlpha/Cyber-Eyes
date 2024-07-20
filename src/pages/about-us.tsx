import React from 'react';

// Import your images
import provenImpactImage from '/images/image2.jpg';
import awardWinningTeamImage from '/images/award-winning-team.jpg';
import innovativeCurriculumImage from '/images/hacking.png';
import mentorshipImage from '/images/software.png';
import aboutBackgroundImage from '/images/image1.jpg';
import visionImage from '/images/image3.jpg';
import missionImage from '/images/image2.jpg';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
    {/* About Us Section with background image */}
    <div 
      className="bg-cover bg-center h-96 flex items-center justify-center mb-12"
      style={{ backgroundImage: `url(${aboutBackgroundImage})` }}
    >
      <h1 className="text-4xl font-bold text-white">About Us</h1>
    </div>
    <div>
        <p>Cyber Eyes Networks, a dynamic tech hub founded in 2023 by Brian Karanja and Brian Ndegwa, is passionate about empowering the Mount Kenya region. 
            Our core values lie in cybersecurity excellence, fostering coding innovation, and building a diverse and inclusive tech community. 
            We believe technology should be a force for good, and that's why we offer cutting-edge cybersecurity solutions to protect businesses and individuals. 
            These two inspiring minds hail from diverse academic backgrounds, with Brian Karanja bringing his expertise from Kirinyaga University and Brian Ndegwa contributing his knowledge gained from Dedan Kimathi University of Technology. 
            Their combined skillset and shared vision fuel Cyber Eyes Networks' mission to create a safer digital landscape. As technologist Alan Kay said, "The best way to predict the future is to invent it." We share this vision, and that's why we're constantly pushing boundaries and exploring new possibilities. 
            We believe in shaping the future of technology in Africa, not just reacting to it.</p>
      </div>

    {/* Vision Section */}
    <div className="flex flex-col md:flex-row items-center my-12">

      <div className="md:w-1/2">
        <img src={visionImage} alt="Vision" className="w-full h-auto" />
      </div>
      <div className="md:w-1/2 p-8">
        <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
        <p>To empower the Mount Kenya region by becoming the leading force in technological advancement and security. We envision a future where 
            everyone has a secure digital environment and technology unlocks the full potential of individuals and communities.
             We are committed to fostering an inclusive and representative tech industry, ensuring everyone has a seat at the table. 
             Inspired by Steve Jobs' belief that "Innovation distinguishes between a leader and a follower," we relentlessly pursue breakthroughs to revolutionize the African tech scene.</p>
      </div>
    </div>

    {/* Mission Section */}
    <div className="flex flex-col md:flex-row-reverse items-center my-12">
      <div className="md:w-1/2">
        <img src={missionImage} alt="Mission" className="w-full h-auto" />
      </div>
      <div className="md:w-1/2 p-8">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p>Our mission is to create a safer digital landscape in kenya . We achieve this by providing innovative cybersecurity solutions, IT consultancy services, and educational programs.
             We offer hackathons and bootcamps to spark creativity and collaboration, alongside comprehensive training programs to equip individuals with the skills they need to thrive. 
            A core aspect of our mission is championing women and youth in tech, ensuring a future where everyone has the opportunity to excel in this ever-growing field.</p>
      </div>
    </div>
    <div className="my-12">
      <h2 className="text-3xl font-bold text-center mb-8">Why Cyber Eyes Networks?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex">
          <img src={provenImpactImage} alt="Proven Impact" className="w-1/2 object-cover" />
          <div className="w-1/2 p-4 bg-gray-100">
            <h3 className="text-xl font-bold mb-2">Proven Impact</h3>
            <p className="text-sm">Our training programs drive measurable advancements in cybersecurity and software development skills. From securing networks to developing cutting-edge applications, we deliver results that matter. Each course is backed by rigorous data analysis and real success stories from our graduates.</p>
          </div>
        </div>
        <div className="flex">
          <img src={awardWinningTeamImage} alt="Award Winning Team" className="w-1/2 object-cover" />
          <div className="w-1/2 p-4 bg-gray-100">
            <h3 className="text-xl font-bold mb-2">Award Winning Team</h3>
            <p className="text-sm">Our founders are recognized leaders in cybersecurity and software development, earning prestigious awards for their groundbreaking contributions. Their vision and expertise drive our mission to deliver top-tier training programs.</p>
          </div>
        </div>
        <div className="flex">
          <img src={innovativeCurriculumImage} alt="Innovative Curriculum" className="w-1/2 object-cover" />
          <div className="w-1/2 p-4 bg-gray-100">
            <h3 className="text-xl font-bold mb-2">Innovative Curriculum</h3>
            <p className="text-sm">Our innovative curriculum goes beyond traditional learning methods, integrating cutting-edge technology and real-world applications to foster critical thinking and creativity. Designed by industry experts, our programs offer personalized learning paths, hands-on projects, and collaborative experiences.</p>
          </div>
        </div>
        <div className="flex">
          <img src={mentorshipImage} alt="Mentorship and Community Support" className="w-1/2 object-cover" />
          <div className="w-1/2 p-4 bg-gray-100">
            <h3 className="text-xl font-bold mb-2">Mentorship and Community Support</h3>
            <p className="text-sm">Our mentorship and community support programs are dedicated to fostering the growth of cybersecurity and software engineering students on campuses. With guidance from industry experts and a collaborative community, students gain the skills and confidence needed to excel in the tech world.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default About;