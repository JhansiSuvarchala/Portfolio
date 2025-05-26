
import { Card, CardContent } from "@/components/ui/card";
import { Code, Users, Lightbulb, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and scalable code"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative approach to development"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies"
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on delivering results"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate full-stack developer with over 3 years of experience 
              creating web applications that solve real-world problems. My journey 
              started with curiosity about how websites work, and it has evolved into 
              a love for crafting elegant solutions with code.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I specialize in React, Node.js, and modern web technologies. When I'm 
              not coding, you'll find me exploring new frameworks, contributing to 
              open source projects, or mentoring aspiring developers.
            </p>
            <div className="flex flex-wrap gap-2">
              {["JavaScript", "TypeScript", "React", "Node.js", "MongoDB"].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <Card key={index} className="p-4 hover:shadow-lg transition-shadow">
                <CardContent className="text-center space-y-2 p-0">
                  <item.icon className="h-8 w-8 text-blue-600 mx-auto" />
                  <h3 className="font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
