import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      title: 'OneBanc',
      subtitle: 'Wealth Management',
      color: 'emerald',
      year: '2024',
      tags: ['Fintech', 'Web', 'Mobile'],
      slug: 'onebanc'
    },
    {
      title: 'FinTrack',
      subtitle: 'Finance Dashboard',
      color: 'cyan',
      year: '2024',
      tags: ['SaaS', 'Web', 'MERN'],
      slug: 'fintrack'
    },
    {
      title: 'Investment App',
      subtitle: 'Beginner Trading',
      color: 'amber',
      year: '2024',
      tags: ['Fintech', 'Mobile'],
      slug: 'investment-app'
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Animated background elements */}
        <motion.div
          animate={{
            x: mousePosition.x,
            y: mousePosition.y,
          }}
          transition={{ type: 'spring', stiffness: 50 }}
          className="absolute inset-0 opacity-30"
        >
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-emerald-400/20 rotate-45" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 border border-cyan-400/20 -rotate-12" />
        </motion.div>

        <div className="container-custom px-6 md:px-12 relative z-10">
          <div className="max-w-5xl">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-px w-12 bg-emerald-400" />
              <span className="font-mono text-sm text-emerald-400 tracking-[0.2em]">
                UI/UX DESIGNER
              </span>
            </motion.div>

            {/* Main Heading - Staggered Animation */}
            <div className="space-y-4 mb-8">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-none"
              >
                CRAFTING
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center gap-4 md:gap-6"
              >
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-none">
                  DIGITAL
                </h1>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="hidden md:block w-16 h-16 lg:w-24 lg:h-24 border-2 border-amber-400 relative"
                >
                  <div className="absolute inset-2 bg-amber-400/20" />
                </motion.div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-none gradient-text"
              >
                EXPERIENCES
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="font-mono text-lg md:text-xl text-ash max-w-2xl mb-12 leading-relaxed"
            >
              Specialized in fintech and enterprise software. 
              <span className="text-emerald-400"> User research</span>, 
              <span className="text-cyan-400"> interaction design</span>, and 
              <span className="text-amber-400"> visual craft</span> that solves real problems.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/work" className="btn-primary group relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  VIEW WORK
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shimmer" />
              </Link>

              <Link to="/contact" className="btn-secondary group">
                LET'S TALK
                <svg className="w-5 h-5 inline-block ml-2 group-hover:rotate-45 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-wrap gap-8 md:gap-12 mt-16 pt-8 border-t border-zinc/50"
            >
              <div>
                <div className="font-display text-4xl font-bold text-emerald-400">5+</div>
                <div className="font-mono text-sm text-ash mt-1">Projects</div>
              </div>
              <div>
                <div className="font-display text-4xl font-bold text-cyan-400">3+</div>
                <div className="font-mono text-sm text-ash mt-1">Years Learning</div>
              </div>
              <div>
                <div className="font-display text-4xl font-bold text-amber-400">∞</div>
                <div className="font-mono text-sm text-ash mt-1">Iterations</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="font-mono text-xs text-ash tracking-widest">SCROLL</span>
            <div className="w-px h-12 bg-gradient-to-b from-emerald-400 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Work Section */}
      <section className="section-padding relative">
        <div className="container-custom">
          {/* Section Header */}
          <div className="flex items-end justify-between mb-16">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-4"
              >
                <div className="h-px w-12 bg-emerald-400" />
                <span className="font-mono text-sm text-emerald-400 tracking-[0.2em]">
                  SELECTED WORK
                </span>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-display text-4xl md:text-6xl font-bold"
              >
                Recent Projects
              </motion.h2>
            </div>

            <Link
              to="/work"
              className="hidden md:flex items-center gap-2 font-mono text-sm text-emerald-400 hover:gap-4 transition-all"
            >
              VIEW ALL
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Project Grid */}
          <div className="space-y-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/work/${project.slug}`} className="project-card block">
                  <div className="p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <span className={`font-mono text-xs px-3 py-1 bg-${project.color}-400/10 text-${project.color}-400 border border-${project.color}-400/20`}>
                          {project.year}
                        </span>
                        {project.tags.map((tag) => (
                          <span key={tag} className="font-mono text-xs text-ash">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <h3 className="font-display text-3xl md:text-5xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="font-mono text-lg text-ash">
                        {project.subtitle}
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 border-2 border-${project.color}-400 flex items-center justify-center group-hover:bg-${project.color}-400 transition-all`}>
                        <svg className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 via-emerald-400/5 to-emerald-400/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile View All */}
          <div className="md:hidden mt-8">
            <Link to="/work" className="btn-primary w-full justify-center flex">
              VIEW ALL PROJECTS
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section - Marquee Style */}
      <section className="py-20 border-y border-zinc/50 overflow-hidden">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="flex gap-12 whitespace-nowrap"
        >
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-12">
              {['User Research', 'Wireframing', 'Prototyping', 'UI Design', 'Design Systems', 'Figma', 'React', 'Tailwind'].map((skill) => (
                <span key={skill} className="font-mono text-2xl md:text-4xl text-zinc">
                  {skill}
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
