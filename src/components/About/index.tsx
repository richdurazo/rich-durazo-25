'use client';
 
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BorderBeam } from '@/components/ui/border-beam';
import { CardHoverEffect } from '@/components/ui/pulse-card';
import {
  Globe,
  Users,
  Heart,
  Lightbulb,
  Sparkles,
  Rocket,
  Target,
} from 'lucide-react';
 
interface AboutUsProps {
  title?: string;
  subtitle?: string;
  mission?: string;
  vision?: string;
  values?: Array<{
    title: string;
    description: string;
    icon: keyof typeof iconComponents;
  }>;
  className?: string;
}
 
const iconComponents = {
  Users: Users,
  Heart: Heart,
  Lightbulb: Lightbulb,
  Globe: Globe,
  Sparkles: Sparkles,
  Rocket: Rocket,
  Target: Target,
};
 
const defaultValues: AboutUsProps['values'] = [
  {
    title: 'Curiosity',
    description:
      'I’m driven by a desire to understand — from how users think to how systems behave. I approach engineering with a learner’s mindset and a willingness to explore the unknown.',
    icon: 'Lightbulb',
  },
  {
    title: 'Authentic Collaboration',
    description:
      'I value honest, human connection in teams. I work best with people who communicate openly, respect each other’s differences, and aren’t afraid to be themselves.',
    icon: 'Users',
  },
  {
    title: 'Creative Craft',
    description:
      'Frontend development is my medium for creativity. I love building interfaces that are both beautiful and functional — thoughtful experiences that reflect care and intention.',
    icon: 'Sparkles',
  },
  {
    title: 'Integrity & Impact',
    description:
      'I care about the long-term effects of the things I build. I aim to create software that not only works well but does right by the people who use it — with empathy, honesty, and purpose.',
    icon: 'Globe',
  },
];

export default function AboutMe() {

const aboutData = {
  title: 'About Me',
  subtitle:
    'I’m Richard — a software engineer with a passion for thoughtful design, clean code, and the kind of user experiences that just feel right.',
  mission:
    'I’m currently pursuing a master’s degree in Computer Science at Georgia Tech, specializing in AI. My mission is to keep learning, building, and exploring how intelligent systems can make software more human, helpful, and creative.',
  vision:
    'I see technology as a tool for empowerment. Whether it’s a beautifully crafted interface or an AI-powered workflow, I aim to build things that feel intuitive, performant, and purposeful.',
  values: defaultValues,
  className: 'relative overflow-hidden py-20',
};

  const missionRef = useRef(null);
  const valuesRef = useRef(null);
 
  const missionInView = useInView(missionRef, { once: true, amount: 0.3 });
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.3 });
 
  return (
    <section className="relative w-full overflow-hidden pt-20">

 
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Header Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h1 className="bg-gradient-to-r from-foreground/80 via-foreground to-foreground/80 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl">
            {aboutData.title}
          </h1>
          <p className="mt-6 text-xl text-muted-foreground">
            {aboutData.subtitle}
          </p>
        </motion.div> */}
 
        {/* Mission & Vision Section */}
        <div ref={missionRef} className="relative mx-auto mb-24 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={
              missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
            }
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative z-10 grid gap-12 md:grid-cols-2"
          >
            <motion.div
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              className="group relative block overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br p-10 backdrop-blur-3xl"
            >
              <BorderBeam
                duration={8}
                size={300}
                className="from-transparent via-primary/40 to-transparent"
              />
 
              <div className="mb-6 inline-flex aspect-square h-16 w-16 flex-1 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm">
                <Rocket className="h-8 w-8 text-primary" />
              </div>
 
              <div className="space-y-4">
                <h2 className="mb-4 bg-gradient-to-r from-primary/90 to-primary/70 bg-clip-text text-3xl font-bold text-transparent">
                  My Mission
                </h2>
 
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {aboutData.mission}
                </p>
              </div>
            </motion.div>
 
            <motion.div
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              className="group relative block overflow-hidden rounded-2xl border border-border/40 bg-gradient-to-br p-10 backdrop-blur-3xl"
            >
              <BorderBeam
                duration={8}
                size={300}
                className="from-transparent via-blue-500/40 to-transparent"
                reverse
              />
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-500/5 backdrop-blur-sm">
                <Target className="h-8 w-8 text-blue-500" />
              </div>
 
              <h2 className="mb-4 bg-gradient-to-r from-blue-500/90 to-blue-500/70 bg-clip-text text-3xl font-bold text-transparent">
                My Vision
              </h2>
 
              <p className="text-lg leading-relaxed text-muted-foreground">
                {aboutData.vision}
              </p>
            </motion.div>
          </motion.div>
        </div>
 
        <div ref={valuesRef} className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-12 text-center"
          >
            <h2 className="bg-gradient-to-r from-foreground/80 via-foreground to-foreground/80 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
              My Core Values
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
             The principles that shape how I build, collaborate, and grow — as an engineer, a teammate, and a human.
            </p>
          </motion.div>
 
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {aboutData.values?.map((value, index) => {
              const IconComponent = iconComponents[value.icon];
 
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                  }
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1 + 0.2,
                    ease: 'easeOut',
                  }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <CardHoverEffect
                    icon={<IconComponent className="h-6 w-6" />}
                    title={value.title}
                    description={value.description}
                    variant={
                      index === 0
                        ? 'purple'
                        : index === 1
                          ? 'blue'
                          : index === 2
                            ? 'amber'
                            : 'rose'
                    }
                    glowEffect={true}
                    size="lg"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
 