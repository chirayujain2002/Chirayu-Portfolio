const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = ['About', 'Experience', 'Skills', 'Projects', 'Education', 'Contact'];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-semibold mb-4">Chirayu Jain</h3>
            <p className="text-gray-300 leading-relaxed max-w-md">
              B.E. Computer Science Engineering graduate from Chandigarh University with experience in full-stack web development, UI/UX design, and hands-on projects using the MERN stack.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link.toLowerCase())}
                  className="text-gray-300 hover:text-white text-left transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Chirayu Jain. All rights reserved.
          </p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a 
              href="https://www.linkedin.com/in/chirayujain2002" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <span className="text-xl">💼</span>
            </a>
            <a 
              href="https://github.com/chirayujain2002" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <span className="text-xl">🐙</span>
            </a>
            <a 
              href="mailto:2002chirayujain@gmail.com" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <span className="text-xl">📧</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
