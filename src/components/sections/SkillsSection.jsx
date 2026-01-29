import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const gradients = [
  'var(--gradient-primary)',
  'var(--gradient-secondary)',
  'var(--gradient-tertiary)',
  'var(--gradient-rainbow)',
];

const SkillsSection = ({ data }) => {
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
          Skills
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2">
          {data.skillCategories.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              className="rounded-2xl bg-card/80 p-6 shadow-elegant backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: groupIndex * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.02, boxShadow: "var(--shadow-glow)" }}
            >
              <div className="mb-4 flex items-center gap-3">
                <div
                  className="h-3 w-3 rounded-full"
                  style={{ background: gradients[groupIndex % gradients.length] }}
                />
                <h3 className="text-lg font-semibold text-foreground">
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="rounded-full bg-muted px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:bg-primary-glow hover:text-primary"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{
                      delay: groupIndex * 0.15 + skillIndex * 0.05 + 0.3,
                      duration: 0.4,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
