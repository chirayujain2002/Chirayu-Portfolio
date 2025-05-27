import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const allProjects = [
    {
      title: 'Buildify: Personal Business Website',
      period: 'Apr \'25 — May \'25',
      description: 'Developed a TypeScript-based application for selling Marble and Granite with Branding.',
      features: [
        'Implemented modular architecture with reusable components and state management',
        'Integrated real-time updates and notifications for project milestones',
      ],
      technologies: ['TypeScript', 'React', 'SupaBase'],
      link: 'https://github.com/chirayujain2002/Buildify',
      isFeatured: true,
    },
    {
      title: 'College Online Portal',
      period: 'Jan \'24 — Apr \'24',
      description: 'Built a PHP-based web portal for college administration and student services.',
      features: [
        'Implemented user authentication, course registration, and grade tracking features',
        'Enhanced user experience with responsive design and intuitive navigation',
      ],
      technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      link: 'https://github.com/chirayujain2002/college-online-portal',
    },
    {
      title: 'Dhamaka Gallery: E-Commerce Website',
      period: 'Oct \'23 — Dec \'23',
      description: 'Designed and developed an online gallery for showcasing and music songs.',
      features: ['Optimized website performance and SEO for better reach'],
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com/chirayujain2002/Dhamaka-gallery',
    },
    {
      title: 'Flower Store',
      period: 'Sep \'23',
      description: 'Created a simple flower store website with HTML and CSS.',
      features: ['Responsive design with a clean layout'],
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com/chirayujain2002/flower-store',
    },
  ];

  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 3);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
            <div className="h-1 w-20 bg-blue-600 mx-auto mt-4"></div>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden flex flex-col justify-between"
            >
              {project.isFeatured && (
                <div className="bg-blue-600 text-white px-4 py-2 text-sm font-medium flex items-center">
                  ⭐ FEATURED PROJECT
                </div>
              )}

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-semibold text-gray-900 text-xl">{project.title}</h3>
                  <span className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded">
                    {project.period}
                  </span>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4 flex-grow">
                  {project.features.map((feature, idx) => (
                    <p key={idx} className="text-sm text-gray-600 mb-2 flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      {feature}
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                  >
                    🔗 View Project
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? 'Show Less' : 'View All Projects'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
