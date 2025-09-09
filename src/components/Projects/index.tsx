'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CardHoverEffect } from '@/components/ui/pulse-card';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  metrics?: {
    performance: string;
    accessibility: string;
    bundleSize: string;
  };
  links: {
    live: string;
    github: string;
  };
  status: 'completed' | 'in-progress' | 'archived';
  category: 'frontend' | 'fullstack' | 'mobile' | 'tooling';
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Modern e-commerce solution with advanced filtering, cart management, and payment integration.',
    longDescription: 'Built a comprehensive e-commerce platform featuring real-time inventory management, advanced product filtering, secure payment processing, and admin dashboard. Implemented performance optimizations resulting in 40% faster load times.',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
    features: [
      'Real-time inventory tracking',
      'Advanced product filtering & search',
      'Secure payment processing',
      'Admin dashboard with analytics',
      'Mobile-responsive design',
      'SEO optimization'
    ],
    challenges: [
      'Optimized large product catalogs for performance',
      'Implemented complex filtering with URL state management',
      'Built scalable cart state management',
      'Ensured PCI compliance for payments'
    ],
    metrics: {
      performance: '95/100 Lighthouse Score',
      accessibility: '100/100 WCAG 2.1 AA',
      bundleSize: '45KB gzipped'
    },
    links: {
      live: 'https://ecommerce-demo.vercel.app',
      github: 'https://github.com/your-username/ecommerce-platform'
    },
    status: 'completed',
    category: 'fullstack'
  },
  {
    id: 2,
    title: 'Design System Library',
    description: 'Comprehensive component library with documentation, theming, and accessibility features.',
    longDescription: 'Created a design system from scratch with 50+ reusable components, comprehensive documentation, and automated testing. Used by 3 teams across the organization, reducing development time by 60%.',
    technologies: ['React', 'TypeScript', 'Storybook', 'Jest', 'Styled Components', 'Figma'],
    features: [
      '50+ reusable components',
      'Comprehensive documentation',
      'Automated visual testing',
      'Dark/light theme support',
      'Accessibility compliance',
      'NPM package distribution'
    ],
    challenges: [
      'Designed flexible component APIs',
      'Implemented comprehensive testing strategy',
      'Created automated documentation generation',
      'Ensured cross-browser compatibility'
    ],
    metrics: {
      performance: 'Bundle size < 100KB',
      accessibility: '100% keyboard navigable',
      bundleSize: '98KB gzipped'
    },
    links: {
      live: 'https://design-system-docs.vercel.app',
      github: 'https://github.com/your-username/design-system'
    },
    status: 'completed',
    category: 'frontend'
  },
  {
    id: 3,
    title: 'Real-time Dashboard',
    description: 'Analytics dashboard with real-time data visualization and interactive charts.',
    longDescription: 'Built a real-time analytics dashboard processing 10K+ events per minute. Features include interactive charts, custom date ranges, data export, and role-based access control.',
    technologies: ['React', 'D3.js', 'WebSocket', 'Node.js', 'Redis', 'MongoDB'],
    features: [
      'Real-time data visualization',
      'Interactive charts & graphs',
      'Custom date range filtering',
      'Data export functionality',
      'Role-based access control',
      'Mobile-responsive design'
    ],
    challenges: [
      'Optimized real-time data rendering',
      'Implemented efficient WebSocket connections',
      'Created smooth animations for large datasets',
      'Built responsive chart components'
    ],
    metrics: {
      performance: 'Sub-100ms data updates',
      accessibility: 'Screen reader compatible',
      bundleSize: '120KB gzipped'
    },
    links: {
      live: 'https://analytics-dashboard.vercel.app',
      github: 'https://github.com/your-username/analytics-dashboard'
    },
    status: 'completed',
    category: 'frontend'
  },
  {
    id: 4,
    title: 'Mobile-First PWA',
    description: 'Progressive Web App with offline functionality and push notifications.',
    longDescription: 'Developed a mobile-first PWA with offline capabilities, push notifications, and app-like experience. Achieved 90+ Lighthouse scores across all metrics and 40% increase in user engagement.',
    technologies: ['Next.js', 'Service Workers', 'Web Push API', 'IndexedDB', 'Workbox'],
    features: [
      'Offline functionality',
      'Push notifications',
      'App-like experience',
      'Background sync',
      'Install prompts',
      'Responsive design'
    ],
    challenges: [
      'Implemented complex offline strategies',
      'Optimized service worker caching',
      'Built reliable push notification system',
      'Ensured cross-platform compatibility'
    ],
    metrics: {
      performance: '92/100 Lighthouse Score',
      accessibility: '95/100 Accessibility Score',
      bundleSize: '85KB gzipped'
    },
    links: {
      live: 'https://pwa-demo.vercel.app',
      github: 'https://github.com/your-username/mobile-pwa'
    },
    status: 'completed',
    category: 'mobile'
  }
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -10 }}
      className="group"
    >
      <CardHoverEffect
        icon={<ExternalLink className="h-6 w-6" />}
        title={project.title}
        description={project.description}
        variant={index % 2 === 0 ? 'purple' : 'blue'}
        glowEffect={true}
        size="lg"
        className="h-full"
      >
        <div className="space-y-6">
          {/* Project Image */}
          <div className="relative aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                <ExternalLink className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
              <div className="flex items-center justify-center gap-4">
                <span className="text-sm font-medium text-muted-foreground">
                  {project.category.toUpperCase()}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  project.status === 'completed' 
                    ? 'bg-green-500/20 text-green-400' 
                    : project.status === 'in-progress'
                    ? 'bg-blue-500/20 text-blue-400'
                    : 'bg-gray-500/20 text-gray-400'
                }`}>
                  {project.status.replace('-', ' ')}
                </span>
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-muted rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-sm font-semibold mb-2">Key Features</h4>
            <ul className="space-y-1">
              {project.features.slice(0, 3).map((feature) => (
                <li key={feature} className="text-xs text-muted-foreground flex items-center gap-2">
                  <ArrowRight className="h-3 w-3 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Metrics */}
          {project.metrics && (
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-2 bg-muted/50 rounded">
                <div className="text-xs font-medium text-primary">{project.metrics.performance}</div>
                <div className="text-xs text-muted-foreground">Performance</div>
              </div>
              <div className="p-2 bg-muted/50 rounded">
                <div className="text-xs font-medium text-primary">{project.metrics.accessibility}</div>
                <div className="text-xs text-muted-foreground">Accessibility</div>
              </div>
              <div className="p-2 bg-muted/50 rounded">
                <div className="text-xs font-medium text-primary">{project.metrics.bundleSize}</div>
                <div className="text-xs text-muted-foreground">Bundle Size</div>
              </div>
            </div>
          )}

          {/* Links */}
          <div className="flex gap-3">
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </a>
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-muted transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>
      </CardHoverEffect>
    </motion.div>
  );
};

export default function Projects() {
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
            Featured Projects
          </h2>
          <p className="mt-6 text-xl text-muted-foreground">
            A showcase of my recent work, highlighting technical challenges, performance optimizations, and user experience design
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            <Github className="h-5 w-5" />
            View All Projects on GitHub
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
