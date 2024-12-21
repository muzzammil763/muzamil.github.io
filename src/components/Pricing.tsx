import { motion } from "framer-motion";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Normal",
    price: 170,
    features: [
      "5-6 App Screens",
      "Basic Functionality",
      "Bug Fixes",
      "1 Week Delivery",
    ],
    notIncluded: ["Source Code", "App Icon"],
  },
  {
    name: "Medium",
    price: 300,
    features: [
      "10-12 App Screens",
      "Advanced Functionality",
      "Source Code Included",
      "App Icon Included",
      "Bug Fixes",
      "2 Weeks Delivery",
    ],
  },
  {
    name: "Premium",
    price: 500,
    features: [
      "Unlimited App Screens",
      "Complex Functionality",
      "Push Notifications",
      "Source Code Included",
      "App Icon Included",
      "Premium Support",
      "Bug Fixes",
      "3-4 Weeks Delivery",
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const Pricing = () => {
  return (
    <section className="py-20 px-4 bg-muted dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl font-display font-bold mb-4 text-[#0c4af3] dark:text-[#4c7af9]">
            Pricing
          </h2>
          <p className="text-black/60 dark:text-white/60 max-w-2xl mx-auto text-lg">
            Choose the Perfect Package for Your App
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative p-8 rounded-xl border border-black/10 dark:border-white/10 hover:border-[#0c4af3]/50 dark:hover:border-[#4c7af9]/50 transition-colors bg-white/50 dark:bg-black/50 backdrop-blur-sm hover:shadow-xl hover:-translate-y-1 duration-300"
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-display font-bold mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold text-[#0c4af3] dark:text-[#4c7af9]">
                  ${pkg.price}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-[#0c4af3] dark:text-[#4c7af9] shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
                {pkg.notIncluded?.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-black/40 dark:text-white/40 line-through">
                    <Check className="w-5 h-5 text-black/40 dark:text-white/40 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 px-6 rounded-lg bg-[#0c4af3] dark:bg-[#4c7af9] text-white font-semibold hover:opacity-90 transition-opacity">
                Get Started
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};