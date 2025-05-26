
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 px-4 pt-16">
      <div className="text-center max-w-5xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <div className="relative mb-8">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
              alt="Profile"
              className="w-40 h-40 rounded-full mx-auto mb-6 shadow-2xl border-4 border-white ring-4 ring-blue-100"
            />
            <div className="absolute inset-0 w-40 h-40 rounded-full mx-auto bg-gradient-to-tr from-blue-400 to-purple-400 opacity-20 animate-pulse"></div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-gray-800 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6 leading-tight">
            John Doe
          </h1>
          
          <div className="relative">
            <h2 className="text-3xl md:text-4xl text-gray-600 mb-8 font-light">
              Full Stack Developer
            </h2>
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
          
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed">
            Passionate about creating innovative web solutions with modern technologies. 
            I build responsive, user-friendly applications that make a difference in people's lives.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 mb-12 animate-fade-in">
          <Button size="lg" className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300">
            <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
            Download CV
          </Button>
          <Button variant="outline" size="lg" onClick={() => scrollToSection('contact')} className="border-2 hover:bg-blue-50 transition-all duration-300">
            <Mail className="mr-2 h-5 w-5" />
            Contact Me
          </Button>
        </div>
        
        <div className="flex justify-center gap-8 mb-16 animate-fade-in">
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110">
            <Github className="h-8 w-8" />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110">
            <Linkedin className="h-8 w-8" />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-all duration-300 hover:scale-110">
            <Mail className="h-8 w-8" />
          </a>
        </div>
        
        <button 
          onClick={() => scrollToSection('about')}
          className="animate-bounce text-gray-600 hover:text-blue-600 transition-colors group"
        >
          <ArrowDown className="h-10 w-10 mx-auto group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
