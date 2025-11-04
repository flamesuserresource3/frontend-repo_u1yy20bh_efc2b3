import React from 'react';
import { motion } from 'framer-motion';
import { Github, Globe } from 'lucide-react';

const PROJECTS = [
  {
    title: 'TaskFlow — Team Task Manager',
    description:
      'A collaborative kanban board with real-time updates, drag-and-drop, and role-based access.',
    tags: ['React', 'FastAPI', 'MongoDB', 'Socket.io'],
    live: '#',
    repo: '#',
    image:
      'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'ShopLite — Headless Commerce',
    description:
      'Lightweight storefront with server-rendered product pages, payments, and analytics.',
    tags: ['React', 'FastAPI', 'Stripe', 'SSR'],
    live: '#',
    repo: '#',
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1400&auto=format&fit=crop',
  },
  {
    title: 'InsightHub — Data Dashboards',
    description:
      'Interactive dashboards with charts, filters, and scheduled reports for business KPIs.',
    tags: ['React', 'FastAPI', 'D3', 'Tailwind'],
    live: '#',
    repo: '#',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop',
  },
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-white/5"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {project.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-gray-600 dark:text-gray-300">
          {project.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-white/10 dark:text-gray-200"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-3">
          <a
            href={project.live}
            className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline"
          >
            <Globe size={16} /> Live
          </a>
          <a
            href={project.repo}
            className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:underline dark:text-gray-200"
          >
            <Github size={16} /> Code
          </a>
        </div>
      </div>
    </motion.article>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
          Featured Projects
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          A selection of work that showcases my approach to product and engineering.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <ProjectCard project={p} key={p.title} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
