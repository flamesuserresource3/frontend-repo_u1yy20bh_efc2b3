import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
          Let’s collaborate
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          Have a project in mind or just want to say hi? I’m open to freelance, full‑time, and collaborations.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-xl gap-4">
        <motion.a
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4 }}
          href="mailto:you@example.com"
          className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-white/5"
        >
          <span className="inline-flex items-center gap-3 text-gray-800 dark:text-gray-100">
            <Mail size={20} /> you@example.com
          </span>
          <span className="text-sm text-gray-500">Email</span>
        </motion.a>

        <motion.a
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-white/5"
        >
          <span className="inline-flex items-center gap-3 text-gray-800 dark:text-gray-100">
            <Linkedin size={20} /> @your-handle
          </span>
          <span className="text-sm text-gray-500">LinkedIn</span>
        </motion.a>

        <motion.a
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-white/5"
        >
          <span className="inline-flex items-center gap-3 text-gray-800 dark:text-gray-100">
            <Github size={20} /> @your-username
          </span>
          <span className="text-sm text-gray-500">GitHub</span>
        </motion.a>
      </div>

      <p className="mt-8 text-center text-sm text-gray-500">
        Prefer a direct chat? Book a 15‑min intro call — link available upon request.
      </p>
    </section>
  );
};

export default Contact;
