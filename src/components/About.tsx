
import { Card, CardContent } from "@/components/ui/card";
import { Code, Users, Lightbulb, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and scalable code",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative approach to development",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on delivering results",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 to-blue-800 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Crafting digital experiences with passion and precision
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
              I'm an aspiring full-stack developer passionate about creating web applications that solve real-world problems.
              My journey began with a curiosity about how websites work and grew into a strong interest in building efficient,
               user-friendly solutions using the MERN stack and Data Structures & Algorithms.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I specialize in MongoDB, Express.js, React.js, Node.js, and modern web technologies. When I'm 
                not coding, you'll find me exploring new frameworks and  contributing to 
                open source projects.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">Core Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {["JavaScript", "C++", "React", "Node.js", "MongoDB", "Python"].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium hover:scale-105 transition-transform cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardContent className="text-center space-y-4 p-6">
                  <div className={`w-16 h-16 rounded-full ${item.color} mx-auto flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-bold text-gray-800 text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
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
