
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg border-4 border-white"
          />
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            John Doe
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
            Full Stack Developer
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Passionate about creating innovative web solutions with modern technologies. 
            I build responsive, user-friendly applications that make a difference.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in">
          <Button size="lg" className="group">
            <Download className="mr-2 h-4 w-4 group-hover:animate-pulse" />
            Download CV
          </Button>
          <Button variant="outline" size="lg" onClick={() => scrollToSection('contact')}>
            <Mail className="mr-2 h-4 w-4" />
            Contact Me
          </Button>
        </div>
        
        <div className="flex justify-center gap-6 mb-12 animate-fade-in">
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
            <Github className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
            <Mail className="h-6 w-6" />
          </a>
        </div>
        
        <button 
          onClick={() => scrollToSection('about')}
          className="animate-bounce text-gray-600 hover:text-blue-600 transition-colors"
        >
          <ArrowDown className="h-8 w-8 mx-auto" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
