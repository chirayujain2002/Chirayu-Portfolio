
const About = () => {
  const traits = [
    {
      title: 'Problem Solver',
      description: 'Applies analytical thinking to identify and resolve complex technical and business challenges effectively.'
    },
    {
      title: 'Agile & Adaptive',
      description: 'Thrives in dynamic environments, quickly adapting to new technologies and evolving project requirements.'
    },
    {
      title: 'Tech-Driven Innovator',
      description: 'Passionate about building scalable digital solutions using modern tools like React, Node.js, and cloud services.'
    },
    {
      title: 'Business-Minded',
      description: 'Combines technical expertise with a sharp understanding of business needs, as demonstrated through launching Buildify.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Me
            <div className="h-1 w-20 bg-blue-600 mx-auto mt-4"></div>
          </h2>
        </div>

        <div className="text-center mb-12">
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Software engineer, web developer, and tech community contributor with a passion for building responsive web applications and turning ideas into functional digital solutions
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I am a Computer Science Engineering graduate from <span className="text-blue-600 font-semibold">Chandigarh University</span> with expertise in full-stack web development, especially the MERN stack. I've built real-world projects like Buildify, focusing on responsive design and efficient UI using React.js.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            I've completed over 60 hours of technical training and developed multiple interactive applications. My skill set includes <span className="text-blue-600 font-semibold">HTML, CSS, JavaScript, React, MongoDB, Supabase and tools like AI, Git</span>
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            Outside of coding, I've been an active part of college societies, organizing tech events and contributing as a webmaster. I'm passionate about innovation, learning, and building impactful digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {traits.map((trait, index) => (
            <div 
              key={trait.title}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{trait.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{trait.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
