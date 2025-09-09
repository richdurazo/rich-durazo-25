'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CardHoverEffect } from '@/components/ui/pulse-card';
import {
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  ExternalLink,
} from 'lucide-react';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  type: 'work' | 'education' | 'certification';
  current?: boolean;
  link?: string;
}

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    title: 'Senior Frontend Engineer',
    company: 'Tech Company',
    location: 'Los Angeles, CA',
    period: '2022 - Present',
    description: 'Lead frontend development for customer-facing applications, mentor junior developers, and drive technical architecture decisions.',
    achievements: [
      'Led migration of legacy React app to Next.js 13, improving performance by 40%',
      'Implemented design system used by 50+ developers across 3 teams',
      'Reduced bundle size by 35% through code splitting and optimization',
      'Mentored 4 junior developers, improving team productivity by 25%',
      'Established CI/CD pipeline reducing deployment time by 60%'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'GraphQL', 'Jest'],
    type: 'work',
    current: true,
    link: 'https://company.com'
  },
  {
    id: 2,
    title: 'Frontend Developer',
    company: 'Startup Inc.',
    location: 'San Francisco, CA',
    period: '2020 - 2022',
    description: 'Developed responsive web applications and collaborated with design team to implement pixel-perfect UIs.',
    achievements: [
      'Built customer dashboard serving 10K+ daily active users',
      'Implemented real-time features using WebSockets',
      'Improved Core Web Vitals scores to 95+ across all metrics',
      'Collaborated with design team to create reusable component library'
    ],
    technologies: ['React', 'Redux', 'Styled Components', 'Node.js', 'PostgreSQL'],
    type: 'work',
    link: 'https://startup.com'
  },
  {
    id: 3,
    title: 'Master of Science in Computer Science',
    company: 'Georgia Institute of Technology',
    location: 'Atlanta, GA',
    period: '2023 - 2025',
    description: 'Specializing in Artificial Intelligence and Machine Learning with focus on human-computer interaction.',
    achievements: [
      'GPA: 3.8/4.0',
      'Specialization: Artificial Intelligence',
      'Relevant Coursework: Machine Learning, Deep Learning, HCI',
      'Research: AI-powered user interface optimization'
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'Machine Learning', 'AI'],
    type: 'education',
    current: true
  },
  {
    id: 4,
    title: 'Bachelor of Science in Computer Science',
    company: 'University of California',
    location: 'Los Angeles, CA',
    period: '2016 - 2020',
    description: 'Comprehensive computer science education with focus on software engineering and web development.',
    achievements: [
      'GPA: 3.7/4.0',
      'Dean\'s List: 6 semesters',
      'Senior Capstone: E-commerce platform with 1000+ users',
      'Relevant Coursework: Data Structures, Algorithms, Web Development'
    ],
    technologies: ['Java', 'C++', 'JavaScript', 'HTML/CSS', 'SQL'],
    type: 'education'
  },
  {
    id: 5,
    title: 'AWS Certified Solutions Architect',
    company: 'Amazon Web Services',
    location: 'Remote',
    period: '2023',
    description: 'Professional certification demonstrating expertise in designing distributed systems on AWS.',
    achievements: [
      'Validated expertise in AWS services and architecture',
      'Demonstrated ability to design scalable cloud solutions',
      'Understanding of security, reliability, and cost optimization'
    ],
    technologies: ['AWS', 'Cloud Architecture', 'DevOps', 'Infrastructure'],
    type: 'certification',
    link: 'https://aws.amazon.com/certification/'
  }
];

const getTypeIcon = (type: ExperienceItem['type']) => {
  switch (type) {
    case 'work':
      return <Briefcase className="h-5 w-5" />;
    case 'education':
      return <GraduationCap className="h-5 w-5" />;
    case 'certification':
      return <Award className="h-5 w-5" />;
    default:
      return <Briefcase className="h-5 w-5" />;
  }
};

const getTypeColor = (type: ExperienceItem['type']) => {
  switch (type) {
    case 'work':
      return 'purple';
    case 'education':
      return 'blue';
    case 'certification':
      return 'amber';
    default:
      return 'purple';
  }
};

const ExperienceCard = ({ experience, index }: { experience: ExperienceItem; index: number }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      className={`relative ${index % 2 === 0 ? 'md:mr-auto md:w-5/12' : 'md:ml-auto md:w-5/12'}`}
    >
      <CardHoverEffect
        icon={getTypeIcon(experience.type)}
        title={experience.title}
        description={`${experience.company} • ${experience.period}`}
        variant={getTypeColor(experience.type)}
        glowEffect={true}
        size="lg"
        className="h-full"
      >
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                {experience.title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{experience.company}</span>
                {experience.link && (
                  <a
                    href={experience.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
              <div className="flex items-center gap-4 text-xs text-muted-foreground mt-1">
                <div className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {experience.location}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {experience.period}
                  {experience.current && (
                    <span className="px-2 py-0.5 bg-green-500/20 text-green-400 rounded-full text-xs">
                      Current
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground">
            {experience.description}
          </p>

          {/* Achievements */}
          <div>
            <h4 className="text-sm font-semibold mb-2">Key Achievements</h4>
            <ul className="space-y-1">
              {experience.achievements.slice(0, 3).map((achievement, idx) => (
                <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="text-sm font-semibold mb-2">Technologies</h4>
            <div className="flex flex-wrap gap-1">
              {experience.technologies.slice(0, 6).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-muted/50 rounded text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
              {experience.technologies.length > 6 && (
                <span className="px-2 py-1 bg-muted/50 rounded text-xs font-medium">
                  +{experience.technologies.length - 6} more
                </span>
              )}
            </div>
          </div>
        </div>
      </CardHoverEffect>
    </motion.div>
  );
};

export default function Experience() {
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
            Experience & Education
          </h2>
          <p className="mt-6 text-xl text-muted-foreground">
            My professional journey, academic background, and continuous learning in technology
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary via-primary/50 to-primary hidden md:block" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experienceData.map((experience, index) => (
              <ExperienceCard key={experience.id} experience={experience} index={index} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8, ease: 'easeOut' }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-muted/50 px-6 py-3">
            <Briefcase className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">
              Always open to new opportunities and collaborations
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
