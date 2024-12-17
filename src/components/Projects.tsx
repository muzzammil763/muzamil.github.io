import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Smartphone, Image } from "lucide-react";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Chatter - Social Media App",
    description: "A feature-rich social media application built with Flutter, offering real-time messaging, story sharing, and seamless user interactions.",
    image: "/placeholder.svg", // Using placeholder until we have actual app screenshots
    tags: [
      "Flutter",
      "Firebase",
      "Provider",
      "Cloud Firestore",
      "Firebase Storage",
      "Firebase Auth",
    ],
    features: [
      "Real-time chat functionality",
      "Story sharing feature",
      "Post creation and sharing",
      "User authentication",
      "Profile customization",
      "Dark/Light theme",
    ],
    link: "https://github.com/muzzammil763/Chatter",
  }
];

export const Projects = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Featured Projects</h2>
          <p className="text-secondary/80 max-w-2xl mx-auto">
            Showcasing my expertise in mobile app development with Flutter
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl overflow-hidden hover-card"
            >
              <div className="grid md:grid-cols-2 gap-6 p-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-display font-semibold">
                    {project.title}
                  </h3>
                  <p className="text-secondary/80">{project.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold">Key Features:</h4>
                    <ul className="list-disc list-inside space-y-1 text-secondary/80">
                      {project.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>

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

                  <div className="flex gap-4 pt-4">
                    <Button
                      variant="default"
                      className="flex items-center gap-2"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        View Source
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="aspect-[9/16] bg-accent/20 rounded-lg flex items-center justify-center">
                    <Smartphone className="w-12 h-12 text-primary/50" />
                  </div>
                  <p className="text-center text-sm text-secondary/60">
                    App screenshots coming soon
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};