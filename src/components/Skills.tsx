
const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages & Scripting',
      icon: '💻',
      color: 'bg-blue-500',
      skills: ['HTML', 'CSS', 'JavaScript', 'C++']
    },
    {
      title: 'Frameworks & Libraries',
      icon: '⚛️',
      color: 'bg-purple-500',
      skills: ['React.js', 'Node.js', 'Express.js']
    },
    {
      title: 'Web & API Development',
      icon: '🌐',
      color: 'bg-pink-500',
      skills: ['REST APIs', 'Responsive Design']
    },
    {
      title: 'Databases & Tools',
      icon: '🗄️',
      color: 'bg-green-500',
      skills: ['MongoDB', 'SQL', 'Git', 'GitHub', 'Supabase']
    },
    {
      title: 'UI/UX & Design',
      icon: '🎨',
      color: 'bg-orange-500',
      skills: ['Figma']
    },
    {
      title: 'AI Tools',
      icon: '🤖',
      color: 'bg-red-500',
      skills: ['Available on google']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
            <div className="h-1 w-20 bg-blue-600 mx-auto mt-4"></div>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My technical toolkit includes a diverse range of languages, frameworks, and technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 p-6 border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center text-2xl`}>
                  {category.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
