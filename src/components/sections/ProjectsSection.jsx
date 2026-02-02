import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';

const ProjectsSection = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="flex min-h-screen items-center justify-center px-4 py-20">
      <div className="w-full max-w-6xl">
        <motion.h2
          className="mb-12 text-5xl font-bold text-foreground md:text-6xl"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2">
          {data.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <a
                href={project.link !== '#' ? project.link : undefined}
                target={project.link !== '#' ? '_blank' : undefined}
                rel={project.link !== '#' ? 'noopener noreferrer' : undefined}
                className={project.link !== '#' ? 'block h-full' : 'block h-full cursor-default'}
              >
                <Card className="group h-full overflow-hidden border-border bg-card/80 p-6 shadow-elegant backdrop-blur-sm transition-all duration-300 hover:shadow-glow">
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-4 flex items-start justify-between">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      {project.link !== '#' && (
                        <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      )}
                    </div>

                    <ul className="mb-4 space-y-1.5">
                      {project.highlights.map((point, i) => (
                        <li
                          key={i}
                          className="relative pl-4 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-primary-glow px-3 py-1 text-sm font-medium text-primary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
