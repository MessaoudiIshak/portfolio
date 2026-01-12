import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Interactive Real-Time Quiz Platform",
    description: "This group project is an interactive quiz platform that allows teachers to create quizzes, launch sessions in real-time, and let students participate and see results instantly.",
    image: "/projects/quiz.png",
    tags: ["React", "Next.js", "TailwindCSS", "Express", "PostgreSQL", "Socket.io", "TypeScript"],
    demoUrl: "",
    githubUrl: "https://github.com/ClementLmd/tp3-fullstack",
  },
  {
    id: 2,
    title: "Swoley Fit App",
    description:
      "A dynamic workout generator that lets you create customized workouts, target specific muscles, set training goals, and track sets, all in a sleek dark-themed UI.",
    image: "/projects/swole.png",
    tags: ["React", "Vite", "TailwindCSS", "JavaScript"],
    demoUrl: "https://swoleyfitapp.netlify.app/",
    githubUrl: "https://github.com/MessaoudiIshak/fitapp-with-react-and-tailwind",
  },
  {
    id: 3,
    title: "Todo App",
    description:
      "A simple Todo web application with user authentication, built with Express and SQLite. Users can register, login, and manage their todos securely using JWT tokens.",
    image: "/projects/todo.png",
    tags: ["Express", "SQLite", "Node.js", "JavaScript", "JWT"],
    demoUrl: "",
    githubUrl: "https://github.com/MessaoudiIshak/full-stack-expressAPP",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/MessaoudiIshak"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};