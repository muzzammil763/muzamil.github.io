import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "./ui/carousel";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "Chatter - Messaging App",
    description: "A Feature-Rich Messaging Application Built With Flutter, Offering Real-Time Chat, Group Messaging & Comprehensive User Management.",
    screenshots: Array.from({ length: 15 }, (_, i) => `/screenshots/screenshot${i + 1}.jpg`),
    tags: [
      "Firebase",
      "Firebase Auth",
      "Animations",
      "Firebase Analytics",
      "Riverpod",
      "Push Notifications",
      "Flutter & Dart",
    ],
    features: [
      "Authentication With Email & Google Sign-In",
      "Real-Time Messaging With Read Receipts & User Online Status",
      "Group Chat Functionality",
      "User Profiles With Follow System",
      "Admin Panel With Analytics",
      "Automated Updates System Manager",
    ],
    detailedFeatures: {
      auth: [
        "Email Sign-Up/Login With Password Recovery",
        "Google Authentication",
        "Account Binding With Google",
      ],
      chat: [
        "Real-Time Messaging With Animations",
        "Message Read Indicators",
        "User Online Status",
        "Last Message Preview",
        "Unread Message Indicators",
      ],
      admin: [
        "User Management Dashboard",
        "Analytics & Statistics",
        "Push Notification System",
        "Update Management",
        "Developer Mode & Others",
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
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    return () => {};
  }, [api]);

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold mb-4">Featured Projects</h2>
          <p className="text-black/60 dark:text-white/60 max-w-2xl mx-auto">
            Showcasing My Expertise In Mobile App Development With Flutter
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
              className="glass-card rounded-2xl overflow-hidden bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
            >
              <div className="grid md:grid-cols-2 gap-6 p-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-display font-semibold text-black dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-black/60 dark:text-white/60">{project.description}</p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-black dark:text-white">Authentication:</h4>
                      <ul className="list-disc list-inside space-y-1 text-black/60 dark:text-white/60">
                        {project.detailedFeatures.auth.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-black dark:text-white">Chat Features:</h4>
                      <ul className="list-disc list-inside space-y-1 text-black/60 dark:text-white/60">
                        {project.detailedFeatures.chat.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-black dark:text-white">Admin Features:</h4>
                      <ul className="list-disc list-inside space-y-1 text-black/60 dark:text-white/60">
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
                        className="px-3 py-1 text-sm rounded-full bg-black/10 dark:bg-white/10 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
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
                  <Carousel
                    className="w-full relative group"
                    setApi={setApi}
                  >
                    <CarouselContent>
                      {project.screenshots.map((screenshot, index) => (
                        <CarouselItem key={index}>
                          <div className="aspect-[1080/2221] rounded-lg overflow-hidden md:max-w-[80%] md:mx-auto">
                            <img
                              src={screenshot}
                              alt={`${project.title} App Screenshot ${index + 1}`}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex" />
                    <CarouselNext className="hidden md:flex" />
                  </Carousel>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="flex justify-center gap-2">
                      {project.screenshots.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => api?.scrollTo(index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            current === index
                              ? "bg-white"
                              : "bg-white/40"
                          }`}
                          aria-label={`Go to Screenshot ${index + 1}`}
                        />
                      ))}
                    </div>
                    <p className="text-center text-sm text-black/60 dark:text-white/60">
                      Swipe Or Use Dots To Navigate Screenshots
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};