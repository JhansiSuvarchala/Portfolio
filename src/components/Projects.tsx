import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Skill Development & Internship Platform",
      description: "Full-stack MERN application for students to explore skill development programs and apply for internships.",
      image: "/images/skill-platform.png",
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      liveUrl: "#",
      githubUrl: "https://github.com/JhansiSuvarchala/internship-platform"
    },
    {
      title: "Cute Puppies Blog🐾🦴",
      description: "A simple and responsive blog website about puppies, created using HTML, CSS, and JavaScript.",
      image: "/images/dog.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://jhansisuvarchala.github.io/mern-stack-assessment-2/#home",
      githubUrl: "https://github.com/JhansiSuvarchala/mern-stack-assessment-2"
    },
    {
      title: "AI-powered Resume Screening & Ranking System",
      description: "Python-based system that uses AI models to automatically screen and rank candidate resumes.",
      image: "https://madgicaltechdom.com/wp-content/uploads/2024/04/How-AI-Helps-Filter-Resumes-According-to-Job-Descriptions.jpeg",
      technologies: ["Python", "AI", "NLP", "Ranking Algorithms"],
      liveUrl: "https://resume-ranking-jhansi.streamlit.app/",
      githubUrl: "https://github.com/JhansiSuvarchala/resume_ranking"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work and the technologies I've used to build them
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-gray-800">{project.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
