import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase } from 'lucide-react';

const ExperienceSection = ({ data }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="flex min-h-screen items-center justify-center px-4 py-20">
      <div className="w-full max-w-4xl">
        <motion.h2
          className="mb-12 text-5xl font-bold text-foreground md:text-6xl"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        <div className="space-y-6">
          {data.experience.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              className="rounded-2xl bg-card/80 p-6 shadow-elegant backdrop-blur-sm md:p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.2 + 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.01, boxShadow: "var(--shadow-glow)" }}
            >
              <div className="mb-4 flex items-start gap-4">
                <div
                  className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                  style={{
                    background: index % 2 === 0
                      ? 'var(--gradient-primary)'
                      : 'var(--gradient-secondary)',
                  }}
                >
                  <Briefcase className="h-5 w-5 text-primary-foreground" />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                    <span className="font-medium text-primary">{exp.company}</span>
                    {exp.duration && (
                      <>
                        <span className="text-muted-foreground">|</span>
                        <span className="text-muted-foreground">{exp.duration}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <ul className="ml-14 space-y-2">
                {exp.responsibilities.map((item, i) => (
                  <motion.li
                    key={i}
                    className="relative pl-4 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary md:text-base"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: index * 0.2 + i * 0.1 + 0.4, duration: 0.4 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
