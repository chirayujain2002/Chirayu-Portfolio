
const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Engineering in Computer Science Engineering',
      institution: 'Chandigarh University | Mohali, India',
      period: '2021 – 2025',
      grade: 'CGPA: 7.6/10',
      icon: '🎓'
    },
    {
      degree: 'Intermediate',
      institution: 'Aklank Public School | Kota, India',
      period: '2019 – 2020',
      grade: '',
      icon: '📚'
    },
    {
      degree: 'Matriculation',
      institution: '',
      period: '2017 – 2018',
      grade: '',
      icon: '📖'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <span className="text-2xl">🎓</span>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic journey and qualifications that have shaped my technical expertise
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
          
          <div className="space-y-8">
            {educationData.map((item, index) => (
              <div 
                key={item.degree}
                className="relative flex items-start"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md"></div>
                
                <div className="ml-16 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 w-full border border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{item.icon}</span>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {item.degree}
                      </h3>
                    </div>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      📅 {item.period}
                    </span>
                  </div>
                  
                  {item.institution && (
                    <p className="text-gray-600 mb-2 flex items-center">
                      <span className="mr-2">📍</span>
                      {item.institution}
                    </p>
                  )}
                  
                  {item.grade && (
                    <div className="flex items-center">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        🏆 {item.grade}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
