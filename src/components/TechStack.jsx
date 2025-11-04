import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Cpu } from 'lucide-react';

const skills = [
  { icon: Code, label: 'React', color: 'from-sky-400 to-blue-500' },
  { icon: Server, label: 'FastAPI', color: 'from-emerald-400 to-teal-500' },
  { icon: Database, label: 'MongoDB', color: 'from-lime-400 to-green-500' },
  { icon: Cpu, label: 'Node.js', color: 'from-yellow-400 to-amber-500' },
];

const TechStack = () => {
  return (
    <section id="stack" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
          Tech Stack
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          Tools I use to build fast, maintainable applications.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {skills.map(({ icon: Icon, label, color }, idx) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-white/5"
          >
            <div
              className={`absolute inset-0 -z-0 bg-gradient-to-br ${color} opacity-0 transition group-hover:opacity-10`}
            />
            <div className="relative z-10 flex flex-col items-center gap-3">
              <div className="rounded-lg bg-gradient-to-br from-white/10 to-white/5 p-3 backdrop-blur">
                <Icon className="h-6 w-6 text-gray-900 dark:text-white" />
              </div>
              <span className="text-sm font-medium text-gray-800 dark:text-gray-100">
                {label}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
