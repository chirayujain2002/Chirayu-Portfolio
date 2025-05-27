
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Software Engineer
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Chirayu Jain
            </h1>

            <h2 className="text-xl lg:text-2xl text-blue-600 font-semibold mb-6">
              B.Tech in Computer Engineering
            </h2>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
              Full-stack developer and tech enthusiast with expertise in the MERN stack, UI/UX design, and modern web technologies. Passionate about building scalable web solutions and continuously learning in the evolving tech landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all hover:scale-105"
              >
                Contact Me →
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection('projects')}
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition-all hover:scale-105"
              >
                View Projects
              </Button>
              <a
                href="/resume.pdf"
                download
                className="text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition-all hover:scale-105 text-center border border-transparent bg-transparent"
              >
                Download Resume
              </a>

            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1 animate-scale-in">
                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  <img
                    src="/Chirayu.jpg"
                    alt="Chirayu Jain"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
