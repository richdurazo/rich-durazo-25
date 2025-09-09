'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CardHoverEffect } from '@/components/ui/pulse-card';
import {
  Code2,
  Palette,
  Zap,
  Database,
  GitBranch,
  Smartphone,
  Layers,
} from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Array<{
    name: string;
    level: number; // 1-5
    description: string;
  }>;
  color: 'purple' | 'blue' | 'amber' | 'rose' | 'green' | 'indigo';
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    icon: <Code2 className="h-6 w-6" />,
    color: 'purple',
    skills: [
      { name: 'React', level: 5, description: 'Advanced patterns, hooks, context, performance optimization' },
      { name: 'Next.js', level: 5, description: 'App Router, SSG/SSR, API routes, middleware' },
      { name: 'TypeScript', level: 4, description: 'Advanced types, generics, utility types, strict mode' },
      { name: 'Tailwind CSS', level: 5, description: 'Custom design systems, responsive design, animations' },
      { name: 'HTML/CSS', level: 5, description: 'Semantic markup, modern CSS, accessibility' },
    ],
  },
  {
    title: 'UI/UX Design',
    icon: <Palette className="h-6 w-6" />,
    color: 'blue',
    skills: [
      { name: 'Design Systems', level: 4, description: 'Component libraries, design tokens, consistency' },
      { name: 'Figma', level: 4, description: 'Wireframing, prototyping, design handoff' },
      { name: 'User Research', level: 3, description: 'Usability testing, user interviews, personas' },
      { name: 'Accessibility', level: 4, description: 'WCAG 2.1, screen readers, keyboard navigation' },
      { name: 'Responsive Design', level: 5, description: 'Mobile-first, breakpoints, fluid layouts' },
    ],
  },
  {
    title: 'Performance & Optimization',
    icon: <Zap className="h-6 w-6" />,
    color: 'amber',
    skills: [
      { name: 'Core Web Vitals', level: 4, description: 'LCP, FID, CLS optimization strategies' },
      { name: 'Bundle Optimization', level: 4, description: 'Code splitting, tree shaking, lazy loading' },
      { name: 'Image Optimization', level: 5, description: 'WebP/AVIF, responsive images, lazy loading' },
      { name: 'Caching Strategies', level: 3, description: 'Service workers, CDN, browser caching' },
      { name: 'Performance Monitoring', level: 3, description: 'Lighthouse, WebPageTest, real user metrics' },
    ],
  },
  {
    title: 'Backend & APIs',
    icon: <Database className="h-6 w-6" />,
    color: 'green',
    skills: [
      { name: 'Node.js', level: 3, description: 'Express, middleware, async patterns' },
      { name: 'REST APIs', level: 4, description: 'Design, documentation, error handling' },
      { name: 'GraphQL', level: 3, description: 'Queries, mutations, subscriptions' },
      { name: 'Database Design', level: 3, description: 'SQL, NoSQL, query optimization' },
      { name: 'Authentication', level: 4, description: 'JWT, OAuth, session management' },
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: <GitBranch className="h-6 w-6" />,
    color: 'indigo',
    skills: [
      { name: 'Git', level: 4, description: 'Advanced workflows, rebasing, conflict resolution' },
      { name: 'CI/CD', level: 3, description: 'GitHub Actions, automated testing, deployment' },
      { name: 'Docker', level: 3, description: 'Containerization, multi-stage builds' },
      { name: 'Testing', level: 4, description: 'Jest, React Testing Library, E2E testing' },
      { name: 'Monitoring', level: 3, description: 'Error tracking, analytics, performance monitoring' },
    ],
  },
  {
    title: 'Mobile & Cross-Platform',
    icon: <Smartphone className="h-6 w-6" />,
    color: 'rose',
    skills: [
      { name: 'React Native', level: 3, description: 'Cross-platform mobile development' },
      { name: 'Progressive Web Apps', level: 4, description: 'Service workers, offline functionality' },
      { name: 'Responsive Design', level: 5, description: 'Mobile-first, touch interactions' },
      { name: 'Cross-Browser', level: 4, description: 'Compatibility, polyfills, graceful degradation' },
      { name: 'Performance', level: 4, description: 'Mobile optimization, network efficiency' },
    ],
  },
];

const SkillBar = ({ level, name }: { level: number; name: string }) => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs text-muted-foreground">{level}/5</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <motion.div
          className="bg-gradient-to-r from-primary to-primary/70 h-2 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${(level / 5) * 100}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
};

export default function Skills() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section className="relative w-full overflow-hidden py-20" ref={containerRef}>
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <h2 className="bg-gradient-to-r from-foreground/80 via-foreground to-foreground/80 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
            Technical Skills
          </h2>
          <p className="mt-6 text-xl text-muted-foreground">
            A comprehensive toolkit for building modern, performant, and accessible web applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{
                duration: 0.6,
                delay: categoryIndex * 0.1,
                ease: 'easeOut',
              }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <CardHoverEffect
                icon={category.icon}
                title={category.title}
                description=""
                variant={category.color}
                glowEffect={true}
                size="lg"
                className="h-full"
              >
                <div className="space-y-4 mt-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                        ease: 'easeOut',
                      }}
                    >
                      <SkillBar level={skill.level} name={skill.name} />
                      <p className="text-xs text-muted-foreground mt-1">
                        {skill.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </CardHoverEffect>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-muted/50 px-6 py-3">
            <Layers className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">
              Continuously learning and adapting to new technologies
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
