import { motion } from "framer-motion";

const projects = [
  {
    title: "Project One",
    description: "Description of project one.",
    image: "/project-one.png",
  },
  {
    title: "Project Two",
    description: "Description of project two.",
    image: "/project-two.png",
  },
  {
    title: "Project Three",
    description: "Description of project three.",
    image: "/project-three.png",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-display font-bold mb-4 text-[#0c4af3] dark:text-[#4c7af9]">
            Projects
          </h2>
          <p className="text-black/60 dark:text-white/60 max-w-2xl mx-auto text-lg">
            Some of my recent works
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-black rounded-lg shadow-lg overflow-hidden"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[#0c4af3] dark:text-[#4c7af9]">{project.title}</h3>
                <p className="text-black/60 dark:text-white/60">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};