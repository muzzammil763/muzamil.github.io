import { useState } from "react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: "E-commerce App",
    description: "A full-featured shopping app with clean UI and smooth animations",
    image: "/placeholder.svg",
    tags: ["Flutter", "Firebase", "State Management"],
    link: "#",
  },
  {
    title: "Social Media Dashboard",
    description: "Real-time analytics dashboard for social media management",
    image: "/placeholder.svg",
    tags: ["Flutter", "REST API", "Charts"],
    link: "#",
  },
  {
    title: "Health & Fitness Tracker",
    description: "Personal health monitoring with beautiful data visualization",
    image: "/placeholder.svg",
    tags: ["Flutter", "BLoC", "Health Kit"],
    link: "#",
  },
];

export const Projects = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Featured Projects</h2>
          <p className="text-secondary/80 max-w-2xl mx-auto">
            A selection of my recent work in mobile app development
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl overflow-hidden hover-card"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-secondary/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-accent/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};