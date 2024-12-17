import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const projects = [
  {
    title: "Chatter - Messaging App",
    description: "A feature-rich messaging application built with Flutter, offering real-time chat, group messaging, and comprehensive user management.",
    screenshots: Array.from({ length: 15 }, (_, i) => `/screenshots/screenshot${i + 1}.jpg`),
    tags: [
      "Flutter",
      "Firebase",
      "Riverpod",
      "Cloud Firestore",
      "Firebase Auth",
      "Firebase Analytics",
    ],
    features: [
      "Authentication with email and Google sign-in",
      "Real-time messaging with read receipts",
      "Group chat functionality",
      "User profiles with follow system",
      "Admin panel with analytics",
      "Automated updates system",
    ],
    detailedFeatures: {
      auth: [
        "Email signup/login with password recovery",
        "Google authentication",
        "Account binding with Google",
      ],
      chat: [
        "Real-time messaging with animations",
        "Message read indicators",
        "User online status",
        "Last message preview",
        "Unread message indicators",
      ],
      admin: [
        "User management dashboard",
        "Analytics and statistics",
        "Push notification system",
        "Update management",
        "Developer mode with API viewing",
      ],
    },
    link: "https://github.com/muzzammil763/Chatter",
    packages: [
      "firebase_core: ^3.8.0",
      "firebase_auth: ^5.3.3",
      "firebase_database: ^11.1.6",
      "riverpod: latest",
      "firebase_messaging: ^15.1.5",
      "flutter_local_notifications: ^18.0.1",
    ],
  },
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
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Authentication:</h4>
                      <ul className="list-disc list-inside space-y-1 text-secondary/80">
                        {project.detailedFeatures.auth.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Chat Features:</h4>
                      <ul className="list-disc list-inside space-y-1 text-secondary/80">
                        {project.detailedFeatures.chat.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Admin Features:</h4>
                      <ul className="list-disc list-inside space-y-1 text-secondary/80">
                        {project.detailedFeatures.admin.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm rounded-full bg-black/10 hover:bg-black hover:text-white transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-center gap-4 pt-4">
                    <Button
                      variant="default"
                      className="flex items-center gap-2 bg-black text-white hover:bg-black/90 transition-colors"
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
                  <Carousel className="w-full relative group">
                    <CarouselContent>
                      {project.screenshots.map((screenshot, index) => (
                        <CarouselItem key={index}>
                          <div className="aspect-[1080/2221] rounded-lg overflow-hidden">
                            <img 
                              src={screenshot} 
                              alt={`Chatter App Screenshot ${index + 1}`}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <div className="absolute -right-12 top-1/2 -translate-y-1/2 flex flex-col gap-4">
                      <CarouselPrevious className="relative -translate-y-1/2" />
                      <CarouselNext className="relative translate-y-1/2" />
                    </div>
                  </Carousel>
                  <p className="text-center text-sm text-secondary/60">
                    Swipe to see more screenshots
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